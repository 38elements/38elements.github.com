---
layout: posts
title: laravelのModelメモ 
---
[Eloquent](https://laravel.com/docs/5.2/eloquent)  
テーブル名は複数形  
モデル名は単数形  

### Migration
**作成**   
--tableは対象となるテーブル名  
--createは生成するテーブル名  

```
php artisan make:migration class_name --table=table_name
php artisan make:migration class_name --create=table_name
```

**実行**   

```
php artisan migrate
```

**モデルの作成**  

```
php artisan make:model モデルクラス名
```
<br>

### リレーション
`<モデル名>_id`を持つテーブルのカラム名でリレーションを表す。  

Modelに以下のようなメソッドを実装する  

```
    public function users()
    {
        return $this->hasMany(User::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
```
<br>

### Policy
Modelのメソッドを実行するかどうかを判定する処理  

**Policyクラスの実装**  
`php artisan make:policy FooPolicy`

```
class FooPolicy
{
    use HandlesAuthorization;

    public function destroy(User $user, Foo $foo)
    {
        return $user->id === $foo->user_id;
    }
}
```

**Policyの登録**  
`app/Providers/AuthServiceProvider.php`の`$policies`に登録する  

```
protected $policies = [
    'App\Foo' => 'App\Policies\FooPolicy',
];
```

**モデルのメソッドでチェックする**

```
public function destroy(Request $request, Foo $foo)
{
    $this->authorize('destroy', $tfoo);
}
```

Policyはここにも記述がある [\*](/2016/05/20/laravel-authentication.html)  
