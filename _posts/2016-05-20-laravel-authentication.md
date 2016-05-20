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

### 認証した後に表示するページ
`AuthController`の`$redirectTo`プロパティにログインした後に遷移するurlを設定する。  
失敗した場合は自動的にloginフォームに戻る。  
<br>







