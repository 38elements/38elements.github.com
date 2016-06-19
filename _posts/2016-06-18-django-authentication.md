---
layout: posts
title: Djangoの認証メモ 
---
[Document](https://docs.djangoproject.com/en/stable/topics/auth/)  

### コマンドラインでのユーザ管理
コマンドラインでユーザの登録方法 [\*](https://docs.djangoproject.com/en/stable/topics/auth/default/#creating-users)  
コマンドラインでパスワードの変更 [\*](https://docs.djangoproject.com/en/1.9/topics/auth/default/#changing-passwords)  
<br>

### ログイン・ログアウト
LOGIN [\*](https://docs.djangoproject.com/en/1.9/topics/auth/default/#how-to-log-a-user-in)  

```
from django.contrib.auth import authenticate, login
user = authenticate(username=username, password=password)
if user is not None:
    if user.is_active:
        login(request, user)
```

LOGOUT [\*](https://docs.djangoproject.com/en/1.9/topics/auth/default/#how-to-log-a-user-out)  

```
from django.contrib.auth import logout
logout(request)
```
<br>

### view関数にログインが必要な制約をつける
`login_required(redirect_field_name='next', login_url=None)`デコレーターを利用する [\*](https://docs.djangoproject.com/en/1.9/topics/auth/default/#django.contrib.auth.decorators.login_required)  
<br>

###  view関数に権限が必要な制約をつける
`permission_required(perm, login_url=None, raise_exception=False)`デコレーターを利用する [\*](https://docs.djangoproject.com/en/1.9/topics/auth/default/#django.contrib.auth.decorators.login_required)  
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
