---
layout: posts
title: DjangoのModelメモ 
---
* テーブル名     
デフォルトでは<アプリケーション名>_<Model名>になる。   
Metaクラスの[db_table](https://docs.djangoproject.com/en/1.7/ref/models/options/#db-table)にテーブル名を指定することができる。
   
* idが自動的に生成される[*](https://docs.djangoproject.com/en/1.7/topics/db/models/#automatic-primary-key-fields)

* validationは[full_clean](https://docs.djangoproject.com/en/1.7/ref/models/instances/#django.db.models.Model.full_clean)で行う。

* 独自のvalidation処理は[clean](https://docs.djangoproject.com/en/1.7/ref/models/instances/#django.db.models.Model.clean)に記述する

* field一覧[*](https://docs.djangoproject.com/en/1.7/ref/models/fields/#model-field-types)

* カスタムフィールドの作成方法[*](https://docs.djangoproject.com/en/1.7/howto/custom-model-fields/)
 
* Fieldに指定することができるオプション一覧[*](https://docs.djangoproject.com/en/1.7/topics/db/models/#field-options)

* 多対多の関係をにするにはそれようのfieldとテーブルを作成する[*](https://docs.djangoproject.com/en/1.7/topics/db/models/#extra-fields-on-many-to-many-relationships) [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#saving-foreignkey-and-manytomanyfield-fields)

* Meta[*](https://docs.djangoproject.com/en/1.7/ref/models/options/)

* 継承する用のクラスはMeta abstract = Trueする。

* related_nameは多対多の関係になっているオブジェクトを参照する際に利用する。    
継承する際の[注意点](https://docs.djangoproject.com/en/1.7/topics/db/models/#be-careful-with-related-name)

* レコード   
{% highlight python %}
#新規
foo = Foo(name="foo", title="bar")
foo.save()
#更新
foo.name = "1234"
foo.save()
{% endhighlight %}

* 多対多や外部キー [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#saving-foreignkey-and-manytomanyfield-fields)      
外部キーにはそれに対応したModel   
多対多はattributeにaddする

* [DjangoのModelで外部キーにModelではなくidを渡すことができる](/2014/12/04/django-foreignkey-id-save.html)
<br/>
   
#### SQL
* 比較一覧[*](https://docs.djangoproject.com/en/1.7/ref/models/querysets/#field-lookups)

* １つだけ取得したい場合は[get](https://docs.djangoproject.com/en/1.7/ref/models/querysets/#django.db.models.query.QuerySet.get)

* offset limit[*](https://docs.djangoproject.com/en/1.7/ref/models/querysets/#django.db.models.query.QuerySet.get)   
 Foo.objects.all()[5:10]

* 外部キーで参照しているテーブルを条件に加える場合はキーワード名を<外部テーブル名>\__<カラム名>\__<条件>とする [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#lookups-that-span-relationships)

* テーブルにあるカラムの値を条件に利用したい場合は[F()](https://docs.djangoproject.com/en/1.7/topics/db/queries/#filters-can-reference-fields-on-the-model)を利用する

* cacheされる条件[*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#caching-and-querysets)

* ORやANDを利用する方法 [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#complex-lookups-with-q-objects)

* レコードを削除するときは[delete()](https://docs.djangoproject.com/en/1.7/ref/models/instances/#django.db.models.Model.delete)を利用する　[*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#deleting-objects)

* レコードの複製はpkにNoneを代入する。 [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#copying-model-instances)  

* 複数のレコードを変更する際は[update()](https://docs.djangoproject.com/en/1.7/ref/models/querysets/#django.db.models.query.QuerySet.update)を利用する [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#updating-multiple-objects-at-once)

* 1対1, 多対多の操作 [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#related-objects)

* 一度に関連したデータを全て取得するSQLを発行してModelオブジェクトを生成するには[select_related](https://docs.djangoproject.com/en/1.7/ref/models/querysets/#select-related)を利用する。

* <Model名>_setでこのモデルを外部キーにしているレコードを取得することができる。外部キーにしているField定義で[related_name](https://docs.djangoproject.com/en/1.7/ref/models/fields/#django.db.models.ForeignKey.related_name)を指定するとそれで取得することができる。 [*](https://docs.djangoproject.com/en/1.7/topics/db/queries/#following-relationships-backward)

* from django.core.exceptions import ObjectDoesNotExist

* 実行されたSQLはincludeはconnection.queriesで確認することができる。  [*](https://docs.djangoproject.com/en/dev/faq/models/#how-can-i-see-the-raw-sql-queries-django-is-running)
