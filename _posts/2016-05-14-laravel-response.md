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
<br>

### JSON

```
return response()->json(['foo' => 'bar']);
```
<br>

### File

```
return response()->download($pathToFile);

return response()->download($pathToFile, $name, $headers);
```
<br>

### リダイレクト

```
Route::get('user', function () {
    return redirect('user/index');
});

// 遷移元に戻る
return back();

// nameでurlを指定
return redirect()->route('foo');

// パラメータを反映
return redirect()->route('user', ['id' => 1]);

// modelをパラメータにすると自動的にidがパラメータになる
return redirect()->route('user', [$user]);

// コントローラのアクションを指定
return redirect()->action('UserController@index', ['id' => 1]);

// flashに保存
return redirect('user')->with('name', 'foo');
```
<br>

### レスポンスオブジェクトにメソッドを追加する
`Illuminate\Contracts\Routing\ResponseFactory`の`boot`メソッド内に追加  

```
<?php

namespace App\Providers;

use Response;
use Illuminate\Support\ServiceProvider;

class ResponseMacroServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Response::macro('foo', function ($value) {
            //
        });
    }
}

return response()->foo('bar');
```



















