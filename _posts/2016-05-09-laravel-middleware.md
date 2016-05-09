---
layout: posts
title: laravelのミドルウェアメモ 
---
[document](https://laravel.com/docs/5.2/middleware)   
<br>

### 実装
以下のコマンドを作成  
`php artisan make:middleware FooMiddleware`  
`app/Http/Middleware`ディレクトリの下に生成される  
ミドルウェアは処理をBeforeとAfterがある  
それらは1つづつクラスを実装する。両方1つのクラスに実装することはできない。  

```
namespace App\Http\Middleware;

use Closure;

class BeforeMiddleware
{
    public function handle($request, Closure $next)
    {
        // 処理
        return $next($request);
    }
}
```

```
namespace App\Http\Middleware;

use Closure;

class AfterMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        //  処理
        return $response;
    }
}
```
<br>

### 登録
アプリケーション全体にミドルウェアを適用する場合は`app/Http/Kernel.php`の`$middleware`に登録する  

```
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
    ];
```

APIごとにミドルウェアを適応する場合は`app/Http/Kernel.php`の`$routeMiddleware`に登録する  

```
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'can' => \Illuminate\Foundation\Http\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
    ];
```

ミドルウェアグループ化する場合は`app/Http/Kernel.php`の`$middlewareGroups`に登録する 

```
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \App\Http\Middleware\VerifyCsrfToken::class,
        ],
        'api' => [
            'throttle:60,1',
        ],
    ];
```
<br>

### ルーティングからパラメータを渡す
handleの第三引数にパラメータがくる  
ルーティングでミドルウェア名の後ろに`:パラメータ`をつける  

```
Route::put('user/{id}', ['middleware' => 'foo:value', function ($id) {
    //
}]);
```

### リクエストを送信した後に実行する
`public function terminate($request, $response)`を実装する


















