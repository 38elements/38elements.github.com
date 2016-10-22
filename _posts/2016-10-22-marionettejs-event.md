---
layout: posts
title: Marionette.jsのEventメモ
---
[document](http://marionettejs.com/docs/master/events.html)  

* obj.triggerMethod(event_type, value)[\*](http://marionettejs.com/docs/master/events.html#view-triggermethod)  

* obj.listenTo(target, event_type, handler)[\*](http://marionettejs.com/docs/master/events.html#listening-to-events)  

* イベントの別名の変換[\*](http://marionettejs.com/docs/master/events.html#magic-method-binding)  
foo:bar => fooBar  

* Child Viewで発生したイベントを取得する[\*](http://marionettejs.com/docs/master/events.html#child-view-events)  
イベントハンドラの第1引数はChild View

```
  childViewEvents: {
    'click:button': 'fooHandler'
  }
```

```
view.on('childview:click:button', handler);
```

* childViewTriggers[\*](http://marionettejs.com/docs/master/events.html#triggering-events-on-child-events)  

<br>

<hr>
[Marionette.jsメモ](/2016/09/11/backbone_marionette.html)  
[handlebars.js](http://handlebarsjs.com/reference.html)  
[Backbone.js](http://backbonejs.org/#View)  
