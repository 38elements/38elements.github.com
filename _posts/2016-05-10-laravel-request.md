---
layout: posts
title: laravelのRequestメモ 
---
[document](https://laravel.com/docs/5.2/requests)  
コントローラでRequestを受け取る場合、インジェクションで受け取る  
<br>

# URL

```
// http://example.com/foo/bar

$request->path()
// => foo/bar

// pathがマッチするか
$request->is('foo/*')

// パラメータなしのurl
$url = $request->url();

// パラメータありのurl
$url = $request->fullUrl();

// パラメータを付与
$url = $request->fullUrlWithQuery(['id' => 'hoge']);

// methodを取得
$method = $request->method();
$request->isMethod('post')

```



