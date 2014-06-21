---
layout: posts
title: rootScope.jsメモ 
---
AngularJsの[rootScope.js](https://github.com/angular/angular.js/blob/5224499bcdab670a882c6119e2d9192b84aa9047/src/ng/rootScope.js)に関するメモ     
<br/>
#### Scope::$new
isolateなscopeは共有するために$$asyncQueue、$$postDigestQueueを代入している。   
子scopeはthis.$$childScopeClass.prototype = thisすることで親scopeを代入して共有している。   
親scopeと子scopeのデータ共有がthis.$$childScopeClass.prototype = thisで行われている。   
共有されないものが$$childScopeClassの属性になっている。  
<br/>
#### Scope::$watch
[$parse](https://docs.angularjs.org/api/ng/service/$parse)は関数を引数に渡されたときはそのまま関数を返す。  
compileToFnはwatchExpを$parseする。   
noopはfunction noop() {}で何もしない関数   
scope.$$watchers = []に以下のオブジェクトを格納する。   
{% highlight javascript %}
watcher = {
    fn: listener,
    last: initWatchVal,
    get: get,
    exp: watchExp,
    eq: !!objectEquality
};
{% endhighlight %}   
unwatchするための関数を返す。    
<br/>
#### Scope::$watchGroup
複数のwatchExpを1つのlistenerに紐付ける。  
各watchExpを$watchする。そのcallbackがchangeCount++する。  
changeCountを返すwatchExpのcallbackにlistenerを指定する。  
unwatchCountが0になるとlistener.$$unwatchがtrueになる。  
<br/>
#### Scope::$watchCollection




