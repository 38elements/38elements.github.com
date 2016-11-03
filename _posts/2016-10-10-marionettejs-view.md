---
layout: posts
title: Marionette.jsのViewメモ
---
## View

[document](http://marionettejs.com/docs/master/marionette.view.html)

#### 基本

Viewはテンプレートを表す。  
テンプレートはtagName属性で設定された要素の子要素になる。  
tagNameで設定された要素がViewのroot要素になる。  
子Viewは`regions`で設定する。  
Viewの属性はroot要素の属性になる。  
[View.render()](https://github.com/marionettejs/backbone.marionette/blob/d8bee8d66003f6935994f7f066235a8896f81d94/src/view.js#L92)はBackbone.jsの[それ](https://github.com/jashkenas/backbone/blob/master/backbone.js#L1351)とは異なる
<br>

#### regions属性

テンプレート内でChildViewを設置する要素のセレクターを登録しておく

```
   regions: {
        <region name>: '<selector>',
        ...
    }
```

* view.addRegion(region_name, selector);
<br>

#### ui属性 [\*](http://marionettejs.com/docs/master/marionette.view.html#defining-ui)  

下記のように設定する。  

```
ui: {
    '<ui name>': '<selector>',
    ...
}
```

* view.getUI(ui)  
指定したuiに対応する要素を取得する。

events属性とtriggers属性で使用する。  

```
ui: {
    'foo': '#foo',
    ...
},

events: {
    'click @ui.foo': 'fooHandler'
},

triggers: {
    'click @ui.foo': 'click:foo'
},
```
<br>

#### triggers属性 [\*](http://marionettejs.com/docs/master/marionette.view.html#event-and-trigger-mapping)   
イベントを受け取って対応するイベントを発生させる。  
<br>

#### events属性 [\*](http://marionettejs.com/docs/master/marionette.view.html#view-events)  
イベントを受け取って対応するイベントハンドラを実行させる。  
<br>

#### modelEvents [\*](http://marionettejs.com/docs/master/marionette.view.html#model-events)
<br>

#### collectionEvents [\*](http://marionettejs.com/docs/master/marionette.view.html#collection-events)
<br>

#### イベント
* viewに関係したイベントリスト [\*](http://marionettejs.com/docs/master/viewlifecycle.html#view-destruction-lifecycle)  

* view.triggerMethod(trigger_name, value)
viewに登録されているtriggerを発生させる。

<br>

#### ChildView

onRenderの際にview.showChildView(region, view)でリージョンに子Viewを設置する。  

* view.showChildView(region, view)    
指定したregionにviewを設置する。

* view.getChildView(region)  
指定したregionに存在するviewを取得する。  
存在しない場合はnullを返す。

* region.empty()  
regionに存在する要素を削除する。

* region.show(view);

* view.getRegion(region_name);

<br>

#### childViewEvents属性

子Viewで発生したイベントにイベントハンドラを紐付ける。  

```
  childViewEvents: {
    '<event name>': '<handler>'
  }
```
<br>

## Behavior
[document](http://marionettejs.com/docs/master/marionette.behavior.html)  

各Behaviorは所属しているViewを共通化することができる。  
this.viewはBehaviorが所属しているView  
Viewのbehaviors属性で利用するBehaviorを指定する。  

```
behaviors: [BehaviorClass1, BehaviorClass2]
```
<br>

#### defaults属性

defaults属性にはデフォルトのoptionsの値を設定する。

```
    defaults: {
       type: 'car',
       date: '2015-01-19'
    }
```
<br>

<hr>
[Marionette.jsメモ](/2016/09/11/backbone_marionette.html)  
[handlebars.js](http://handlebarsjs.com/reference.html)  
[Backbone.js](http://backbonejs.org/#View)  
