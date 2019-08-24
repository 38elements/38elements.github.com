---
layout: posts
title: DjangoのURLメモ 
---
* URLconf [\*](https://docs.djangoproject.com/en/stable/topics/http/urls/#example)

* 404や500等のエラーハンドラの指定方法 [\*](https://docs.djangoproject.com/en/stable/topics/http/views/#customizing-error-views)  
urls.pyにhandler404やhandler500をセットする。

* urlのpattern  r'^foo/?(?P<bar_id>\d+)?/?$'
   
* redirect("namespace:name", foo=bar)とかできる [*](https://docs.djangoproject.com/en/stable/topics/http/shortcuts/#examples) 

* namespaceとapp_nameからurlを生成するには[reverse](https://docs.djangoproject.com/en/stable/ref/urlresolvers/#reverse)を利用する

* HttpRequestオブジェクトからnamespaceやnameを取得するには[HttpRequest.resolver_match](https://docs.djangoproject.com/en/stable/ref/request-response/#django.http.HttpRequest.resolver_match)を利用する。   
[ResolverMatch](https://docs.djangoproject.com/en/stable/ref/urlresolvers/#django.core.urlresolvers.ResolverMatch)が格納されている。   

* ResolverMatch.view_nameはnamespaceとnameが:で結合されたものが入っている    

* slugとかintとか [\*](https://docs.djangoproject.com/en/stable/topics/http/urls/#path-converters)  

* pathとかre_pathとか [\*](https://docs.djangoproject.com/en/stable/ref/urls/#module-django.urls.conf)

* include()の例 [\*](https://docs.djangoproject.com/en/stable/topics/http/urls/#including-other-urlconfs)

* [include()](https://docs.djangoproject.com/en/stable/ref/urls/#include)はnamespaceをセットする

* [re_path()](https://docs.djangoproject.com/en/stable/ref/urls/#re-path)はnameをセットする  
url()は将来非推奨になるのでre_path()を使う

* namespaceを設定するにはapp_nameを設定する必要がある [\*](https://docs.djangoproject.com/en/stable/topics/http/urls/#namespaces-and-include)  
* [APPEND_SLASH](https://docs.djangoproject.com/en/stable/ref/settings/#append-slash)がTrue(defaultはTrue)の場合、urlの最後に/がない場合でマッチしない場合はurlの最後に/を付けてリダイレクトする

<br>


from django.conf.urls import include, url

{% raw %}
urlpatterns = [  
    url(r'^$', index, name='index')),  
    url(r'^foo/', include(foo.urls, namespace='foo')),  
    url(r'^bar/(?P<year>\d{4})/?$', bar, {'foo': 'bar'}, name='bar'), //　パラメータを指定する  
]

{% url 'namespace:name' param %}
{% endraw %}
[\*](https://docs.djangoproject.com/en/1.10/topics/http/urls/#passing-extra-options-to-view-functions)  
<br/>
<hr/>
[Djangoメモ](/2014/12/04/django.html)
