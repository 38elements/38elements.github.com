---
layout: posts
title: laravelのControllerメモ 
---
[Validation](https://laravel.com/docs/5.2/validation)  
[Controller](https://laravel.com/docs/5.2/controllers)   
`app/Http/Controllers`の下に配置する  
`Route::get('/users', 'UserController@index');`のようにroutingする   
[RESTful Resource Controllers](https://laravel.com/docs/5.2/controllers#restful-resource-controllers)  
<br>

### ルーティング
ルートは`App\Http\Controllers`なので`App\Http\Controllers\Foo\BarController`は  
`Route::get('bar', ['uses' => 'BarController@method', 'as' => 'bar_name']);`のようにする  
<br>

### 特定のコントローラにのみMiddlewareの適応

`routes.php`で設定する

```
Route::get('foo', [
    'middleware' => 'auth',
    'uses' => 'FooController@get'
]);
```
<br>

### 定義ファイルで設定する
```
class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');

        $this->middleware('a', ['only' => [
            'fooAction',
            'barAction',
        ]]);

        $this->middleware('b', ['except' => [
            'fooAction',
            'barAction',
        ]]);
    }
}
```
<br>

### Dependency Injection
[サービスコンテナ](https://laravel.com/docs/5.2/container)参照  
関数の引数に型を書くと自動的に引数のインスタンスが生成されて引数になる

```
namespace App\Http\Controllers;

use App\Repositories\UserRepository;

class UserController extends Controller
{
    protected $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }
    
    public function get(Request $request, $id)
    {
        //
    }
}
```
<br>

### Route Caching
コントローラーのルーティングをしているなら`route cache`を使用したほうが高速  

キャッシュの生成  
`php artisan route:cache`  

削除
`php artisan route:clear`  






























