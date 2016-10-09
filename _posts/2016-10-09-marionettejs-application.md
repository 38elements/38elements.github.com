---
layout: posts
title: Marionette.jsのApplicationメモ
---
[document](http://marionettejs.com/docs/master/marionette.application.html)  
[source](https://github.com/marionettejs/backbone.marionette/blob/master/src/application.js)  

* ApplicationのRootViewはregionで指定した要素のの下に`app.showView(view_obj);`で挿入する。  
`app.showView(view_obj);`で入れ替えることも可能 [\*](http://marionettejs.com/docs/master/marionette.application.html#root-layout)   

* [initialize](http://marionettejs.com/docs/master/marionette.application.html#initialize)の代わりに`constructor`を使用することができる。
