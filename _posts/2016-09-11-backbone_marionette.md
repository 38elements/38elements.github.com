---
layout: posts
title: Marionette.jsメモ
---
[document](http://marionettejs.com/docs/current/)  

* 2.xから3.0の変更点 [\*](https://github.com/marionettejs/backbone.marionette/releases/tag/v3.0.0)  

* [extend()](http://marionettejs.com/docs/master/marionette.functions.html#marionetteextend)で継承したクラスを作成する



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
<br>
<hr>
[Backbone.jsメモ](/2016/09/07/backbonejs.html)
