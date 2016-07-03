---
layout: posts
title: DjangoでFormのerror_messagesを属性を使って動的に生成
---
クラス変数としてのFieldはbase_fieldに格納されている。 [*](https://github.com/django/django/blob/ec6121693f112ae33b653b4364e812722d2eb567/django/forms/forms.py#L93)  

以下のようにする。

```
for field_name, field_obj in MyForm.base_fields.items():
    attrs = {}
    attrs['label'] = field_obj.label if hasattr(field_obj, 'label') and field_obj.label else 'label'
    attrs['max_length'] = field_obj.max_length if hasattr(field_obj, 'max_length') and field_obj.max_length else '0'
    # ...
    f.error_messages = {
        'required': '{label}を入力してください。'.format(**attrs),
        'max_length': '{label}は{max_length}文字以下にしてください。'.format(**attrs),
        # ...
    }
```
<br/>
<hr/>
[Djangoメモ](/2014/12/04/django.html)  
[DjangoのFormメモ](/2014/12/02/django-forms.html)  
