---
layout: posts
title: Djangoのデータベースメモ 
---

#### Connection

SQLを実行するには[django.db.connections](https://docs.djangoproject.com/en/1.11/topics/db/sql/#executing-custom-sql-directly)を利用する  
database_nameは設定のDATABASESのキーではなくDBのデーターベース名

```python
from django.db import connections
cursor = connections[database_name].cursor()
cursor.execute('select * from users')
```

#### Migrations [*](https://docs.djangoproject.com/en/stable/topics/migrations/#module-django.db.migrations)
[makemigrations](https://docs.djangoproject.com/en/stable/ref/django-admin/#django-admin-makemigrations)      
[sqlmigrate](https://docs.djangoproject.com/en/stable/ref/django-admin/#django-admin-sqlmigrate)      
[migrate](https://docs.djangoproject.com/en/stable/ref/django-admin/#django-admin-migrate)      
[squashmigrations](https://docs.djangoproject.com/en/stable/ref/django-admin/#django-admin-squashmigrations)    
DBからModelを生成する    
[inspectdb](https://docs.djangoproject.com/en/stable/howto/legacy-databases/#auto-generate-the-models)   
```
python manage.py inspectdb --database foo > models.py
```
<br/>

レプリケーション [\*](https://docs.djangoproject.com/en/stable/topics/db/multi-db/)   

<br/>

#### Router [\*](https://docs.djangoproject.com/en/stable/topics/db/multi-db/#an-example)
app_labalは自動的に設定されている  
DATABASE_ROUTERS = ['path.to.YourRouter']  
DATABASE_ROUTERSのマイクレーションの設定をmigrateで反映するにはpython manage.py migrate --database fooのように対象となるDATABASESのキーを指定する必要がある  
指定されたキーのDBのみが書き込まれる  
指定しなかった場合はdefaultが反映される。それ以外のキーは書き込まれない。  

<hr>

[Djangoメモ](/2014/12/04/django.html)
