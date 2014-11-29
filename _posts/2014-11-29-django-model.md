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
