---
layout: posts
title: Marionette.jsメモ
---
[document](http://marionettejs.com/docs/current/)  

* 2.xから3.0の変更点 [\*](https://github.com/marionettejs/backbone.marionette/releases/tag/v3.0.0)  

### View

* `templateContext`の`this`は`serializeData()`である。viewではない。  

* triggersにマッピングされる文字列の規則 [\*](http://marionettejs.com/docs/v3.0.0/events.html#magic-method-binding) 

* [getOption()](http://marionettejs.com/docs/v3.0.0/marionette.functions.html#marionettegetoption)は定義されたViewの引数のオブジェクトの属性を取得する  

* [mergeOptions()](http://marionettejs.com/docs/v3.0.0/marionette.functions.html#marionettemergeoptions)は定義されたViewの引数のオブジェクトの属性をthis.&lt;属性&gt;で参照できるようにする  
 

<br>
<hr>
[Backbone.jsメモ](/2016/09/07/backbonejs.html)
