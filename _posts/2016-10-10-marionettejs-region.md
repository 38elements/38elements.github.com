---
layout: posts
title: Marionette.jsのRegionメモ
---
[document](http://marionettejs.com/docs/master/marionette.region.html)  

RegionはApplicationとViewで子Viewを配置する要素を登録する。

Viewでは以下のように設定する。

```
   regions: {
        <region name>: '<selector>',
        ...
    }
```
<br>

#### Region要素とView要素の置換
以下のようにするとid=fooの要素をViewの要素に置き換えることができる。

```
'regions': {
    'region1': {
        'el': '#foo',
        'replaceElement': true
    }
}
 ```
<br>

#### 動的な設定

以下のように動的に設定することができる。

```
'regions': function(options) { 
   return {
      'region1': {
         'el': '#foo',
         'replaceElement': true
      }
   };
}
```

<br>
<hr>
[Marionette.jsメモ](/2016/09/11/backbone_marionette.html)  
[handlebars.js](http://handlebarsjs.com/reference.html)  
[Backbone.js](http://backbonejs.org/#View)  
