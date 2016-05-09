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

### URLの指定

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

// 正規表現でパラメータを指定
Route::get('foo/{id}/{name}', function ($id, $name) {
    //
})
->where(['id' => '[0-9]+', 'name' => '[a-z]+']);

// 全体に正規表現でパラメータを指定
// app/Providers/RouteServiceProvider.php
// bootメソッドに追加
public function boot(Router $router)
{
    $router->pattern('id', '[0-9]+');
    parent::boot($router);
}
```

### 名前

```
// urlに名前を付ける
Route::get('foo/bar', [
    'as' => 'hoge', 'uses' => 'FooController@bar'
]);
// 上記と等価
Route::get('foo/bar', 'FooController@bar')->name('hoge');

// Groupで入れ子にした場合
// 名前がfoo::barになる
Route::group(['as' => 'foo::'], function () {
    Route::get('bar', ['as' => 'bar', function () {
    }]);
});

// 名前からURLを生成
$url =  $route('foo::bar', ['id' => 1, 'item' => 'apple']);
```

### Groups
グループはネスト可能  
グループの下にあるroutingに属性を与える  

```
// Middleware
Route::group(['middleware' => 'auth'], function () {
    Route::get('/', function ()    {
        // Uses Auth Middleware
    });
});

// Namespaces
// App\Http\Controllersの下にコントローラが配置されているディレクトリのbaseを付け足す
Route::group(['namespace' => 'A'], function()
{
    // Controllers Within The "App\Http\Controllers\A" Namespace

    Route::group(['namespace' => 'B'], function() {
        // Controllers Within The "App\Http\Controllers\A\B" Namespace
    });
});

// サブドメイン
// サブドメインの一部をパラメータとして取得
Route::group(['domain' => '{foo}.example.com'], function () {
    Route::get('user/{id}', function ($foo, $id) {
        //
    });
});

// URLの接頭辞を指定する
Route::group(['prefix' => 'foo/{bar}'], function () {
    Route::get('hoge', function ($bar)    {
        // /foo/{bar}/hoge
    });
});
```

### CSRF
router.phpで`web`ミドルウェアをインストールする。
`VerifyCsrfToken`で実装されている。  
対象から外すには`VerifyCsrfToken`の`$except`にurlを追加する。  
`{{ csrf_field() }}`をform内に置く  
` X-CSRF-TOKEN`をヘッダーに付与してリクエストする  

### Modelの取得
`id`でモデルインスタンスを取得する  
ない場合は404  

```
Route::get('users/{user}', function (App\User $user) {
    //
});
```

`id`以外のカラム名を指定した場合はModelに`getRouteKeyName`メソッドを実装する  

```
public function getRouteKeyName()
{
    return 'other_id';
}
```

明示的に指定するには`RouteServiceProvider::boot`で下記のように指定する  

```
public function boot(Router $router)
{
    parent::boot($router);
    $router->model('user', 'App\User');
}
```

Modelの取得をカスタマイズしたい場合は、  
app/Providers/RouteServiceProvider.phpのbootメソッドに追加  

```
$router->bind('user', function ($value) {
    return App\User::where('name', $value)->first();
});
```

該当するデータがない場合、第3引数に対応する処理を記述する

```
$router->model('user', 'App\User', function () {
    // 
});
```

### DELETEやPUTのやりかた
form内に{{ method_field('PUT') }}を配置する  

### Routing情報の取得

```
$route = Route::current();

$name = $route->getName();
$actionName = $route->getActionName();

$name = Route::currentRouteName();
$action = Route::currentRouteAction();
```
















