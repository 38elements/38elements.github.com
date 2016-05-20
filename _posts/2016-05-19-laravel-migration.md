---
layout: posts
title: LaravelのMigrationメモ 
---
[Document](https://laravel.com/docs/5.2/migrations)  


### ファイル生成

```
php artisan make:migration create_cars_table
```

`database/migrations`フォルダ以下にファイルが生成される  
<br>

### 実行

```
php artisan migrate
```
<br>

### テーブル

```
Schema::create('users', function (Blueprint $table) {
    $table->increments('id');
    
    // カラム作成
    $table->string('email');
    
    $table->integer('number')->unsigned()->default(1);
    
    // NULL
    $table->string('company')->nullable();
    
    // 外部キー
    $table->foreign('car_id')->references('id')->on('cars');
    
    // ストレージエンジンを指定
    $table->engine = 'InnoDB';
});


// テーブルは存在しているか
if (Schema::hasTable('users')) {
    //
}

// カラムは存在しているか
if (Schema::hasColumn('users', 'email')) {
    //
}

// テーブル名を変更
Schema::rename($from, $to);

// テーブルを削除
Schema::drop('users');
Schema::dropIfExists('users');
```
<br>

### カラム

```
Schema::table('users', function ($table) {
    // 属性の変更
    $table->string('name', 50)->change();
    
    // 名前の変更
    $table->renameColumn('from', 'to');
    
    // カラムを削除する
    $table->dropColumn(['company']);
    
    // インデックス
    $table->primary('id');
    $table->unique('email');
    $table->index('state');
    
    // インデックスを削除
    $table->dropPrimary('email');
    $table->dropUnique('email');
    $table->dropUnique('email');
    
    //外部キーを削除
    $table->dropForeign('foo_id');
});
```






















































