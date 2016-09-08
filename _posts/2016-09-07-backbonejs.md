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

<br>
