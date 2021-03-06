---
layout: posts
title: 3行クイックソート 
---
Pythonクックブックの元サイトには3行のクイックソートがある。
{% highlight python %}
def qsort(L):
    if len(L) <= 1: return L
    return qsort( [ lt for lt in L[1:] if lt < L[0] ] ) + [ L[0] ] + qsort( [ ge for ge in L[1:] if ge >= L[0] ] )
{% endhighlight %}
via [Quicksort in 3 Lines](http://code.activestate.com/recipes/66473-just-for-fun-quicksort-in-3-lines/)<br/>

<br/>
同じような処理をJavaScriptで書くと以下のようになる。
{% highlight javascript %}
function qsort(L) {
   if (L.length <= 1) { return L }
   return qsort(L.slice(1).filter(function(a){return a < L[0]})).concat([L[0]]).concat(qsort(L.slice(1).filter(function(a){return a >= L[0]})))
}
{% endhighlight %}
<br/>
ES6にはリスト内包とfor...ofがある。<br/>
これを使用すると以下のようになる。
{% highlight javascript %}
function qsort(L) {
   if (L.length <= 1) { return L }
   return qsort([lt for (lt of L.slice(1)) if (lt < L[0])]).concat([L[0]]).concat(qsort([ge for (ge of L.slice(1)) if (ge >= L[0])]))
}
{% endhighlight %}
