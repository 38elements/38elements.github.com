---
layout: posts
title: Marionette.jsメモ
---
[document](http://marionettejs.com/docs/current/)  

* 2.xから3.0の変更点 [\*](https://github.com/marionettejs/backbone.marionette/releases/tag/v3.0.0)  

* [extend()](http://marionettejs.com/docs/master/marionette.functions.html#marionetteextend)で継承したクラスを作成する

* triggersはイベントの書き換え

* eventsはイベントとハンドラの紐付け
<br>

### Application
[document](http://marionettejs.com/docs/master/marionette.application.html)

* `application.start()`は`before:start`と`start`イベントを発生させる

* 以下のようにbackbonejsを起動する

```
let application = new Application();
application.on('start', function() {
    backbone.history.start();
});
application.start();
```

* `getRegion()`

* `showView(view)`

* `getView()`

<br>

### AppRouter
[document](http://marionettejs.com/docs/master/marionette.approuter.html)    
[Backbone.Router](http://backbonejs.org/#Router)を拡張したもの  
* routeが変わった時は`onRoute`が呼ばれる [\*](http://marionettejs.com/docs/master/marionette.approuter.html#handling-route-changes)  

* controllerを使用した例 [\*](http://marionettejs.com/docs/master/marionette.approuter.html#configure-routes-in-constructor)
<br>


### View

* `templateContext`の`this`は`serializeData()`である。viewではない。  

* [getOption()](http://marionettejs.com/docs/v3.0.0/marionette.functions.html#marionettegetoption)は定義されたViewの引数のオブジェクトの属性を取得する  

* [mergeOptions()](http://marionettejs.com/docs/v3.0.0/marionette.functions.html#marionettemergeoptions)は定義されたViewの引数のオブジェクトの属性をthis.&lt;属性&gt;で参照できるようにする  

* RegionはView内の要素のフック

* `showChildView(region, view)`でリージョンにViewをセットする

* `getChildView(region)`はリージョンにセットしたViewを取得する  

* `onRender()`で`showChildView(region, view)`の設定をする  

* `childViewEvents`属性は子Viewで発生したイベントを捕捉する

* `ui`属性はViewで使用する要素のセレクタを登録する

* `getUI(ui_key)`でui_keyに対応したjQueryオブジェクトを取得する

* eventsは指定したイベントと要素に対応したハンドラーを実行する設定  
functionを渡すこともできる  
{% raw %}
events: {
    'click @ui.info': 'displayInfo'
}
{% endraw %}

* triggersはイベントとそれに対応した発生させるイベントを発生させる設定  
events: {
    'click @ui.info': 'click:info'
}

* triggersにマッピングされる文字列の規則 [\*](http://marionettejs.com/docs/v3.0.0/events.html#magic-method-binding) 

* [triggerMethod()](http://marionettejs.com/docs/master/marionette.view.html#onevent-listeners)は上の文字列の規則を反映した属性を実行する

* ライフサイクルイベント [\*](http://marionettejs.com/docs/master/viewlifecycle.html#view-lifecycle)

* `modelEvents`はViewのmodel属性のmodelが発生させたイベントとそのハンドラーを紐つける。  

* `collectionEvents`ははViewのcollection属性のcollectionが発生させたイベントとそのハンドラーを紐つける。 

* templateにデータを渡す際、Modelは属性がtemplate内のグローバル変数になる。  
Collectionはitemsという変数に格納される。 [\*](http://marionettejs.com/docs/master/marionette.view.html#advanced-view-topics)

* [View.render()](https://github.com/marionettejs/backbone.marionette/blob/d8bee8d66003f6935994f7f066235a8896f81d94/src/view.js#L92)はBackbone.jsの[それ](https://github.com/jashkenas/backbone/blob/master/backbone.js#L1351)とは異なる

<br>

### CollectionView
[document](http://marionettejs.com/docs/master/marionette.collectionview.html)  
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
<br>

### Event
[document](http://marionettejs.com/docs/master/events.html)  

* on('event_name', hanlder, thisObj)

* triggerMethod('event_name', ...args);

* 子Viewから親Viewへイベントバブルを捕捉する  
childview接頭辞を親Viewのtriggerにつける [\*](http://marionettejs.com/docs/master/events.html#event-bubbling)  
`childViewEvents`属性もある [\*](http://marionettejs.com/docs/master/events.html#explicit-event-listeners)
<br>

### Region
[document](http://marionettejs.com/docs/master/marionette.region.html)  

* view.addRegion('region_name', 'selector');

* Viewを加える方法 [\*](http://marionettejs.com/docs/master/marionette.region.html#showing-a-view)

* `region.empty()`でリージョン以下のViewを削除

* 他のViewを表示するとき元のViewはdestoryされるが{preventDestroy: true}するとdestroyされない  

```
region.show(view, {preventDestroy: true});
```

* `region.hasView()`: Viewがセットされているか

* `region.reset()`: Viewを削除して再度追加

*　`region.attachHtml()`はviewを表示することに利用する

<br>

### Behavior
[document](http://marionettejs.com/docs/master/marionette.behavior.html)  

* Viewの属性の一部

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
