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

```
  childViewEvents: {
    'click:button': 'fooHandler'
  }
```

```
view.on('childview:click:button', handler);
```

