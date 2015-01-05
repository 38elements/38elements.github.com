---
layout: posts
title: RxJS Observable method
---
* [amb(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/amb.md)   
[Demo](http://jsdo.it/38elements/rxjs-amb)    
最初に値を出力したObservableの値のみを次の処理に渡す     
  
* [case(selector, sources, [elseSource|scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/case.md)    
selectorが返した文字列のsourcesのObservableを返す    
sources: キーとObservableのObject    
selector: sourcesのキーを返す関数、引数なし     

* [catch(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/catch.md)   
[Demo](http://jsdo.it/38elements/rxjs-observable-catch)   
errorが発生した場合、流されるデータをセットする    

* [concat(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/concat.md)  
[Demo](http://jsdo.it/38elements/rxjs-observable-concat)   
Observableの末尾に指定したObservaleを連結する   

* [create(subscribe)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md)  
Observableを生成する。
subscribeはobserverを引数にとる関数です。    
subscribeはonNext()とonComplete()を実行してdispose()を返す。    

* [defer(observableFactory)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/defer.md)   
[Demo](http://jsdo.it/38elements/rxjs-defer)     
observableFactoryはObservableを返す関数でdeferが呼ばれるたびに実行される。   

* [empty([scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/empty.md)   
[Demo](http://jsdo.it/38elements/rxjs-observable-empty)   
空のデータを送ってonComplete()を実行する    

* [for(sources, resultSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/for.md)   
sourcesはarray   
resultSelectorはObservableを返す関数でarrayにあるデータを1つデータとして受け取る。   

* [forkJoin(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/forkjoin.md)   
argsにはObservableを指定するObservableの最後の値を配列にして渡す   

* [from(iterable, [mapFn], [thisArg], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/from.md)   
iteratorからobservableを生成する

* [fromArray(array, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromarray.md)   
arrayからobservableを生成する

* [fromCallback(func, [scheduler], [context], [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromcallback.md)   
funcのcallback関数からobservableを生成する。    
callbackはfuncの最後の引数である必要がある。

* [fromEvent(element, eventName, [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromevent.md)   
Eventからobservableを生成する。    

* [fromPromise(promise)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/frompromise.md)   
Demo

* [fromEventPattern(addHandler, removeHandler, [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromeventpattern.md)   

* [fromNodeCallback(func, [context], [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromnodecallback.md)   

* [generate(initialState, condition, iterate, resultSelector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/generate.md)   
for文のようにObservableを生成する   

* [generateWithAbsoluteTime(initialState, condition, iterate, resultSelector, timeSelector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/generatewithabsolutetime.md)  
timeSelectorが返した時刻に値を返すObservableを返す

* [generateWithRelativeTime(initialState, condition, iterate, resultSelector, timeSelector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/generatewithrelativetime.md)  
timeSelectorは前の値を返してから値を返すまでの時間を返す

* [if(condition, thenSource, [elseSource])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/if.md)  

* [interval(period, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/interval.md)  
periodの間隔で値を返すObservableを返す

* [merge([scheduler], ...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/merge.md)   
[Demo](http://jsdo.it/38elements/rxjs-observable-merge)   
Observableを合成する

* [never()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/never.md)   
[Demo](http://jsdo.it/38elements/rxjs-never)   
何もしないObservableを返す。subscribeが実行されない

* [of(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/of.md)  
argsを返すObservableを返す。

* [ofWithScheduler([scheduler], ...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/ofwithscheduler.md)   
使用するschedulerを指定してargsを返すObservableを返す。

* [onErrorResumeNext(...args)](https://xgrommx.github.io/rx-book/content/core_objects/observable/observable_methods/onerrorresumenext.html)    
[Demo](http://jsdo.it/38elements/rxjs-onerrorresumenext)   
argsはObservableの配列   
errorが発生しても次のObservableからデータを取得する



