---
layout: posts
title: DjangoのRequestとResponseメモ 
---
HttpRequest [\*](https://docs.djangoproject.com/en/stable/ref/request-response/#httprequest-objects)      
json.loads(request.body.decode('utf8'))  
request.FILESにはファイルが添付しているキーのみが存在している。  
<br>
HttpResponse [\*](https://docs.djangoproject.com/en/stable/ref/request-response/#httpresponse-objects)     

JsonResponse [\*](https://docs.djangoproject.com/en/stable/ref/request-response/#jsonresponse-objects)  

リロードした場合ページの状態を残さないようにする

```
response = render(request, 'foo/bar.html', {'form': form})
response['Cache-Control'] = 'no-store'
return response
```
<br>

status codeの設定方法 [\*](https://docs.djangoproject.com/en/dev/ref/request-response/#django.http.HttpResponse.__init__)
<br/>

HTTPメソッドのバリデーション    
require_http_methods(request_method_list) [*](https://docs.djangoproject.com/en/stable/topics/http/decorators/#django.views.decorators.http.require_http_methods) 
<br/>
<hr/>
[Djangoメモ](/2014/12/04/django.html)  
