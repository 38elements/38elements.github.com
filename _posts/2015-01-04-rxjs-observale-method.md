---
layout: posts
title: RxJS Observable method
---
[document](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md)    
<br/>

* [amb(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/amb.md)   
[Demo](http://jsdo.it/38elements/rxjs-amb)    
最初に値を出力したObservableの値のみを次の処理に渡す     
Promise.race()に似ている
  
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
空のデータを送って下流の処理を実行しない    

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

* [range(start, count, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/range.md)   
startからcount分のデータを返すObservableを返す  

* [repeat(value, [repeatCount], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/repeat.md)        
valueをrepeatCount回返すObservableを返す。    
repeatCountが指定されてない場合は無限にvalueを返す。

* [return(value, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/return.md)   
just(value, [scheduler])と同じ   
valueを返すObservableを返す。    

* [start(func, [context], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/start.md)    
非同期でfuncを実行する。   
funcが返した値を返すObservableを返す。

* [startAsync(functionAsync)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/startasync.md)   
functionAsyncはPromiseを返すような非同期処理を行う関数

* [throw(exception, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/throw.md)   
throwError(exception, [scheduler])と同じ  
exceptionをthrowしてonError()を呼ぶ

* [timer(dueTime, [period], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/timer.md)     
dueTime後にperiodの間隔で値を返すObservableを返す    
periodが指定されていない場合は1回だけ値を返す    


* [toAsync(func, [context], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/toasync.md)   
funcを非同期に実行してその戻り値を値として返すObservableを返す関数を返す

* [using(resourceFactory, observableFactory)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/using.md)   


* [when(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/when.md)   
argsはPatternでandとthenDoを利用するときに利用する

* [while(condition, source)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/while.md)   
conditionはBooleanを返す関数   
conditionがfalseを返すまでObservableを返す

* [zip(args, func)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/zip.md)   
argsはObservable   
funcはargsにあるObservableの値を引数にもつ      
funcの戻り値を出力するObservableを返す。  


* [zipArray(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/ziparray.md)   
argsはObservable   
argsの各出力をarrayにして返すObservableを返す

<hr/>

* [and(rightSource)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/and.md)    
Promise.all()のようなもの     

* [asObservable()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/asobservable.md)    

* [average([selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/average.md)    
Observableの値の平均を返す。
selectoCが指定されている場合は値を引数にしてその戻り値の平均を返す

* bufferは時間内に取得したObservableの値をまとめて配列にする

* [buffer(bufferClosingSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/buffer.md#with-buffer-closing-selector)   

* [buffer(bufferOpenings, bufferClosingSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/buffer.md#with-buffer-opening-and-buffer-closing-selector)   

* [buffer(bufferBoundaries)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/buffer.md#with-boundaries)  

* [bufferWithCount(count, [skip])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/bufferwithcount.md)   
Observableから来た値の数で値をまとめる    
skipは一つ前のまとまりの直前の値を現在のまとまりに加える個数

* [bufferWithTime(timeSpan, [timeShift | scheduler], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/bufferwithtime.md)  
指定した時間の間に来た値をまとめて配列にする   
timeShiftに関してはdocumentを見ること   

* [bufferWithTimeOrCount(timeSpan, count, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/bufferwithtimeorcount.md)   

* [combineLatest(...args, resultSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/combinelatestproto.md)   
argsはObservable
各Observableが新しい値を送るごとにその他のObservableの最近の値と組み合わせてresultSelectorに渡す。

* [concatAll()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/concatall.md)    
上流にある複数のObservableを統合して１つのObservableにする    

* [concatMap(selector, [resultSelector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/concatmap.md)       
[Demo](http://jsdo.it/38elements/rxjs-concatmap)  
selectorはObservableを返す関数で引数に上流からの値とそのindexをとる    
resultSelectorは値を返す関数で引数にselectorが受け取った値、戻り値、selectorが受け取ったindex、resultSelectorのindexが来る  
selectorが返したObservableを連結してその値をresultSelectorに渡す。

* [concatMapObserver(onNext, onError, onCompleted, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/concatmapobserver.md)   
[Demo](http://jsdo.it/38elements/rxjs-concatmapobserver)   
上流の状態で処理を切り替える

* [connect()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/connect.md)     
publishでとまったsourceの流れを再開する   
１つの上流から複数の下流に流す際に利用する   

* [contains(searchElement, [fromIndex])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/contains.md)    
上流から来たデータの中に指定したデータが存在している場合、trueを１つ返す   
存在していない場合、falseを返す

* [controlled([enableQueue])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/controlled.md)   
Observableにコントローラを付与する   
request()が呼ばれるまでデータを流さない   

* [count([predicate])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/count.md)  
上流から来たデータの数を返す

* [debounce(dueTime, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/debounce.md)   
throttle

* [debounceWithSelector(durationSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/throttlewithselector.md)      
durationSelectorはtimerを返す   

* [defaultIfEmpty([defaultValue])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/defaultifempty.md)      
emptyがきたらdefaultValueを返す

* [delay(dueTime, [scheduler])]()      
dueTimeはDateかnumber    
上流のデータが流れ始めるのをdueTime待つ

* [delay([subscriptionDelay], delayDurationSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/delaywithselector.md)    
subscriptionDelayは最初にデータを流すまでの時間   
delayDurationSelectorはデータを流す間隔

* [dematerialize()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/dematerialize.md)      
[Demo](http://jsdo.it/38elements/rxjs-dematerialize)   

* [distinct([keySelector], [keySerializer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/distinct.md)      
上流から来るデータをユニークにする

* [distinctUntilChanged([keySelector], [comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/distinctuntilchanged.md)   

* [do([observer] | [onNext], [onError], [onCompleted])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/do.md)   
tap()と同じ   
流れてきたデータをそのまま下流に流す    
登録された処理を実行する   
debugに利用すると便利     

* [doOnNext(onNext, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/doonnext.md)   

* [doOnError(onError, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/doonerror.md)   

* [doOnCompleted(onCompleted, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/dooncompleted.md)    

* [doWhile(condition)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/dowhile.md)     
[Demo](http://jsdo.it/38elements/rxjs-dowhile)     
conditionはBooleanを返す関数     
conditionがtrueの場合は繰り返しソースを返す   

* [Rx.Observable.prototype.elementAt(index)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/elementat.md)    
sourceのindex番目のデータのみ流す

* [elementAtOrDefault(index, [defaultValue])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/elementatordefault.md)   
indexに値がない場合はdefaultValueを返す

* [every(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/every.md)   
上流から流れてくるデータが全てpredicateでtrueならtrueを返す  

* [expand(selector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/expand.md)    
再起的にseletorを実行して実行する毎にその戻り値を流す

* [filter(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/where.md)  
whereと同じ

* [finally(action)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/finally.md)   
[Demo](http://jsdo.it/38elements/rxjs-finally)     
subscribeが終わった後に実行される関数を登録する

* [find(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/find.md)    
最初にpredicateにマッチした値を1つ返す

* [findIndex(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/findindex.md)  
最初にpredicateにマッチした値のindexを1つ返す   
マッチしなかった場合は-1を返す

* [first([predicate], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/first.md)   
最初の値を返す。   
値がない場合はエラーになる

* [firstOrDefault(predicate, [defaultValue], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/firstordefault.md)   
最初の値を返す。   
値がない場合はdefaultValueが返る

* [flatMap(selector, [resultSelector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/selectmany.md)    

