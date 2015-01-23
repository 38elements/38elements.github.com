---
layout: posts
title: RxJS Subjectメモ
---

#### [Subject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md)   
   
#### [ReplaySubject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md)    
* [ReplaySubject([bufferSize], [windowSize], [scheduler])](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md#rxreplaysubjectbuffersize-windowsize-scheduler)     
bufferSize: データを一度に保存しておく個数の上限(takeのようなもの)   
windowSize: データを保存して破棄する時間の間隔(debounceのようなもの)    

#### [BehaviorSubject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md)    
* [BehaviorSubject(initialValue)](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md#rxbehaviorsubjectinitialvalue)   
[Demo](http://jsdo.it/38elements/rxjs-behaviorsubject)   

#### [AsyncSubject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/asyncsubject.md)       

