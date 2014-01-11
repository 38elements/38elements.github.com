---
layout: posts
title: Lettering.jsメモ
---
[Lettering.js](https://github.com/davatron5000/Lettering.js)はHTML上にある文字列を行や単語、文字に      
分割してspanタグでラップする。その際、span要素のclass属性はそれぞれline、word、charの後ろに連番がある
文字列になる。（例:ward1）
 
利用する手順は以下のとおり  
  
* echo.jsの読み込み
* 対象画像のimgタグの設定
* 関数の設定
  
<br/>
対象画像のimgタグの設定  
{% highlight html %}
<img src="ロードされる前に表示する画像のurl" data-echo="遅延ロードする対象のurl" >
{% endhighlight %}
<br/>
 関数の設定
{% highlight javascript %}
  Echo.init({
      //遅延ロードが開始される画像の上部の範囲(px)
      offset: 100,
      //スクロールした際に画像の位置などを計算して遅延ロードを実行するか判断する関数の実行間隔(ms)
      throttle: 250
  });
{% endhighlight %}
    
<br/>
例       
[echo.jsでoffsetが0のときのデモ](http://jsrun.it/38elements/flqz)  
画像の最上部の領域が表示された際にロードが始まる。
    
   
[echo.jsでoffsetが1000のときのデモ](http://jsrun.it/38elements/bF6Y)  
ページが表示された際にロードが始まる。


<br/>
Echo.jsの[デモページ](http://toddmotto.com/labs/echo/)のローディング画像はcssのbackgroundプロパティを利用して実装されている。  
[サンプル](http://jsrun.it/38elements/5Wtm)
