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
[Demo](http://jsdo.it/38elements/rxjs-case)   
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

* [for(sources, resultSelector, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/for.md)   
[Demo](http://jsdo.it/38elements/rxjs-for)   
sourcesはarray   
resultSelectorはObservableを返す関数でarrayにあるデータを1つデータとして受け取る。   

* [forkJoin(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/forkjoin.md)   
[Demo](http://jsdo.it/38elements/rxjs-forkjoin)     
argsにはObservableを指定するObservableの最後の値を配列にして渡す   

* [from(iterable, [mapFn], [thisArg], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/from.md)   
iteratorからobservableを生成する

* [fromArray(array, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromarray.md)   
deprecated    
arrayからobservableを生成する

* [fromCallback(func, [scheduler], [context], [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromcallback.md)   
funcのcallback関数からobservableを生成する。    
callbackはfuncの最後の引数である必要がある。

* [fromEvent(element, eventName, [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromevent.md)   
[Demo](http://jsdo.it/38elements/rxjs-rx-spawn)   
Eventからobservableを生成する。    

* [fromPromise(promise)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/frompromise.md)   
[Demo](http://jsdo.it/38elements/rxjs-frompromise)

* [fromEventPattern(addHandler, removeHandler, [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromeventpattern.md)   

* [fromNodeCallback(func, [context], [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromnodecallback.md)   

* [generate(initialState, condition, iterate, resultSelector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/generate.md)   
[Demo](http://jsdo.it/38elements/rxjs-generate)   
for文のようにObservableを生成する   

* [generateWithAbsoluteTime(initialState, condition, iterate, resultSelector, timeSelector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/generatewithabsolutetime.md)  
timeSelectorが返した時刻に値を返すObservableを返す

* [generateWithRelativeTime(initialState, condition, iterate, resultSelector, timeSelector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/generatewithrelativetime.md)  
[Demo](http://jsdo.it/38elements/rxjs-repeat)     
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
[Demo](http://jsdo.it/38elements/rxjs-zip)   
argsを返すObservableを返す。

* [ofArrayChanges(array)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/ofarraychanges.md)   

* [ofObjectChanges(obj)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/ofobjectchanges.md)   

* [ofWithScheduler([scheduler], ...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/ofwithscheduler.md)   
[Demo](http://jsdo.it/38elements/rxjs-scheduler)   
使用するschedulerを指定してargsを返すObservableを返す。

* [onErrorResumeNext(...args)](https://xgrommx.github.io/rx-book/content/core_objects/observable/observable_methods/onerrorresumenext.html)    
[Demo](http://jsdo.it/38elements/rxjs-onerrorresumenext)   
argsはObservableの配列   
errorが発生しても次のObservableからデータを取得する

* [range(start, count, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/range.md)   
startからcount分のデータを返すObservableを返す  

* [repeat(value, [repeatCount], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/repeat.md)        
[Demo](http://jsdo.it/38elements/rxjs_repeat)    
valueをrepeatCount回返すObservableを返す。    
repeatCountが指定されてない場合は無限にvalueを返す。

* [return(value, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/return.md)   
just(value, [scheduler])と同じ   
valueを返すObservableを返す。    

* [start(func, [context], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/start.md)    
非同期でfuncを実行する。   
funcが返した値を返すObservableを返す。

* [startAsync(functionAsync)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/startasync.md)   
[Demo](http://jsdo.it/38elements/rxjs-startasync)    
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
[Demo](http://jsdo.it/38elements/rxjs-and)   
argsはPatternでandとthenDoを利用するときに利用する

* [while(condition, source)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/while.md)   
conditionはBooleanを返す関数   
conditionがfalseを返すまでObservableを返す

* [zip(...args, func)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/zip.md)  
[Demo](http://jsdo.it/38elements/rxjs-zip)     
argsはObservable   
funcはargsにあるObservableの値を引数にもつ      
funcの戻り値を出力するObservableを返す。  


* [zipArray(...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/ziparray.md)   
argsはObservable   
argsの各出力をarrayにして返すObservableを返す

<hr/>

* [and(rightSource)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/and.md)    
[Demo](http://jsdo.it/38elements/rxjs-and)     
Promise.all()のようなもの     

* [asObservable()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/asobservable.md)    

* [average([selector], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/average.md)    
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
[Demo](http://jsdo.it/38elements/rxjs-flatmap-and-concatall)    
上流にある複数のObservableを統合して１つのObservableにする    

* [concatMap(selector, [resultSelector], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/concatmap.md)       
[Demo1](http://jsdo.it/38elements/rxjs-concatmap)    
[Demo2](http://jsdo.it/38elements/rxjs-concatmap-thisarg)    
selectorはObservableを返す関数で引数に上流からの値とそのindexをとる    
resultSelectorは値を返す関数で引数にselectorが受け取った値、戻り値、selectorが受け取ったindex、resultSelectorのindexが来る  
selectorが返したObservableを連結してその値をresultSelectorに渡す。     
resultSelectorが指定されていない場合はthisArgがselectorのコンテキストになる

* [concatMapObserver(onNext, onError, onCompleted, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/concatmapobserver.md)   
[Demo](http://jsdo.it/38elements/rxjs-concatmapobserver)   
上流の状態で処理を切り替える

* [connect()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/connect.md)     
publishでとまったsourceの流れを再開する   
１つの上流から複数の下流に流す際に利用する   

* [includes(searchElement, [fromIndex])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/includes.md)    
上流から来たデータの中に指定したデータが存在している場合、trueを１つ返す   
存在していない場合、falseを返す

* [controlled([enableQueue])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/controlled.md)   
[Demo](http://jsdo.it/38elements/rxjs-controlled)     
Observableにコントローラを付与する   
request(<sourceから取得するデータの個数>)が呼ばれるまでデータを流さない   
requestは何度でもできる

* [count([predicate])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/count.md)  
上流から来たデータの数を返す

* [debounce(dueTime, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/debounce.md)   
[Demo](http://jsdo.it/38elements/rxjs-debounce-throttlefirst)   
throttle

* [debounceWithSelector(durationSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/throttlewithselector.md)      
durationSelectorはtimerを返す   

* [defaultIfEmpty([defaultValue])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/defaultifempty.md)      
emptyがきたらdefaultValueを返す

* [delay(dueTime, [scheduler])]()      
dueTimeはDateかnumber    
上流のデータが流れ始めるのをdueTime待つ

* [delayWithSelector([subscriptionDelay], delayDurationSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/delaywithselector.md)    
subscriptionDelayは最初にデータを流すまでの時間   
delayDurationSelectorはデータを流す間隔

* [dematerialize()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/dematerialize.md)      
[Demo](http://jsdo.it/38elements/rxjs-dematerialize)   

* [distinct([keySelector], [compare])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/distinct.md)      
[Demo](http://jsdo.it/38elements/rxjs-distinct)    
今までに流れてきたデータと異なるデータなら流す

* [distinctUntilChanged([keySelector], [comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/distinctuntilchanged.md)   
[Demo](http://jsdo.it/38elements/rxjs-distinctuntilchanged)     
1つ前に流れてきたデータと異なるデータなら流す

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

* [elementAt(index)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/elementat.md)    
sourceのindex番目のデータのみ流す

* [elementAtOrDefault(index, [defaultValue])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/elementatordefault.md)   
indexに値がない場合はdefaultValueを返す

* [every(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/every.md)   
上流から流れてくるデータが全てpredicateでtrueならtrueを返す  

* [expand(selector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/expand.md)    
[Demo](http://jsdo.it/38elements/rxjs-expand)   
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
[Demo](http://jsdo.it/38elements/rxjs-flatmap-and-concatall)    
selectManyと同じ     
複数のObservableを1つのObservableに統合する   
Observableをアンパックする   
selectorはiterable, Observable, promise, function   

* [flatMapObserver(onNext, onError, onCompleted, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/flatmapobserver.md)   
onNext, onCompleted, onErrorはObservableを返す   
Observableをアンパックする

* [flatMapLatest(selector, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/flatmaplatest.md)    
[Demo](http://jsdo.it/38elements/RxJS-flatMapLatest)   
selectorはObservableを返す関数   
新しいObservableが着た場合、古いObservableのデータは流さずに新しいObservableのデータを流す

* [groupBy(keySelector, [elementSelector], [comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/groupby.md)    
[Demo](http://jsdo.it/38elements/rxjs-groupby)   
上流から来たデータをグループ化してグループごとにObservableを作る

* [groupByUntil(keySelector, [elementSelector], durationSelector, [comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/groupbyuntil.md)     
[Demo](http://jsdo.it/38elements/rxjs-groupbyuntil)   
durationSelectorごとにグループの集計をリセットする

* [groupJoin(right, leftDurationSelector, rightDurationSelector, resultSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/groupjoin.md)  

* [ignoreElements()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/ignoreelements.md)   
[Demo](http://jsdo.it/38elements/rxjs-ignoreelements)   
上流から来たデータを無視する   
onCompleted()は呼ばれる

* [indexOf(searchElement, [fromIndex])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/indexof.md)    
searchElementがあるindexを返す

* [jortSort()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/jortsort.md)   
sourceがソート済みだった場合はtrueをそうでない場合はfalseを返す

* [jortSortUntil(other)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/jortsortuntil.md)     
otherからデータが来るまで受け取ったデータがソートされている場合はtrueをそうでない場合はfalseを返す

* [last([predicate], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/last.md)     
データの一番最後のデータを送る

* [lastOrDefault([predicate], [defaultValue], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/lastordefault.md)  
データの一番最後のデータを送る    
ない場合はdefaultValueを送る

* [let(func)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/let.md)   
[Demo](http://jsdo.it/38elements/rxjs-let)   
subscribeされる前にlet(func)の時点で1回だけ実行される   
funcはsourceを引数にとる   
funcはObservableを返す  

* [manySelect(selector, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/manyselect.md)    

* [max([comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/max.md)  
ソースの中の最大値を取得する

* [maxBy(keySelector, [comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/maxby.md)  
sourceをkeySelectorを通して得た値の最大値を返す   

* [merge(maxConcurrent | other)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/mergeproto.md)   
引数によって効果が変わる    
maxConcurrent: number 上流に複数のObservableがあった場合、その同時実行数     
other: 合流するObservable   

* [mergeAll()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/mergeall.md)  
上流の複数のObservableを1つにする

* [min([comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/min.md)  

* [minBy(keySelector, [comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/minby.md)    

* [multicast(subject | subjectSelector, [selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/multicast.md)   
[Demo](http://jsdo.it/38elements/rxjs-multicast)   
sourceがpublishされた状態になるconnetをしないとデータが流れない     
データはsubjectにもsourceにも流れる 

* [pairwise()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/pairwise.md)    
[n番目のデータ, n+1番目のデータ]を流す

* [partition(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/partition.md)  
predicateがtrueになるデータを流すObservableとfalseになるデータを流すObservableを持つ配列を返す

* [pausable(pauser)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/pausable.md)   
Demo  
pauser.onNext(false)でデータの流れを一時停止(もしくはsource.pause())   
pauser.onNext(true)でデータの流れを再開(もしくはsource.resume())   

* [pausableBuffered(pauser)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/pausablebuffered.md)    
Demo  
停止中に来たデータは保存されている

* [publish([selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/publish.md)   
connectしたらデータが流れる

* [publishValue([selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/publishvalue.md)     
最初に流れるデータを指定する   
connectしたらデータが流れる

* [publishLast([selector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/publishlast.md)     
最後のデータのみ流れる   
connectしたらデータが流れる

* [share()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/share.md)   
[Demo](http://jsdo.it/38elements/rxjs-share)    
後からsubscribeしたものにもsourceの送信状態を共有する

* [replay([selector], [bufferSize], [window], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/replay.md)    
bufferSize: 最後の何個目までのデータを繰り返すか   
window: 最後の何ミリ秒間に来たデータを繰り返すか   

* [shareReplay([bufferSize], [window], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/sharereplay.md)   
2回目のsubscribe時に1回目に記録したデータを流す    
bufferSize: 最後の何個目までのデータを繰り返すか   
window: 最後の何ミリ秒間に来たデータを繰り返すか   

* [shareValue(value)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/sharevalue.md)    
最初にvalueを送るshare

* [refCount()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/refcount.md)   
publishされたものでもsubscribeされたらconnect状態にする

* [reduce(accumulator, [seed])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/reduce.md)   

* [repeat(repeatCount)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/repeatproto.md)   
[Demo](http://jsdo.it/38elements/rxjs-repeat)   
sourceを繰り返す   
repeatCountがない場合は無限に繰り返す

* [retry([retryCount])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/retry.md)   
エラーが発生した場合、sourceの最初からやり直す    
retryCountがない場合は無限に繰り返す  

* [retryWhen(notifier)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/retrywhen.md)    

* [sample(interval | sampleObservable)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/sample.md)    
指定した時間間隔に来るデータを1つ返す

* [scan([seed], accumulator)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/scan.md)  
[Demo](http://jsdo.it/38elements/rxjs-scan)  
reduceの計算するたびに値を返す版    

* [sequenceEqual(second, [comparer])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/sequenceequal.md)    
sourceとsecondの流すデータが全て等しいならtrueを返す

* [single([predicate], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/single.md)  
sourceのデータが1つだけのときそれを流す  
2つ以上もしくはemptyのときはErrorになる

* [singleInstance()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/singleinstance.md)    

* [singleOrDefault(predicate, [defaultValue], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/singleordefault.md)   
sourceのデータが1つだけのときそれを流す  
該当する値がない場合はdefaultValueを返す。

* [skip(count)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/skip.md)    
sourceから流れてくるデータの最初のcount個を無視する

* [skipLast(count)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/skiplast.md)   
sourceから流れてくるデータの最後のcount個を無視する

* [skipLastWithTime(duration)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/skiplastwithtime.md)   
durationより後に来たデータを無視する

* [skipUntil(other)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/skipuntil.md)   
other: timer    
other msより前に来たデータを無視する

* [skipUntilWithTime(startTime, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/skipuntilwithtime.md)   
startTime: ms or Date    
startTimeより前に来たデータを無視する

* [skipWhile(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/skipwhile.md)   
predicateがtrueを返す間データを無視する   

* [some([predicate], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/any.md)    

* [spawn(fn)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/spawn.md)    
[Demo](http://jsdo.it/38elements/rxjs-rx-spawn)   

* [startWith([scheduler] ...args)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/startwith.md)   
[Demo](http://jsdo.it/38elements/rxjs-startwith)   
argsをObservableの先頭に追加する    

* [subscribe([observer] | [onNext], [onError], [onCompleted], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribe.md)   

* [subscribeOnNext(onNext, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribeonnext.md)   
[Demo](http://jsdo.it/38elements/rxjs-scheduler)    

* [subscribeOnError(onError, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribeonerror.md)   

* [subscribeOnCompleted(onCompleted, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribeoncompleted.md)   

* [subscribeOn(scheduler)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribeon.md)   

* [sum([keySelector], [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/sum.md)   
流れてきたデータの合計を返す

* [switch()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/switch.md)   
[Demo](http://jsdo.it/38elements/rxjs-switch)   
直近に流れてきたObservableに切り返る

* [take(count, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/take.md)   
データを最初からcount個だけ流す

* [takeLast(count)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/takelast.md)   
データを最後からcount個だけ流す

* [takeLastBuffer(count)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/takelastbuffer.md)   
データを最後からcount個だけ取得して配列にする    

* [takeLastBufferWithTime(duration, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/takelastbufferwithtime.md)   
最後のdurationミリ秒間に流れてきたデータを配列にして流す

* [takeLastWithTime(duration, [timeScheduler], [loopScheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/takelastwithtime.md)   
最後のdurationミリ秒間に流れてきたデータを流す

* [takeUntil(other)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/takeuntil.md)   
otherが流れ始めるまでに来たデータを流す

* [takeUntilWithTime(other)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/takeuntilwithtime.md)   

* [takeWhile(predicate, [thisArg])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/takewhile.md)   
predicateがfalseになる前に来た値を流す

* [throttleFirst(windowDuration, [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/throttlefirst.md)   
[Demo](http://jsdo.it/38elements/rxjs-debounce-throttlefirst)   
前の値と最初にwindowDuration以上時間があいたものを返す。

* [timeInterval([scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/timeinterval.md)   
流れてくるデータを\{value: value, interval: interval\}形式に変換する

* [timeout(dueTime, [other], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/timeout.md)   
一つ前に流れてきたデータからdueTime以内にデータが流れてこない場合はotherを流すかエラーになる

* [timeoutWithSelector([firstTimeout], [timeoutDurationSelector], [other])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/timeoutwithselector.md)   
firstTimeoutがタイムアウトしたときにtimeoutDuration待ってデータが来ない場合はotherを流す

* [timestamp([scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/timestamp.md)   
流れてくるデータを\{value: value, timestamp: timestamp\}形式に変換する

* [toArray()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/toarray.md)   
ObservableをArrayにする  

* [toSet()](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/toset.md)   
ObservableをSetにする  

* [toMap(keySelector, [elementSelector])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/tomap.md)   
ObservableをMapにする  

* [transduce(transducer)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/transduce.md)   
[transducers.jsのデモ](http://jsdo.it/38elements/transducersjs-1)      


* [window(windowClosingSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/window.md#with-window-closing-selector)   


* [window(windowOpenings, windowClosingSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/window.md#with-window-opening-and-window-closing-selector)      


* [window(windowBoundaries)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/window.md#with-boundaries)   


* [windowWithCount(count, [skip])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/windowwithcount.md)   


* [withLatestFrom(...args, resultSelector)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/withlatestfrom.md)   
argsはObservable   
データが来たときデータと最新のargsのデータをresultSelectorに送る   








































