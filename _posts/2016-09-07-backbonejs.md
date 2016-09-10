---
layout: posts
title: Backbone.jsメモ
---
[Document](http://backbonejs.org/)  

### Model
`model.validate(attrs)`はモデルの属性を引数にとる。  
`model.validate(attrs)`は不適切な場合はエラー文を返す。  
`invalid`イベントにエラーが渡される。   
`model.validationError`にエラーが格納される。  
`model.save()`はデフォルトでvalidate()が実行される。  
`model.set()`と`model.unset()`では{validate:true}が渡されたときvalidate()が実行される。  
urlにアクセス先を指定する  
<br>

### View
tagNameで指定したElementをrootにした要素を表す。
elプロパティがその生成された要素を格納する。
$elは$(el)と同じ  
classNameやidを指定することができる。  
eventsでViewに関するイベントを登録する。  
eventsは以下の形式  
handlerはViewのプロパティ  

```
{
    '<event type> <selector>: <handler>'
}
```

elに既にページに存在しているCSSセレクタや$elemを指定してそれをroot要素にすることができる。  
view.setElement(elem)でviewに紐づいているelemを切り替えることができる。   

```
fooView = new FooView({el: elem, model: fooModel});
```

initializeでモデルとrender()をbind    
redner()はDomの処理を書く  
<br>

### Collection
CollectionはModelの集合  
modelにModelを指定する  
urlにアクセス先を指定する  
CollectionにObjectも格納することができる  
Collection.get(id)はmodel.idを指定する。 
modelのid属性は特別な意味を持つ。  
collection.add([a,b])はa,bを加える  
collection.remove([a,b])はa,bを削除する  
add,removeイベントハンドラを付与することができる  
所属しているモデルに対してイベントハンドラを付与することができる  
{'merge': true}  
set(data)はidに応じてadd, remove, changeイベントを起こす  
set(data)はidが存在しているものは更新、ないものは削除、新規は追加   
reset(data)はdataに置き換える  
resetイベントが発生する  
underscorejsのメソッドを利用することができる  
[remove()](http://backbonejs.org/#Collection-remove)はcollectionのみ指定したmodelを削除する  
<br>

### Event
trigger('event')  
once('event')  
change:foo_attr  
collection.set()はidに応じてadd, remove, changeイベントを起こす  
<br>


### Serverとの通信
ModelやCollectionのurlにアクセス先を指定する  
[parse()](http://backbonejs.org/#Model-parse)はサーバーから送られてきたデータを変換する  
[collection.fetch()](http://backbonejs.org/#Collection-fetch)で{reset: true}を指定するとresetする  
save()はPUTメソッドでリクエストを送る。validate()を実行する  
[destroy()](http://backbonejs.org/#Model-destroy)はDELETEメソッドを送る  
<br>









