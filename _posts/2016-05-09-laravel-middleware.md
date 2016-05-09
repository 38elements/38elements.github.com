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

APIごとにミドルウェアを適応する場合は`app/Http/Kernel.php`の`$routeMiddleware`に登録する  

```
```
<br>



















