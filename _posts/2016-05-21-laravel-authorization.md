---
layout: posts
title: Laravelの権限メモ 
---
[Document](https://laravel.com/docs/5.2/authorization)  
`$user`とデータを引数にとってuserの権限の有無を返す関数を登録する。  
<br>

### 登録

`AuthServiceProvider`の`boot()`に記述する  
$userがnullかどうかは気にしない。nullなら自動的にfalseになる  

```
namespace App\Providers;

use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    public function boot(GateContract $gate)
    {
        $this->registerPolicies($gate);

        $gate->define('owner', function ($user, $car) {
            return $user->id === $car->user_id;
        });
    }
}
```

クラスメソッドを使用する場合

```
$gate->define('owner', 'Class@method');
```

**チェック前の処理**  

ここでtrueを返すとチェックがスキップされる

```
$gate->before(function ($user, $ability) {
    if ($user->isSuperAdmin()) {
        return true;
    }
});
```

**チェック後の処理**  

ここで検証結果を変更することはできない

```
$gate->after(function ($user, $ability, $result, $arguments) {
    //
});
```
<br>

### 登録した関数を使用する

**現在ログインしているユーザ**  

```
        if (Gate::denies('update-post', $post)) {
            abort(403);
        }
```

**ユーザを指定**  

```
if (Gate::forUser($user)->allows('update-post', $post)) {
    //
}
```

**user model**  

```
if ($request->user()->cannot('update-post', $post)) {
    //
}

if ($request->user()->can('update-post', $post)) {
    // 
}
```

**template** 

```
@can('update-post', $post)
    <!--  -->
@else
    <!--  -->
@endcan
```

**Form Requestクラス**  

Form Request Validation  
FooRequestクラス内  
rules()メソッドではルールを定義する  
authorize()は権限をチェックする。エラーなら403  
$this->route(param_name)で値をとるとこができる  

```
public function authorize()
{
    $postId = $this->route('post');
    return Gate::allows('update', Post::findOrFail($postId));
}
```
<br>

### 複数の引数を得る

```
Gate::define('title', function ($user, $param1, $param2) {
    //
});

if (Gate::allows('title', [$param1, $param2])) {
    //
}
```
<br>

### Policy























