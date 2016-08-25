---
layout: posts
title: DjangoのFormメモ 
---
[Document](https://docs.djangoproject.com/en/stable/ref/forms/)  
[Topic](https://docs.djangoproject.com/en/stable/topics/forms/)  
<br>
HTMLを手動で生成する方法 [\*](https://docs.djangoproject.com/en/stable/topics/forms/#rendering-fields-manually)  

### Form fields [\*](https://docs.djangoproject.com/en/stable/ref/forms/fields/)
requiredはデフォルトではTrue  

Formクラスのfieldはbase_fieldsにある [*](https://github.com/django/django/blob/ec6121693f112ae33b653b4364e812722d2eb567/django/forms/forms.py#L93)  

```
self.fields = copy.deepcopy(self.base_fields)
```

CharFieldのstripパラメーターをFalseにしないと入力値の前後のスペースを削除する [\*](https://docs.djangoproject.com/en/1.9/ref/forms/fields/#django.forms.CharField.strip)  

サブクラスが継承もとのfieldを無効にしたい場合はそのNoneを代入する  

```
class FooForm(BarForm):
    bar = None // BarFormのbar fieldを無効
```
値を変更したい場合、is_valid()前ならform.fields[field_name].initial  

後ならform.cleaned_data[field_name]を変更する  

[widget](https://docs.djangoproject.com/en/stable/ref/forms/widgets/)でコントロールを指定する  

コントロールのHTML要素の属性は[attrs](https://docs.djangoproject.com/en/1.9/ref/forms/widgets/#django.forms.Widget.attrs)で指定する  

ファイルをアップロードする方法(FileField) [\*](https://docs.djangoproject.com/en/stable/topics/http/file-uploads/)  

フォームのすべてのエラーメッセージを表示する

```
    for field, errors in form.errors.items():
        for error in errors:
            print(error)
```

Fieldのリストはbase_fieldsにある  
それをFormのインスタンスごとにコピーしている

```
self.fields = copy.deepcopy(self.base_fields)
```

Formのerror_messagesを属性を使って動的に生成 [\*](/2016/07/03/django-form-error_messages-format-field-label-attributes.html)  
<br>

<hr>
<br>

* form.non_field_errorsはfieldに紐づいていないclean()とかのValidationErrorを返す [\*](https://docs.djangoproject.com/en/stable/ref/forms/api/#django.forms.Form.non_field_errors)

* 入力コントロールのidは[auto_id](https://docs.djangoproject.com/en/stable/ref/forms/api/#django.forms.Form.auto_id)

* エラーメッセージを追加するには[add_error](https://docs.djangoproject.com/en/stable/ref/forms/api/#django.forms.Form.add_error)を利用する。

* カスタムバリデーションは[clean](https://docs.djangoproject.com/en/stable/ref/forms/api/#django.forms.Form.clean)に書く

* バリデーションは[is_valid](https://docs.djangoproject.com/en/stable/ref/forms/api/#django.forms.Form.is_valid)で行う

* デフォルトのエラーメッセージは[error_messages](https://docs.djangoproject.com/en/stable/ref/forms/fields/#django.forms.Field.error_messages)に定義する

* フィールドに指定する変数一覧 [*](https://docs.djangoproject.com/en/stable/ref/forms/fields/#core-field-arguments)

* テンプレートでform.foo.valueで値を表示することができる

* コントロールの属性の指定方法 [*](https://docs.djangoproject.com/en/stable/ref/forms/widgets/#django.forms.Widget.attrs)

* wigetの一覧 [*](https://docs.djangoproject.com/en/stable/ref/forms/widgets/)

* wigetの属性を変更する   
form.fields["foo"].widget.attrs["bar"] = "qwert" 

* [ModelForm](https://docs.djangoproject.com/en/stable/topics/forms/modelforms/)ではBooleanFieldはrequired=Falseになっている

* ModelFormでrequired=Falseにする方法    
{% highlight python %}
class Foo(ModelForm):
    def __init__(self, *args, **kwd):
        super(Foo, self).__init__(*args, **kwd)
        self.fields["bar"].required = False
{% endhighlight %}

* Formのバリデーション [\*](https://docs.djangoproject.com/ja/1.9/ref/forms/validation/)  

* ValidationError [\*](https://docs.djangoproject.com/en/stable/ref/exceptions/#validationerror)  

* テンプレート内でフォームのフィールドのプロパティ一覧 [\*](https://docs.djangoproject.com/ja/stable/topics/forms/#looping-over-the-form-s-fields)  

* FileField ファイルアップロードをするときに使用する [\*](https://docs.djangoproject.com/en/stable/ref/forms/fields/#filefield)  
ファイルがない場合はキー自体がない 

* RegexField パターンにマッチした入力のみ有効な入力とする [\*](https://docs.djangoproject.com/en/stable/ref/forms/fields/#regexfield)  
[regex](https://docs.djangoproject.com/en/stable/ref/forms/fields/#django.forms.RegexField.regex)にマッチした場合、有効な入力である  
<br>
<br/>
<hr/>
[Djangoメモ](/2014/12/04/django.html)
