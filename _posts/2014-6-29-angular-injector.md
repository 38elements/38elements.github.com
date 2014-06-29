---
layout: posts
title: injector.jsメモ 
---
AngularJsの[injector.js](https://github.com/angular/angular.js/blob/master/src/auto/injector.js)を読んだ際のメモ  
[injectorSpec.js](https://github.com/angular/angular.js/blob/master/test/auto/injectorSpec.js)   
<br/>    
#### anonFn(fn)  
{% highlight javascript %}
anonFn(function(a,b,c) {var a = b + 1;});
// "function(a,b,c)"
anonFn("foo");
// "fn"
{% endhighlight %}   
<br/>    
#### annotate(fn, strictDi, name)
{% highlight javascript %}
var a = angular.injector();
a.annotate(function(aa, bb, _cc_) {});
// ["aa", "bb", "cc"]
a.annotate(["a", "b", "c", function(a,b,c){}]);
// ["a", "b", "c"]
var b = function(){};
b.$inject = ["a", "b", "c"];
a.annotate(b);
// ["a", "b", "c"]
{% endhighlight %}   
<br/>    
#### $injector::invoke(fn, self, locals, serviceName)  
fnはannotateに渡すfnと同じ形式で必ずしもfunctionである必要はない。
fn内のfunctionを実行した戻り値を返す。

