---
layout: posts
title: Array::mapのコールバック関数の引数 
---
私はいつも以下のようにJavaScriptのArray::mapに指定するcallback関数では第1引数しか利用していない。<br/>
{% highlight javascript %}
[0,1,2].map(function(value) {
    return value + 1;
})
//[1, 2, 3]
{% endhighlight %}
<br/>
[MDNの実装サンプル](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map)を見て他の引数の存在を知った。<br/>
callback(<配列の要素>, <要素のインデックス>, <配列>)になっている。
{% highlight javascript %}
[0,1,2].map(function(value, index, arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
})
//1
//0
//[1, 2, 3]
//2
//1
//[1, 2, 3]
//3
//2
//[1, 2, 3]
{% endhighlight %}
