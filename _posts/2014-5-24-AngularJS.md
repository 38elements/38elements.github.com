---
layout: posts
title: AngularJSメモ
---
[AngularJS](https://github.com/angular/angular.js)に関するメモ 
<br/>
  
* ng-classでclass名に-を含んだものを指定する際は''で囲む。
  
* $inputのvalidationは<formのname属性>.<inputのname属性>.$validの形式で利用する。
  
* [$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)にあるwhenメソッドで指定する第2引数のresolve属性(object)について  
resolve属性のキーはcontrollerに渡されるserivice名になる。   
値が関数の場合はserviceがinjectedされてその関数を実行する。  
関数の戻り値が[promise](https://docs.angularjs.org/api/ng/service/$q)の場合は値を送られるまでcontrollerは生成されない。

