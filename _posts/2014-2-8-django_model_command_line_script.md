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

テーブル定義を表示   
django manage.py sql appname  
インデックスを表示  
python manage.py sqlindexes appname   
