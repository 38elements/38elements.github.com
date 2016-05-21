---
layout: posts
title: LaravelのAuthenticationメモ 
---
[Document](https://laravel.com/docs/5.2/authentication)  
設定を`config/auth.php`に書く  
`App\Http\Controllers\Auth`の下に`AuthController`と`PasswordController`がある。
`AuthController`は登録と認証  
`PasswordController`はパスワードの再設定  
<br>

### コマンド

```
php artisan make:auth
```
<br>

### View
`php artisan make:auth`は`resources/views/auth`と`resources/views/layouts`の下に`.blade.php`ファイルを作成する。 
<br>

### AuthControllerの設定
**ログイン後に遷移するページ**  
`AuthController`の`$redirectTo`プロパティにログインした後に遷移するurlを設定する。  
失敗した場合は自動的にloginフォームに戻る。  
<br>
**$guard**  
`AuthController`の`$guard`プロパティに`config/auth.php`で定義されている`$guards`のキーを設定する。  
<br>
**validator()**  
id,password,emailなど登録情報に関するバリデーションを行う  
<br>
**create()**  
DBにユーザデータを登録する  
<br>
**認証に失敗した場合すぐに再度ログインできなくする**  
`use ThrottlesLogins`する  
<br>

### ログインしたユーザのデータを取得

```
// ログインしているかどうか
Auth::check()

$user = Auth::user();

$request->user()
```
<br>

### 適用

routerで設定するか、コントローラのコンストラクタで呼ぶ   

```
Route::get('edit', [
    'middleware' => 'auth',
    'uses' => 'PageController@edit'
]);

public function __construct()
{
    $this->middleware('auth');
}
```

特定の`guard`を適用したい場合  

```
// apiを適用
Route::get('edit', [
    'middleware' => 'auth:api',
    'uses' => 'PageController@edit'
]);
```
































