---
layout: posts
title: Marionette.jsメモ
---
[document](http://marionettejs.com/docs/current/)  

* 2.xから3.0の変更点 [\*](https://github.com/marionettejs/backbone.marionette/releases/tag/v3.0.0)  

* [extend()](http://marionettejs.com/docs/master/marionette.functions.html#marionetteextend)で継承したクラスを作成する

* triggersはイベントの書き換え

* eventsはイベントとハンドラの紐付け  

* 属性に関数を設定するとその戻り値が属性の値になる [\*](https://github.com/marionettejs/backbone.marionette/blob/master/docs/basics.md#functions-returning-values)  
<br>

#### [Marionette.jsのApplicationメモ](/2016/10/09/marionettejs-application.html)
<br>

### AppRouter
[document](http://marionettejs.com/docs/master/marionette.approuter.html)    
[Backbone.Router](http://backbonejs.org/#Router)を拡張したもの  
* routeが変わった時は`onRoute`が呼ばれる [\*](http://marionettejs.com/docs/master/marionette.approuter.html#handling-route-changes)  

* controllerを使用した例 [\*](http://marionettejs.com/docs/master/marionette.approuter.html#configure-routes-in-constructor)  

* 起動方法

```
let router = new AppRouter();
Backbone.history.start();
```
<br>

#### [Marionette.jsのViewメモ](/2016/10/10/marionettejs-view.html)
<br>

### CollectionView
[document](http://marionettejs.com/docs/master/marionette.collectionview.html)  
[document](http://marionettejs.com/docs/master/marionette.collectionviewadvanced.html)  

* `CollectionView`は`collection`属性のcollectionに存在するmodelを`childView`属性に適用してそのelをCollectionViewのelに入れる。  
デフォフトでsortされるのでsortされたくないときはsort: falseにする  

* `childView`属性はViewを返すfunctionかView

* `childViewOptions`属性はObjectかObjectを返す関数
childViewの`initialize`関数の引数になる  

* `childViewEventPrefix`はchildViewから発生したイベントを捕捉する際の接頭辞

* `childViewEvents`はchildViewから発生したイベントを捕捉する   
カスタムイベントも捕捉する

* `childViewTriggers`はchildViewでtriggerしたものを関数にマッピングする  

* `emptyView`はcollectionが空のときに表示するView

* `emptyViewOptions`属性はObjectかObjectを返す関数
emptyViewの`initialize`関数の引数になる 

* `isEmpty`はcollectionが空かどうかの述語

* render()は全体を作り直す

* collection.reset(model)はcollection view全体を書き換える  
add(model)はそれに対応するChildViewを1つ加える  
remove(model)はそれに対応するChildViewを1つ削除

* `attachHtml`はchildViewの表示順

* `attachBuffer`はchildViewの表示

* `destroy()`はchildViewを削除する

* `filter`はmodelを表示するかしないかを判定する述語

* `setfilter()`はfilterをセット

* `removeFilter`はfilterを削除 preventRenderをセットするとリレンダリングされない

* `sort`はデフォルトで有効

* `getViewComparator()`はmodelをソートする方法

* `buildChildView(model, ChildViewClass, childViewOptions))`はchild_viewインスタンスを動的生成する [\*]()  

* `addChildView(view, index)`はviewを`CollectionView`の管理下におく [\*](http://marionettejs.com/docs/master/marionette.collectionviewadvanced.html#collectionviews-addchildview)

* [findBy\*](http://marionettejs.com/docs/master/marionette.collectionviewadvanced.html#collectionview-retrieve-child-views)でviewを検索する  
[cid](http://backbonejs.org/#Model-cid)はBackbonejsが自動的に割り当てるユニークなID  

* [filter(child, index, collection)](http://marionettejs.com/docs/master/marionette.collectionviewadvanced.html#collectionviews-filter)は表示するモデルを取捨選択する

* [setFilter(func, options)](http://marionettejs.com/docs/master/marionette.collectionviewadvanced.html#collectionviews-setfilter)でfilterをセット  
`preventRender`をoptionsに指定するとリレンダリングされない

* [removeFilter(options)](http://marionettejs.com/docs/master/marionette.collectionviewadvanced.html#collectionviews-removefilter)でfilterを削除  
`preventRender`をoptionsに指定するとリレンダリングされない

* [sort](http://marionettejs.com/docs/master/marionette.collectionviewadvanced.html#collectionviews-sort)

<br>

### Event
[document](http://marionettejs.com/docs/master/events.html)  

* on('event_name', hanlder, thisObj)

* triggerMethod('event_name', ...args);

* 子Viewから親Viewへイベントバブルを捕捉する  
childview接頭辞を親Viewのtriggerにつける [\*](http://marionettejs.com/docs/master/events.html#event-bubbling)  
`childViewEvents`属性もある [\*](http://marionettejs.com/docs/master/events.html#explicit-event-listeners)
<br>

[Marionette.jsのRegionメモ](/2016/10/10/marionettejs-region.html)  
<br>

### Backbone Radio
[document](http://marionettejs.com/docs/master/backbone.radio.html)  

* triggerは`channelName`に登録したすべてのObjectが対象

<br>

### Object
[document](http://marionettejs.com/docs/master/marionette.object.html)  

* `initialize(options)`はコンストラクタ  

* `on()`でイベントの登録  

* `destroy()`はObjectにセットしたイベントを削除する
<br>

### Template
[document](http://marionettejs.com/docs/master/template.html)  

* Viewのtemplate属性にテンプレートがある要素のセレクタをセットする

* Viewのtemplate属性にhandlebarsやunderscore.template等の関数をセットする

* ViewのgetTemplate属性にテンプレートがある要素のセレクタもしくは  
handlebarsやunderscore.template等の関数を返す関数をセットする

* Viewのcollection属性はテンプレート内では`items`という変数に格納される

* テンプレートに渡される変数について [*](http://marionettejs.com/docs/master/template.html#modelcollection-rendering-rules)

* [Template Context](http://marionettejs.com/docs/master/template.html#template-context)はテンプレートに渡されるコンテキストの一部  
ObjectかObjectを返す関数をセットする  

<br>

### TemplateCache
[document](http://marionettejs.com/docs/master/marionette.templatecache.html)   

`TemplateCache.get(selector, options)`  
`TemplateCache.clear()`  

<br>
<hr>
[Backbone.jsメモ](/2016/09/07/backbonejs.html)  
[handlebars.js](http://handlebarsjs.com/reference.html)
