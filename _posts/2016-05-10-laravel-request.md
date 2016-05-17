---
layout: posts
title: LaravelのRequestメモ 
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
<br>

### flash
一時的にデータを保存して次のリクエストのときにデータを取得する  

```
// 入力内容を一時的に記録
$request->flash();

// aとbのみ保存
$request->flashOnly(['a', 'b']);

// c以外保存
$request->flashExcept('c');

// 一時保存してリダイレクト
return redirect('form')->withInput();
return redirect('form')->withInput($request->except('a'));

// 一時保存したデータを取得
// old()というhelperもある
$username = $request->old('username');
```
<br>

### Cookie

```
// 値を取得
$value = $request->cookie('name');

// 値をセット
$response->withCookie('name', 'value', $minutes);
return $response;

$response->withCookie(cookie()->forever('name', 'value'));
```
<br>

### ファイル
[UploadedFile](http://api.symfony.com/3.0/Symfony/Component/HttpFoundation/File/UploadedFile.html)  

```
//ファイルを取得
$file = $request->file('name');

//
$request->hasFile('name');

//
$request->file('name')->isValid()

// ファイルの移動
$request->file('name')->move($destinationPath);
$request->file('name')->move($destinationPath, $fileName);
```




































