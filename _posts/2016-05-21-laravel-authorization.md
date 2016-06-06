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

$userがモデルの処理を実行できる権限の有無を返す  

### 作成

`app/Policies`の下にファイルが作成される

```
php artisan make:policy CarPolicy
```

beforeでスキップする条件を設定する

```
namespace App\Policies;

use App\User;
use App\Car;

class CarPolicy
{

    public function before($user, $ability)
    {
        if ($user->isAdmin()) {
            return true;
        }
    }

    public function own(User $user, Car $car)
    {
        return $user->id === $car->user_id;
    }
}
```

### 登録

`AuthServiceProvider`にモデルとそれに対応するポリシーを`$policies`プロパティに登録する  

```
namespace App\Providers;

use App\Foo;
use App\Policies\FooPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Foo::class => FooPolicy::class,
    ];
```
<br>

### 確認方法

**Gate Facade**  

```
<?php

namespace App\Http\Controllers;

use Gate;
use App\User;
use App\Car;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function update($id)
    {
        $car = Car::find($id);
        if (Gate::denies('own', $car)) {
            abort(403);
        }
    }
}
```

**User Model**  

```
if ($user->can('own', $car)) {
    //
}

if ($user->cannot('own', $car)) {
    //
}
```

**Blade Templates**  

```
@can('own', $car)
    
@endcan
```

**Policy Helper**  

```
if (policy($car)->own($user, $car)) {
    //
}
```

**Controller**  
コントローラのアクション名とモデルに対応するポリシーのメソッド名が同じ場合  
ポリシーのメソッド名を省略することができる

```
namespace App\Http\Controllers;

use App\Car;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function own($id)
    {
        $car = Car::find($id);
        // ログインしているユーザーに対して検証
        $this->authorize('own', $car);
        // メソッド名が同じなので上記は下記と同じ
         $this->authorize($post);
    }
}
```

ログインしているユーザー以外のユーザーを検証したいとき

```
$this->authorizeForUser($user, 'own', $car);
```

Modelクラスでの利用方法 [\*](/2016/05/06/laravel-model.html)  























