---
layout: posts
title: DjangoのFormメモ 
---
* 入力コントロールのidは[auto_id](https://docs.djangoproject.com/en/1.7/ref/forms/api/#django.forms.Form.auto_id)

* エラーメッセージを追加するには[add_error](https://docs.djangoproject.com/en/1.7/ref/forms/api/#django.forms.Form.add_error)を利用する。

* カスタムバリデーションは[clean](https://docs.djangoproject.com/en/1.7/ref/forms/api/#django.forms.Form.clean)に書く

* バリデーションは[is_valid](https://docs.djangoproject.com/en/1.7/ref/forms/api/#django.forms.Form.is_valid)で行う

* デフォルトのエラーメッセージは[error_messages](https://docs.djangoproject.com/en/1.7/ref/forms/fields/#django.forms.Field.error_messages)に定義する

* フィールドに指定する変数一覧 [*](https://docs.djangoproject.com/en/1.7/ref/forms/fields/#core-field-arguments)

* テンプレートでform.foo.valueで値を表示することができる

* formとmodelを関連付ける [*](https://docs.djangoproject.com/en/dev/topics/forms/modelforms/)
