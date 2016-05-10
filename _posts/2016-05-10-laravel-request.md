---
layout: posts
title: laravelのRequestメモ 
---
[document](https://laravel.com/docs/5.2/requests)  
コントローラでRequestを受け取る場合、インジェクションで受け取る  
<br>

### URL

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
<br>

### 入力値の取得

```
// 値の取得
$value = $request->input('key');

// デフォルトの値を指定
$value = $request->input('key', 123);

// 配列の場合
$name = $request->input('users.0.name');
$names = $request->input('users.*.name');

// Content-Typeがapplication/jsonの場合
$name = $request->input('user.name');

// 値があるか
$request->has('name')

// すべての入力を取得
$all = $request->all();

// aとbだけ取得 
$input = $request->only(['a', 'b']);
$input = $request->only('a', 'b');

// aとb以外取得
$input = $request->except(['a', 'b']);
$input = $request->except('a', 'b');
```
























