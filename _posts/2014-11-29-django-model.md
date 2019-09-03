---
layout: posts
title: DjangoのModelメモ 
---
* 全てのFieldで共通にセットすることができるoption [\*](https://docs.djangoproject.com/en/stable/ref/models/fields/#field-options)

* models.pyをディレクトリにする場合はmodels/__init__.pyにModelクラスをimportする。

* テーブル名     
デフォルトでは\<アプリケーション名\>_\<Model名\>になる。   
Metaクラスの [db_table](https://docs.djangoproject.com/en/stable/ref/models/options/#db-table) にテーブル名を指定することができる。
   
* idが自動的に生成される[\*](https://docs.djangoproject.com/en/stable/topics/db/models/#automatic-primary-key-fields)

* validationは[full_clean](https://docs.djangoproject.com/en/stable/ref/models/instances/#django.db.models.Model.full_clean)で行う。

* 独自のvalidation処理は[clean](https://docs.djangoproject.com/en/stable/ref/models/instances/#django.db.models.Model.clean)に記述する

* field一覧 [\*](https://docs.djangoproject.com/en/stable/ref/models/fields/#model-field-types)

* カスタムフィールドの作成方法 [\*](https://docs.djangoproject.com/en/stable/howto/custom-model-fields/)
 
* Fieldに指定することができるオプション一覧 [\*](https://docs.djangoproject.com/en/dev/ref/models/fields/#field-options)

* [Field.validators](https://docs.djangoproject.com/en/dev/ref/models/fields/#validators)に指定するvalidatorについて [*](https://docs.djangoproject.com/en/dev/ref/validators/)

* 多対多の関係をにするにはそれようのfieldとテーブルを作成する [\*](https://docs.djangoproject.com/en/stable/topics/db/models/#extra-fields-on-many-to-many-relationships)  [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#saving-foreignkey-and-manytomanyfield-fields)

* Many-to-many relationships [\*](https://docs.djangoproject.com/en/1.9/topics/db/examples/many_to_many/)    

* Meta [\*](https://docs.djangoproject.com/en/stable/ref/models/options/)

* [related_name](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey.related_name)は外部参照しているレコードをを参照する属性名を指定する。    
継承する際の[注意点](https://docs.djangoproject.com/en/2.2/topics/db/models/#be-careful-with-related-name-and-related-query-name)  
\<Model名\>_setでモデルを外部キーにしているレコードを取得することができる。[\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#following-relationships-backward)

* [related_query_name](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey.related_query_name)は外部参照しているレコードのカラムでフィルターする際の外部参照しているレコードの名前を指定する。

* 接続するDBを振り分ける [\*](https://docs.djangoproject.com/en/stable/topics/db/multi-db/#using-routers)   

* BaseModelはMeta.abstract=Trueにする [\*](https://docs.djangoproject.com/en/stable/topics/db/models/#abstract-base-classes) 

* マイグレーションの対象にしない場合はmanaged=False [\*](https://docs.djangoproject.com/en/stable/ref/models/options/#managed)

* レコード   
{% highlight python %}
#新規
foo = Foo(name="foo", title="bar")
foo.save()
#更新
foo.name = "1234"
foo.save()
{% endhighlight %}

* 以下のようなエラーが発生した場合 [\*](https://docs.djangoproject.com/en/stable/ref/databases/)  
```
1005, "Can't create table database_name.#sql-1456_ab (errno: 150)
```
以下の設定をする [\*](https://docs.djangoproject.com/en/stable/ref/databases/#creating-your-tables)  
```
'OPTIONS': {
   'init_command': 'SET default_storage_engine=MyISAM',
}
```
* _meta [\*](https://docs.djangoproject.com/es/stable/ref/models/meta/)  
  モデルで定義されているfieldの一覧を取得する。  
`Options.get_fields(include_parents=True, include_hidden=False)` [\*](https://docs.djangoproject.com/es/stable/ref/models/meta/#django.db.models.options.Options.get_fields)  

* 多対多や外部キー [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#saving-foreignkey-and-manytomanyfield-fields)      
外部キーにはそれに対応したModel   
多対多はattributeにaddする

* [DjangoのModelで外部キーにModelではなくidを渡すことができる](/2014/12/04/django-foreignkey-id-save.html)  

* 多対多のレコードを一度に全部取得するにはprefetch_related()を使用する   [\*](https://docs.djangoproject.com/en/stable/ref/models/querysets/#prefetch-related)

* Modelに関連したurlはModel.get_absolute_url(self)に書く [\*](https://docs.djangoproject.com/en/stable/ref/models/instances/#django.db.models.Model.get_absolute_url)

* choicesの選択されているラベルを表示する方法 [\*](https://docs.djangoproject.com/en/stable/ref/models/instances/#django.db.models.Model.get_FOO_display)  

* [models.ForeignKey](https://docs.djangoproject.com/en/stable/ref/models/fields/#foreignkey)の第1引数  
`'Foo'`: そのアプリケーションのFooモデル   
`'A.Bar'`: AアプリケーションのBarモデル   

* 参照しているレコードが削除された時、それを参照しているレコードも削除したい場合は  
ForeignKeyのon_deleteに[models.CASCADE](https://docs.djangoproject.com/en/stable/ref/models/fields/#django.db.models.CASCADE)を指定する。

* ModelをFormに利用したいときは[ModelForm](https://docs.djangoproject.com/en/stable/topics/forms/modelforms/)を使用する

<hr/>

[Djangoメモ](/2014/12/04/django.html)

