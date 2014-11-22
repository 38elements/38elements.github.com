---
layout: posts
title: Djangoメモ 
---
DjangoのModelをスクリプトでコマンドラインから利用する。 
  
<br/>
例
{% highlight python  %}
import sys, os
sys.path.append("/path/to/yourproject")
os.environ['DJANGO_SETTINGS_MODULE'] = "yourproject.settings"
from yourproject.models.foo import FooModel
FooModel.objects.all()
{% endhighlight %}
[参考](https://stackoverflow.com/questions/383073/django-how-can-i-use-my-model-classes-to-interact-with-my-database-from-outside/383089#383089)   
<br/>

プロジェクトの開始   
django-admin.py startproject project_name  
アプリケーションの作成   
python manage.py startapp app_name    
テーブル定義を表示   
django manage.py sql appname  
インデックスを表示  
python manage.py sqlindexes appname   
インタラクティブ   
python manage.py shell   
<br/>

[管理者を作成する方法](https://docs.djangoproject.com/en/1.7/intro/tutorial02/#creating-an-admin-user)   
<br/>

#### Migrations[*](https://docs.djangoproject.com/en/1.7/topics/migrations/#module-django.db.migrations)
[makemigrations](https://docs.djangoproject.com/en/1.7/ref/django-admin/#django-admin-makemigrations)      
[sqlmigrate](https://docs.djangoproject.com/en/1.7/ref/django-admin/#django-admin-sqlmigrate)      
[migrate](https://docs.djangoproject.com/en/1.7/ref/django-admin/#django-admin-migrate)      
[squashmigrations](https://docs.djangoproject.com/en/1.7/ref/django-admin/#django-admin-squashmigrations)      
<br/>
  
データベースのデータをjson形式で整形して出力する     
python manage.py dumpdata foo --indent 4 &gt; foo.json  
[dumpdata &lt;appname appname appname.Model ...&gt;](https://docs.djangoproject.com/en/1.6/ref/django-admin/#dumpdata-appname-appname-appname-model)  
<br/>
  
テンプレートに{{ "{% csrf_token " }} %}がないとCookieにcsrf_tokenがセットされない。    
{{ "{% csrf_token " }} %} なしでセットするには
request.META["CSRF_COOKIE_USED"] = True
をリクエストの処理で行う。

