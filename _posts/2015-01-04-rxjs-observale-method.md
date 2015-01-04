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


