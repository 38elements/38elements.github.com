---
layout: posts
title: DjangoのURLメモ 
---
* urlのpattern  r'^foo/?(?P<bar_id>\d+)?/?$'
   
* redirect("namespace:name", foo=bar)とかできる [*](https://docs.djangoproject.com/en/1.7/topics/http/shortcuts/#examples) 

* namespaceとapp_nameからurlを生成するには[reverse](https://docs.djangoproject.com/en/dev/ref/urlresolvers/#reverse)を利用する
