---
layout: posts
title: DjangoのURLメモ 
---
* urlのpattern  r'^foo/?(?P<bar_id>\d+)?/?$'
   
* redirect("namespace:name", foo=bar)とかできる [*](https://docs.djangoproject.com/en/stable/topics/http/shortcuts/#examples) 

* namespaceとapp_nameからurlを生成するには[reverse](https://docs.djangoproject.com/en/dev/stable/urlresolvers/#reverse)を利用する

* HttpRequestオブジェクトからnamespaceやnameを取得するには[HttpRequest.resolver_match](https://docs.djangoproject.com/en/stable/ref/request-response/#django.http.HttpRequest.resolver_match)を利用する。   
[ResolverMatch](https://docs.djangoproject.com/en/stable/ref/urlresolvers/#django.core.urlresolvers.ResolverMatch)が格納されている。   

* ResolverMatch.view_nameはnamespaceとnameが:で結合されたものが入っている     
