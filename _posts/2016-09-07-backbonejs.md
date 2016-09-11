---
layout: posts
title: Backbone.jsメモ
---
[Document](http://backbonejs.org/)  

### Model
[document](http://backbonejs.org/#Model)  
`model.validate(attrs)`はモデルの属性を引数にとる。  
`model.validate(attrs)`は不適切な場合はエラー文を返す。  
`invalid`イベントにエラーが渡される。   
`model.validationError`にエラーが格納される。  
`model.save()`はデフォルトでvalidate()が実行される。  
`model.set()`と`model.unset()`では{validate:true}が渡されたときvalidate()が実行される。  
urlにアクセス先を指定する  
<br>

### View
[document](http://backbonejs.org/#View)  
tagNameで指定したElementをrootにした要素を表す。
elプロパティがその生成された要素を格納する。
$elは$(el)と同じ  
classNameやidを指定することができる。  
eventsでViewに関するイベントを登録する。  
eventsは以下の形式  
handlerはViewのプロパティ  

{% raw %}
{  
    'event_type selector': 'handler'
}  
{% endraw %}

elに既にページに存在しているCSSセレクタや$elemを指定してそれをroot要素にすることができる。  
view.setElement(elem)でviewに紐づいているelemを切り替えることができる。   

```
fooView = new FooView({el: elem, model: fooModel});
```

initializeでモデルとrender()をbind    
redner()はDomの処理を書く  
<br>

### Collection
[document](http://backbonejs.org/#Collection)  
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
デフォルトのイベント一覧 [\*](http://backbonejs.org/#Events-catalog)  
[Backbone.Events](http://backbonejs.org/#Events)を継承したものがイベントを受け取ることができる。   
trigger('event')  
once('event')  
change:foo_attr  
collection.set()はidに応じてadd, remove, changeイベントを起こす  
[on()](http://backbonejs.org/#Events-on)  
[off()](http://backbonejs.org/#Events-off)  
[trigger()](http://backbonejs.org/#Events-trigger)  
trigger()は複数のイベントを起こすことができる  

```
obj.trigger('event1 event2', 'arg')
```

[listenTo()](http://backbonejs.org/#Events-listenTo)は他のオブジェクトで発生したイベントを受け取る  
listenToOnce()もある  
[stopListening()](http://backbonejs.org/#Events-stopListening)はlistenTo()をやめる  
view.eventsに登録することもできる  
<br>

### Serverとの通信
ModelやCollectionのurlにアクセス先を指定する  
[parse()](http://backbonejs.org/#Model-parse)はサーバーから送られてきたデータを変換する  
[collection.fetch()](http://backbonejs.org/#Collection-fetch)で{reset: true}を指定するとresetする  
[save()](http://backbonejs.org/#Model-save)はPUTメソッドでリクエストを送る。{patch: true}にするとpatchメソッドにする。validate()を実行する  
[destroy()](http://backbonejs.org/#Model-destroy)はDELETEメソッドを送る  
<br>

### Router
[document](http://backbonejs.org/#Router)  
[Backbone.Router.extend()](http://backbonejs.org/#Router-extend)でrouterを生成した後、Backbone.history.start()する  
routesでurlとコールバック関数をマッピングする。  
[router.navigate()](http://backbonejs.org/#Router-navigate)はリダイレクトのようなもの  
デフォルトではリダイレクト先のコールバック関数を実行しない 
{trigger: true}でリダイレクト先のコールバック関数を実行する  
{replace: true}で履歴を上書き  
[router.execute()](http://backbonejs.org/#Router-execute)はマッチするたびに実行される関数  
デフォルトのルーティングは{% raw %}'*path':  'default_func'{% endraw %}  
<br>

### Backbone.Marionette
[document](http://marionettejs.com/docs/current/)  
2.xから3.0の変更点 [\*](https://github.com/marionettejs/backbone.marionette/releases/tag/v3.0.0)  

















