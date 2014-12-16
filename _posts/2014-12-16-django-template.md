---
layout: posts
title: DjangoのTemplateメモ 
---

[extends](https://docs.djangoproject.com/en/1.7/ref/templates/builtins/#extends)   
[block](https://docs.djangoproject.com/en/1.7/ref/templates/builtins/#block)   

* アプリケーションディレクトリの下にtemplatesディレクトリを配置する。それがテンプレートのrootディレクトリになる。[*](https://docs.djangoproject.com/en/1.7/ref/templates/api/#django.template.loaders.app_directories.Loader)   

* includeはtemplate_dirをrootにして相対パスで書く。     

* テンプレートでrequestを使用する時はsetting.pyに下記を追加する
{% highlight python %}
from django.conf import global_settings
TEMPLATE_CONTEXT_PROCESSORS = global_settings.TEMPLATE_CONTEXT_PROCESSORS + ("django.core.context_processors.request",)
{% endhighlight %}

* \{\{\}\}内の値が関数の場合は引数なしで実行される。 [*](https://docs.djangoproject.com/en/dev/topics/templates/#variables)
>If the resulting value is callable, it is called with no arguments. The result of the call becomes the template value.
