---
layout: posts
title: laravelのControllerメモ 
---
[Validation](https://laravel.com/docs/5.2/validation)  
[Controller](https://laravel.com/docs/5.2/controllers)   
`app/Http/Controllers`の下に配置する  
`Route::get('/users', 'UserController@index');`のようにroutingする   
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













