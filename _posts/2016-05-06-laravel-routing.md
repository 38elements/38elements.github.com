---
layout: posts
title: laravelのRoutingメモ 
---
デフォルトでは`app/Http/routes.php`で設定する。  

以下のようにrouterからモデルを生成して引数にすることができる [*](https://laravel.com/docs/5.2/routing#route-model-binding)  

```
Route::get('users/{user}', function (User $user) {
    //
});
```

```
// 複数メソッドを指定する。
Route::match(['get', 'post'], 'index', function () {
    //
});

// すべてのメソッドに対応
Route::any('index', function () {
    //
});

// 必須なパラメータを指定
Route::get('foo/{foo}/bar/{bar}', function ($foo, $bar) {
    //
});

// デフォルト値があるパラメータを指定
Route::get('foo/{foo?}/bar/{bar?}', function ($foo=1, $bar=null) {
    //
});
```
