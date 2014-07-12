---
layout: posts
title: rootScope.jsメモ 
---
AngularJsの[rootScope.js](https://github.com/angular/angular.js/blob/5224499bcdab670a882c6119e2d9192b84aa9047/src/ng/rootScope.js)に関するメモ     
<br/>
#### Scope::$new(isolate)
isolateなscopeは共有するために$$asyncQueue、$$postDigestQueueを代入している。   
子scopeはthis.$$childScopeClass.prototype = thisすることで親scopeを代入して共有している。   
親scopeと子scopeのデータ共有がthis.$$childScopeClass.prototype = thisで行われている。   
共有されないものが$$childScopeClassの属性になっている。  
<br/>
#### Scope::$watch(watchExp, listener, objectEquality)
[$parse](https://docs.angularjs.org/api/ng/service/$parse)は関数を引数に渡されたときはそのまま関数を返す。  
compileToFnはwatchExpを$parseする。   
noopはfunction noop() {}で何もしない関数   
scope.$$watchers = []に以下のオブジェクトを格納する。   
{% highlight javascript %}
watcher = {
    fn: listener,
    // function initWatchVal() {}
    last: initWatchVal,
    // get = compileToFn(watchExp, 'watch'),
    // 比較に利用する。
    get: get,
    exp: watchExp,
    // 参照でオブジェクトを比較するのでは
    eq: !!objectEquality
};
{% endhighlight %}   
unwatchするための関数を返す。    
<br/>
#### Scope::$watchGroup(watchExpressions, listener)
複数のwatchExpを1つのlistenerに紐付ける。  
各watchExpを$watchする。そのcallbackがchangeCount++する。  
changeCountを返すwatchExpのcallbackにlistenerを指定する。  
unwatchCountが0になるとlistener.$$unwatchがtrueになる。  
<br/>
#### Scope::$watchCollection(obj, listener)  
指定されたscopeの属性の型がarrayやobjectだったときそれらの属性の変化を監視する。 
指定されたscopeの属性の型がarrayの場合は配列の要素を監視する。  
指定されたscopeの属性の型がobjectの場合は属性を監視する。  
以下の文で処理を行っている。
return this.$watch($watchCollectionWatch, $watchCollectionAction);  
  
$watchCollectionWatch()   
oldValueにすべての型の古い値が格納される   
innerArrayにarray型の古い値が格納される   
innerObjectにobject型の古い値が格納される   
newValueがobjectかarrayでoldValueがinnerArrayやinnerObjectと同じオブジェクトを参照していない場合、   
空のarrayもしくはobjectをoldValueやinnerArray、innerObjectに代入する。   
oldValueとinnerArrayやinnerObjectが同じオブジェクトを参照するようにする。       
  
$watchCollectionAction()  
listenerを実行する  
veryOldValueにnewValueをコピーして次に実行した際にlistenerにそれを渡す。  
<br/>
#### Scope::$digest()  
スコープと子スコープのwatchを実行する。 
listenerをが実行されなくなるまで繰り返し実行される。  
手動で実行したいときはScope::$applyを利用する。    
$$asyncQueue, $$postDigestQueueは親scopeと共有する。   
watcher.getはcompileToFn(watchExp, 'watch')  
watcher.getの引数にscopeを渡している  
watch = watchers[length];   
watch.get(current)とwatch.lastを比較して異なっていればwatch.lastにwatch.get(current)を代入する。監視対象が変化してlistenerを実行する。  
lastDirtyWatchには最後に実行されたlistenerのwatchが格納される。  
listenerを実行するオブジェクトの走査は$digestを呼びだしたscope以下のスコープすべてを対象にして行われる。  
targetは$digestの呼び出しもとのscopeが入る。$digest中は変化しない。   
currentは走査中に検査対象になったscopeが入る。   
lastDirtyWatch === watchもしくはscopeの親子間の走査でttlが1減る。   
lastDirtyWatch === watchのときdirtyはfalseになる。  
監視対象が変化してlistenerを実行する時dirtyはfalseになる。   
watchしているscopeの走査が終了条件 while (dirty || asyncQueue.length);    
$digestを呼びだしたscope以下の走査は以下の部分で行っている    
{% highlight javascript %}
if (!(next = (current.$$childHead ||
    (current !== target && current.$$nextSibling)))) {
    while(current !== target && !(next = current.$$nextSibling)) {
        current = current.$parent;
    }
}
{% endhighlight %}   
<br/>
#### Scope::$destroy()  
該当scopeを親scopeから削除する。  
$destroyを該当scopeからbroadcastする。  
該当scopeの他のscopeへの参照を削除する。   
<br/>
#### Scope::$eval(expr, locals)  
scopeの属性を引数に応じて処理する。  
文字列と関数のどちらかを第1引数にする。  
第2引数にはscopeをoverrideする値を指定する。    
<br/>
#### Scope::$evalAsync(expr)   
$browser.defer(fn)はfnをsetTimeoutで実行する  
this.$$asyncQueue.push({scope: this, expression: expr});  
<br/>
#### Scope::$$postDigest(fn)   
this.$$postDigestQueue.push(fn);  
<br/>
#### Scope::$apply(expr)     
angular内で実行したい処理を引数に取る。  
$eval(exp) => $digest()  
<br/>
#### Scope::$on(name, listener)
$emitや$broadcastで呼ばれるlistenerを登録する。    
$$listenersにnameをkeyにして配列にlistenerを格納する。   
親スコープをたどって先祖スコープすべてに$$listenerCount[name]++する。    
<br/>
#### Scope::$emit(name, args)
argsはlistenerに引数で渡される。  
listenerに渡されるeventは以下の内容  
{% highlight javascript %}
event = {
    name: name,
    targetScope: scope,
    stopPropagation: function() {stopPropagation = true;},
    preventDefault: function() {
        event.defaultPrevented = true;
    },
    defaultPrevented: false
}
event.currentScope = scope;
{% endhighlight %}   
<br/>
#### Scope::$broadcast(name, args)
argsはlistenerに引数で渡される。  
listenerに渡されるeventは以下の内容  
{% highlight javascript %}
event = {
    name: name,
    targetScope: target,
    preventDefault: function() {
        event.defaultPrevented = true;
    },
    defaultPrevented: false
}
event.currentScope = scope;
{% endhighlight %}   
<br/>
var $rootScope = new Scope();
<br/>
#### decrementListenerCount(current, count, name)  
$onの戻り値
{% highlight javascript %}
return function() {
    namedListeners[indexOf(namedListeners, listener)] = null;
    decrementListenerCount(self, 1, name);
};
{% endhighlight %}   
親スコープをたどって、親スコープのcurrent.$$listenerCount[name]をcount分減らす。   
current.$$listenerCount[name] === 0だったらdelete current.$$listenerCount[name];する。    
