---
layout: posts
title: PostgreSQLメモ 
---
postgresユーザを作成する
psql

```
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

### Django
以下のようなエラーが出たらログイン権限を付与したか確かめる

```
django.db.utils.OperationalError: FATAL:  role "user_name" is not permitted to log in
```

```
ALTER ROLE user_name WITH LOGIN;
```
