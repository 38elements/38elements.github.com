---
layout: posts
title: DjangoのTemplateメモ 
---
[Document](https://docs.djangoproject.com/en/stable/ref/templates/)  

render() [\*](https://docs.djangoproject.com/en/stable/topics/http/shortcuts/#render)  

[extends](https://docs.djangoproject.com/en/stable/ref/templates/builtins/#extends)   
[block](https://docs.djangoproject.com/en/stable/ref/templates/builtins/#block)   
<br>
<br>
settings.pyの[TEMPLATES](https://docs.djangoproject.com/en/stable/ref/settings/#std:setting-TEMPLATES)の設定    
[DIRS](https://docs.djangoproject.com/en/stable/ref/settings/#dirs)にテンプレートのディレクトリを格納する(templatesディレクトリの場所)     
[APP_DIRS](https://docs.djangoproject.com/en/stable/ref/settings/#app-dirs)はTrueにしないとadminが表示されない    
<br>
<br>
   
* includeはtemplate_dirをrootにして相対パスで書く。  

* テンプレートでrequestを使用する時はsettings.pyに以下の設定をする[\*](https://docs.djangoproject.com/en/1.8/ref/templates/api/#django-template-context-processors-request)  

```
TEMPLATES['OPTIONS']['context_processors'] = 'django.template.context_processors.request'
```

* \{\{\}\}内の値が関数の場合は引数なしで実行される。 [\*](https://docs.djangoproject.com/en/dev/topics/templates/#variables)  
If the resulting value is callable, it is called with no arguments. The result of the call becomes the template value.  

csrf対策でフォームに入れる  
{% raw %}
{{csrf_token}}
{% endraw %}

<br/>
<hr/>
[Djangoメモ](/2014/12/04/django.html)
