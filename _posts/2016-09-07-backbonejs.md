---
layout: posts
title: Backbone.jsメモ
---

### Model
`model.validate(attrs)`はモデルの属性を引数にとる。  
`model.validate(attrs)`は不適切な場合はエラー文を返す。  
`invalid`イベントにエラーが渡される。   
`model.validationError`にエラーが格納される。  
`model.save()`はデフォルトでvalidate()が実行される。  
`model.set()`と`model.unset()`では{validate:true}が渡されたときvalidate()が実行される。  
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
CollectionにObjectも格納することができる  
Collection.get(id)はmodel.idを指定する。 
modelのid属性は特別な意味を持つ。  
collection.add([a,b])はa,bを加える  
collection.remove([a,b])はa,bを削除する  
add,removeイベントハンドラを付与することができる  
所属しているモデルに対してイベントハンドラを付与することができる  
<br>

### Event
trigger('event')  
once('event')  
