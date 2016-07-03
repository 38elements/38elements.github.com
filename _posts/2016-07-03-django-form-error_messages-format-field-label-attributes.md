---
layout: posts
title: DjangoのFormあるFieldのerror_messagesを属性を使用して動的に生成する方法
---
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
