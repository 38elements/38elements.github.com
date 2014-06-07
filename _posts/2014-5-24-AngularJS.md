---
layout: posts
title: AngularJSメモ
---
[AngularJS](https://github.com/angular/angular.js)に関するメモ 
<br/>
  
* ng-classでclass名に-を含んだものを指定する際は''で囲む。  
ng-class="{'foo-bar': ture}"  
  
* $inputのvalidationは<formのname属性>.<inputのname属性>.$validの形式で利用する。
  
* [$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)にあるwhenメソッドで指定する第2引数のresolve属性(object)について  
resolve属性のキーはcontrollerに渡されるserivice名になる。   
値が関数の場合はserviceがinjectedされてその関数を実行する。  
関数の戻り値が[promise](https://docs.angularjs.org/api/ng/service/$q)の場合は値を送られるまでcontrollerは生成されない。

* $routeProviderで指定するテンプレートにはng-controllerの指定は不要です。

* [jqLite](https://github.com/angular/angular.js/blob/1ec6d551bd80784f22691c6989aac1722b98cd20/src/jqLite.js)で実装されていないAngularJS固有のメソッド  
controller(name):  
当該要素もしくは親要素のコントローラを返す。nameに当該要素に適用されているディレクティブ名を  
指定した場合はディレクティブのコントローラを返す。   
injector():   
当該要素もしくは親要素のinjectorを返す。   
scope():    
当該要素もしくは親要素のscopeを返す。  
isolateScope():  
当該要素がディレクティブを含む。ディレクティブが独立したscopeを持っている場合そのscopeを返す。   
inheritedData():  
data()と同じ。該当要素にデータがない場合は親要素をたどってデータを取得する。 
