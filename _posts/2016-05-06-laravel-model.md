---
layout: posts
title: laravelのModelメモ 
---
#### Migration
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
