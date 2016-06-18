---
layout: posts
title: Djangoの認証メモ 
---
[Document](https://docs.djangoproject.com/en/stable/topics/auth/)  

### コマンドラインでのユーザ管理
コマンドラインでユーザの登録方法 [\*](https://docs.djangoproject.com/en/stable/topics/auth/default/#creating-users)  
コマンドラインでパスワードの変更 [\*](https://docs.djangoproject.com/en/1.9/topics/auth/default/#changing-passwords)  
<br>

### Userモデルのテーブル

```
CREATE TABLE "auth_user" (
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    "password" varchar(128) NOT NULL,
    "last_login" datetime NULL,
    "is_superuser" bool NOT NULL,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL,
    "email" varchar(254) NOT NULL,
    "is_staff" bool NOT NULL,
    "is_active" bool NOT NULL,
    "date_joined" datetime NOT NULL,
    "username" varchar(30) NOT NULL UNIQUE
)
```

<br/>
<hr/>
[Djangoメモ](/2014/12/04/django.html)
