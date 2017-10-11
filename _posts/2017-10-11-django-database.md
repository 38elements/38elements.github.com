---
layout: posts
title: Djangoのデータベースメモ 
---
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
<br>
