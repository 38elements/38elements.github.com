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
```
<br>































