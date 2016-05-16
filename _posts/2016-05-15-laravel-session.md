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

### 基本的な使い方

```
$value = $request->session()->get('key');

$value = $request->session()->get('key', 'default');

$value = $request->session()->get('key', function() {
    return 'default';
});

// 全データをハッシュで取得
$data = $request->session()->all();

// データの保存
session(['key' => 'value']);
$request->session()->put('key', 'value');

// データが存在するか
$request->session()->has('key');

// セッションに保存されている配列に値を追加
$request->session()->push('user_ids', 123456789);

// 値を取得して削除
$value = $request->session()->pull('key', 'default');

// 指定したキーを削除
$request->session()->forget('key');

// セッションデータをすべて削除
$request->session()->flush();

// セッションのIDを再生成する
$request->session()->regenerate();
```











