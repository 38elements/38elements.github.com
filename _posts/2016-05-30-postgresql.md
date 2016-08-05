---
layout: posts
title: PostgreSQLメモ 
---

```
sudo passwd postgres
su postgres
psql
create role <user_name> with login password '<password>';
CREATE DATABASE <name> with owner <user_name> encoding 'utf8';
```

`\q`: 終了  
`\i foo.sql`: SQLを実行  
`\d`: テーブル一覧  
`\d table_name`: テーブルのカラム一覧  

```
sudo apt-get install php5-pgsql
```
<br>

Login方法

```
psql -U <user_name> -d <database_name> -h 127.0.0.1
```
<br>

ダンプ

```
pg_dump -d database -h host -U user_name > foo.sql
```
<br>

restore

```
\i foo.sql
```
<br>

### Django
以下をインストールする  
[psycopg2](http://initd.org/psycopg/docs/)  

```
sudo apt-get install python3-dev libpq-dev
pip3 install psycopg2
```

以下のようなエラーが出たらログイン権限を付与したか確かめる

```
django.db.utils.OperationalError: FATAL:  role "user_name" is not permitted to log in
```

```
ALTER ROLE user_name WITH LOGIN;
```
