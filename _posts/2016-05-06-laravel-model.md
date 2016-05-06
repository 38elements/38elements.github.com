---
layout: posts
title: laravelのModelメモ 
---
[Eloquent](https://laravel.com/docs/5.2/eloquent)  
テーブル名は複数形  
モデル名は単数形  

### Migration
**作成**   
--tableは対象となるテーブル名  
--createは生成するテーブル名  

```
php artisan make:migration class_name --table=table_name
php artisan make:migration class_name --create=table_name
```
<br>
**実行**   

```
php artisan migrate
```
<br>

**モデルの作成**  

```
php artisan make:model モデルクラス名
```
