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
