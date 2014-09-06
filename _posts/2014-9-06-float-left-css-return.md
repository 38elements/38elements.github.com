---
layout: posts
title: floatの折り返しを防止する 
---
float:leftで要素を横に積んでいくと画面の幅が狭い場合、以下のサンプルのように折り返してしまうことがあります。         
[サンプル](http://jsrun.it/38elements/float-sample-1)                     
       
float:leftをしている親要素のwidthをfloat:leftを指定している要素の幅の総和よりも大きくすることによって折り返しを防ぐことができます。   
{% highlight css  %}
#wrapper {
    width: 3300px;
}
{% endhighlight %}  
[サンプル](http://jsrun.it/38elements/float-sample-2)                     
