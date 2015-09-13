---
layout: posts
title: JavaScriptメモ 
---
  
* keyイベントでデフォルトの動作を防ぎたい場合はイベントハンドラでfalseを返す。
  
* changeイベントの発動条件を変更したい場合はonfocus, onblurを変更する。
  
* 関数オブジェクトのlengthプロパティは関数定義の引数の数が入っている。  
var func = function(a,b,c) {};  
func.length;  
=>3  
  
* 文字列の途中で改行を入れたいときは「\」を行末に置く。
{% highlight javascript %}
var a = "12345\
678";
// 12345678
{% endhighlight %}

* [String.prototype.replace()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
{% highlight javascript %}
"abc1234def".replace(/[^\d]+(\d+)/g, function(match, p1) {return "__" + p1 + "__";});
// "__1234__def"
"abc".replace(/([a-z])([a-z])/g, "$1-$2-");
// "a-b-c"
{% endhighlight %}

* ~~は[Math.floor()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)と同じ

* [ceil](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)と[floor](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
{% highlight javascript %}
Math.ceil(4.3)
// 5
Math.floor(4.3)
// 4
{% endhighlight %}

