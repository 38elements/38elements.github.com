---
layout: posts
title: Headroom.jsメモ
---
[Headroom.js](http://wicky.nillia.ms/headroom.js/)は指定した領域で指定した幅より大きく     
上下にスクロールすることをイベントにして指定した要素にCSSのclassを指定するライブラリである。         
  
利用する手順は以下のとおり  
  
* CSSの設定 
* 初期化処理 

<br/>
CSSの設定
{% highlight css %}
/* 初期する際に対象となる要素に適応するCSS */
.initial {
    background-color: green;
    opacity: 0.5;
}
/* 上方にスクロールした際に対象となる要素に適応するCSS */
.pinned {
    background-color: blue !important;
    opacity: 0.5;
}
/* 下方にスクロールした際に対象となる要素に適応するCSS */
.unpinned {
    display: none;
}
{% endhighlight %}
<br/>
初期化処理 
{% highlight html %}
<div id='target' class="base"></div>
//ターゲットの要素を取得
var target = document.getElementById("target");
//セッティング
var headroom  = new Headroom(target, {
    //上から250pxより下の領域で10px以上スクロールするとイベントが発動する
    offset: 250,
    tolerance: 10,
    classes: {
        //初期化するときにターゲットに適用するclass
        initial: "initial",
        //上方にスクロールしたときにターゲットに適用するclass
        pinned: "pinned",
        //下方にスクロールしたときにターゲットに適用するclass
        unpinned: "unpinned"
    },
    //上方にスクロールした際に実行される関数
    onPin: function() {console.log("onPin")},
    //下方にスクロールした際に実行される関数
    onUnpin: function() {console.log("onUnpin")},
});
//初期化
headroom.init();
{% endhighlight %}
[デモ](http://jsrun.it/38elements/headroomjs?t=1389618253932)
    
