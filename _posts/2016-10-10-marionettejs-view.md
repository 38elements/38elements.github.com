---
layout: posts
title: Marionette.jsのViewメモ
---
[document](http://marionettejs.com/docs/master/marionette.view.html#rendering-a-template)

#### 基本

Viewはテンプレートを表す。  
テンプレートはtagName属性で設定された要素の子要素になる。  
tagNameで設定された要素がViewのroot要素になる。  
子Viewは`regions`で設定する。  
Viewの属性はroot要素の属性になる。  
<br>

#### regions属性

テンプレート内でChildViewを設置する要素のセレクターを登録しておく

```
   regions: {
        <region name>: '<selector>',
        ...
    }
```
<br>

#### ui属性 [\*](http://marionettejs.com/docs/master/marionette.view.html#defining-ui)
<br>

#### triggers属性 [\*](http://marionettejs.com/docs/master/marionette.view.html#event-and-trigger-mapping)  
<br>

#### events属性 [\*](http://marionettejs.com/docs/master/marionette.view.html#view-events)
<br>

#### viewに関係したイベント

viewに関係したイベントリスト [\*](http://marionettejs.com/docs/master/viewlifecycle.html#view-destruction-lifecycle)
<br>

#### ChildView

onRenderの際にview.showChildView(region, view)でリージョンに子Viewを設置する。  

* view.showChildView(region, view)

* view.getChildView(region)

* region.empty()
