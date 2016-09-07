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
`model.set()`と`model.unset()`では`{validate:true}`が渡されたときvalidate()が実行される。  
<br>

### View
<br>
