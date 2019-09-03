---
layout: posts
title: DjangoのQueryメモ 
---
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

* (指定したカラム名のキーと値を持つ)dictを取得したい場合は[values\(\*fields\)](https://docs.djangoproject.com/en/stable/ref/models/querysets/#values)  
タプルで取得したい場合は[values_list\(\*fields, flat=False\)](https://docs.djangoproject.com/en/stable/ref/models/querysets/#django.db.models.query.QuerySet.values_list)

* [model_to_dict(instance, fields=None, exclude=None)](https://docs.djangoproject.com/en/stable/_modules/django/forms/models/)はModelをdictに変換する    
add_nowがあるdatetimeはスキップされる   

* dateやdatetimeの比較はOSのlocaleに影響を受ける    

* USE_TZをTrueにすると日時をDBに保存する際にタイムゾーンがUTCの日時に変換される。  
USE_TZがFalseの場合、DBに使用するdatetimeはnativeである必要がある。    
nativeとはtzinfoがNoneのdatetimeである。    
nativeにするにはdatetime_obj.replace(tzinfo=Node)とする。     
awareはtzinfoを持つdatetime

* Custom QuerySet [\*](https://docs.djangoproject.com/en/1.10/topics/db/managers/#calling-custom-queryset-methods-from-the-manager)   

* トランザクション  
transaction.atomic() [\*](https://docs.djangoproject.com/ja/1.10/topics/db/transactions/#django.db.transaction.atomic)  
select_for_update() [\*](https://docs.djangoproject.com/ja/1.10/ref/models/querysets/#select-for-update)  

<hr/>

[Djangoメモ](/2014/12/04/django.html)
