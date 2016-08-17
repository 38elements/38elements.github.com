---
layout: posts
title: DjangoのModelメモ 
---
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

* related_nameは多対多の関係になっているオブジェクトを参照する際に利用する。    
継承する際の[注意点](https://docs.djangoproject.com/en/stable/topics/db/models/#be-careful-with-related-name)

* 接続するDBを振り分ける [\*](https://docs.djangoproject.com/en/stable/topics/db/multi-db/#using-routers)   

* BaseModelはMeta.abstruct=Trueにする [\*](https://docs.djangoproject.com/en/stable/topics/db/models/#abstract-base-classes)  

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

<br/>
   
#### SQL
* Field lookups typeを指定しなかった場合はexactになる。 [\*](https://docs.djangoproject.com/en/dev/ref/models/querysets/#field-lookups)

* 比較一覧[\*](https://docs.djangoproject.com/en/stable/ref/models/querysets/#field-lookups)    
* [filter(**kwargs)](https://docs.djangoproject.com/en/stable/ref/models/querysets/#django.db.models.query.QuerySet.filter)は複数の条件を指定することができる。   
* querysetを実行する方法 [\*](https://docs.djangoproject.com/en/stable/ref/models/querysets/#when-querysets-are-evaluated)    

* １つだけ取得したい場合は[get()](https://docs.djangoproject.com/en/stable/ref/models/querysets/#django.db.models.query.QuerySet.get)

* offset limit [\*](https://docs.djangoproject.com/en/stable/ref/models/querysets/#django.db.models.query.QuerySet.get)   
 Foo.objects.all()[5:10]

* 外部キーで参照しているテーブルを条件に加える場合はキーワード名を\<外部テーブル名\>\_\_\<カラム名\>\_\_\<条件\>とする  [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#lookups-that-span-relationships)  
default_related_nameは外部キーの参照先のモデルが外部キーが所属しているテーブルのカラムの値でフィルターしたいときに使用するテーブル名 [\*](https://docs.djangoproject.com/en/stable/ref/models/fields/#django.db.models.ForeignKey.related_query_name) 

* テーブルにあるカラムの値を条件に利用したい場合は[F()](https://docs.djangoproject.com/en/stable/topics/db/queries/#filters-can-reference-fields-on-the-model)を利用する

* cacheされる条件 [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#caching-and-querysets)

* ORやANDを利用する方法 [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#complex-lookups-with-q-objects)    
notは~, ANDは&

```
foo = F00.objects.filter(Q(bar=bar) & Q(hoge=hoge)).get()
```

* レコードを削除するときは[delete()](https://docs.djangoproject.com/en/stable/ref/models/instances/#django.db.models.Model.delete)を利用する　[\*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#deleting-objects)

* レコードの複製はpkにNoneを代入する。 [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#copying-model-instances)  

* 複数のレコードを変更する際は[update()](https://docs.djangoproject.com/en/stable/ref/models/querysets/#django.db.models.query.QuerySet.update)を利用する [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#updating-multiple-objects-at-once)

* 1対1, 多対多の操作 [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#related-objects)

* 一度に関連したデータを全て取得するSQLを発行してModelオブジェクトを生成するには[select_related](https://docs.djangoproject.com/en/stable/ref/models/querysets/#select-related)を利用する。

* \<Model名\>_setでこのモデルを外部キーにしているレコードを取得することができる。  
外部キーにしているField定義で[related_name](https://docs.djangoproject.com/en/stable/ref/models/fields/#django.db.models.ForeignKey.related_name)を指定するとそれで取得することができる。 [\*](https://docs.djangoproject.com/en/stable/topics/db/queries/#following-relationships-backward)

* from django.core.exceptions import ObjectDoesNotExist

* 実行されたSQLはconnection.queriesで確認することができる。  [\*](https://docs.djangoproject.com/en/stable/faq/models/#how-can-i-see-the-raw-sql-queries-django-is-running)

* 集約関数 [\*](https://docs.djangoproject.com/en/stable/topics/db/aggregation/)   

* list(queryset)は該当するレコードがない場合は[]が返ってくる。例外は出ない。 

* 単にModelを継承したい場合はMeta.proxy = Trueとする [\*](https://docs.djangoproject.com/en/stable/topics/db/models/#proxy-models)   

* (指定したカラム名のキーと値を持つ)dictを取得したい場合は[values\(\*fields\)](https://docs.djangoproject.com/en/stable/ref/models/querysets/#values)タプルで取得したい場合は[values_list\(\*fields, flat=False\)](https://docs.djangoproject.com/en/stable/ref/models/querysets/#django.db.models.query.QuerySet.values_list)

* [model_to_dict(instance, fields=None, exclude=None)](https://docs.djangoproject.com/en/stable/_modules/django/forms/models/)はModelをdictに変換する    
add_nowがあるdatetimeはスキップされる   

* dateやdatetimeの比較はOSのlocaleに影響を受ける    

* USE_TZをTrueにすると日時をDBに保存する際にタイムゾーンがUTCの日時に変換される。  
USE_TZがFalseの場合、DBに使用するdatetimeはnativeである必要がある。    
nativeとはtzinfoがNoneのdatetimeである。    
nativeにするにはdatetime_obj.replace(tzinfo=Node)とする。     
awareはtzinfoを持つdatetime


* Custom QuerySet [\*](https://docs.djangoproject.com/en/stable/topics/db/managers/#custom-managers)     
from_queryset [\*](https://docs.djangoproject.com/en/stable/topics/db/managers/#from-queryset)  
BaseModelにセットする際はmodels.Modelを継承したクラスでMeta.abstruct=Trueにする
[\*](https://docs.djangoproject.com/en/1.9/topics/db/managers/#custom-managers-and-model-inheritance)   
  
<br/>
ModelをFormに利用したいときは[ModelForm](https://docs.djangoproject.com/en/stable/topics/forms/modelforms/)を使用する
<hr/>
[Djangoメモ](/2014/12/04/django.html)

