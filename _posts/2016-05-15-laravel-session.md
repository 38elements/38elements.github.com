---
layout: posts
title: LaravelのSessionメモ 
---
[Document](https://laravel.com/docs/5.2/session)   
`config/session.php`で設定する。
ドライバーはfile、cookie、database、memcached、redis、array  
セッションに保存するデータを暗号化した場合は`encrypt`オプションを`true`にする  

### DB
データベースのスキーマ

```
Schema::create('sessions', function ($table) {
    $table->string('id')->unique();
    $table->integer('user_id')->nullable();
    $table->string('ip_address', 45)->nullable();
    $table->text('user_agent')->nullable();
    $table->text('payload');
    $table->integer('last_activity');
});
```

以下のコマンドでスキーマを生成する

```
php artisan session:table

composer dump-autoload

php artisan migrate
```
<br>

### Redis
`predis/predis`をComposerでインストールする  
<br>












