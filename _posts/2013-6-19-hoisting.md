---
layout: posts
title: 宣言の巻き上げ 
---
JavaScriptの関数での宣言の巻き上げは変数は巻き上げるが、変数の値は巻き上げない。
{% highlight javascript %}
var a = 1;
var func = function() {
    console.log(a);
    var a = 1;
}
func();
//=>undefined
{% endhighlight %}
以下のコードと同じ。
{% highlight javascript %}
var a = 1;
var func = function() {
    var a;
    console.log(a);
    a = 1;
}
func();
//=>undefined
{% endhighlight %}
