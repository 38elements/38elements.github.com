---
layout: posts
title: LaravelのResponseメモ 
---
[API](https://laravel.com/api/5.2/Illuminate/Http/Response.html)  
[Document](https://laravel.com/docs/5.2/responses)  
[Symfony\Component\HttpFoundation\Response](http://api.symfony.com/3.0/Symfony/Component/HttpFoundation/Response.html)   
[response()](https://laravel.com/docs/5.2/helpers#method-response)  
<br>

### Basic

```
use Illuminate\Http\Response;

Route::get('user', function () {
    return response($content, $status)
            ->header('Content-Type', $value);
});
```
<br>

### Header

```
return response($content)
            ->header('Content-Type', 'text/html')
            ->header('foo', 'foo_v')
            ->header('bar', 'bar_v');
            
return response($content)
            ->withHeaders([
                'Content-Type' => 'text/html',
                'foo' => 'foo_v',
                'bar' => 'bar_v',
            ]);
```
<br>

### Cookie

```
return response($content)
            ->header('Content-Type', 'text/html')
            ->cookie($name, $value)
```

LaravelでセットされたCookieは暗号化される。  
暗号化されたくない場合は`App\Http\Middleware\EncryptCookies`で`$except`に設定する。

```
protected $except = [
    'cookie_name',
];
```


