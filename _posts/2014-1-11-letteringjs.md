---
layout: posts
title: Lettering.jsメモ
---
[Lettering.js](https://github.com/davatron5000/Lettering.js)はHTML上にある文字列を行や単語、文字に分割してspanタグでラップするライブラリである。       
その際、span要素のclass属性はそれぞれline、word、charの後ろに連番がある文字列になる。（例:ward1）      
利用にはjQueryが必要である。     
  
<br/>
対象HTML  
{% highlight html %}
<p id="target">foo bar 123456789</p>
{% endhighlight %}
<br/>
実行するJavaScript
{% highlight javascript %}
    $("#target").lettering('words');
{% endhighlight %}
<br/>
実行結果  
{% highlight html %}
<p id="target">
    <span class="word1">foo</span>
    <span class="word2">bar</span>
    <span class="word3">123456789</span>
</p>
{% endhighlight %}
[サンプル](http://jsrun.it/38elements/letteringjs1?t=1389417007317)
    
<br/>
<br/>
メソッドチェインをつなげて細かく分割することもできる。   
<br/>
対象HTML  
{% highlight html %}
<p id="target">foo bar 123456789</p>
{% endhighlight %}
<br/>
実行するJavaScript
{% highlight javascript %}
    $("#target").lettering('words').children('span').lettering();
{% endhighlight %}
<br/>
実行結果  
{% highlight html %}
<p id="target">
    <span class="word1">
        <span class="char1">f</span>
        <span class="char2">o</span>
        <span class="char3">o</span>
    </span>
    <span class="word2">
        <span class="char1">b</span>
        <span class="char2">a</span>
        <span class="char3">r</span>
    </span>
    <span class="word3">
        <span class="char1">1</span>
        <span class="char2">2</span>
        <span class="char3">3</span>
        <span class="char4">4</span>
        <span class="char5">5</span>
        <span class="char6">6</span>
        <span class="char7">7</span>
        <span class="char8">8</span>
        <span class="char9">9</span>
    </span>
</p>
{% endhighlight %}
[サンプル](http://jsrun.it/38elements/letteringjs2?t=1389417007317)      
サンプルでは3の倍数文字目の文字を赤色にするCSSを設定している。
