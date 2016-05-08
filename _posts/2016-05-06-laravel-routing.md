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
