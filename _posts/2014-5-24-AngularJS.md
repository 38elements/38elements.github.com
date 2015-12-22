---
layout: posts
title: AngularJSメモ
---
[AngularJS](https://github.com/angular/angular.js)に関するメモ 
<br/>
  
* ng-classでclass名に-を含んだものを指定する際は''で囲む。  
ng-class="{'foo-bar': ture}"  
  
* $inputのvalidationは<formのname属性>.<inputのname属性>.$validの形式で利用する。      
[form](https://docs.angularjs.org/guide/forms)   
[form](https://docs.angularjs.org/api/ng/directive/form)   
[input](https://docs.angularjs.org/api/ng/directive/input)   
[NgModelController](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController)
  
* <span style="color:red;">[$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)にあるwhenメソッドで指定する第2引数のresolve属性(object)について  
resolve属性のキーはcontrollerに渡されるserivice名になる。   
値が関数の場合はserviceがinjectedされてその関数を実行する。  
関数の戻り値が[promise](https://docs.angularjs.org/api/ng/service/$q)の場合は値を送られるまでcontrollerは生成されない。</span>

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

* [event](https://github.com/angular/angular.js/blob/aa268560064e5875bd471da3f7d1ebc2f9e6b3b7/src/ng/rootScope.js)について      
$onのコールバック関数の第1引数にはイベントオブジェクトが入る。  
$onのコールバック関数で$emitや$broadcastから変数を受け取ることができる。   
$emitは親要素にイベントを伝播する。   
$broadcastは子要素にイベントを伝播する。  
event.targetScope: イベントの発生もとのscope  
event.currentScope: 現在の処理を行っているscope   
event.name: イベント名  
event.stopPropagation: $emitでイベントが発生した場合、イベントの親要素への伝播を止める。   
event.preventDefault(): event.defaultPreventedをtrueにする。   
event.defaultPrevented: event.preventDefault()がtrueになる。
  
* [provider](https://docs.angularjs.org/guide/providers)について      
providerでserviceオブジェクトを生成する際は$getが呼ばれる。    
$getはサービスを返す。   
[provider](https://docs.angularjs.org/api/ng/type/angular.Module)メソッドを利用して定義する。   
configでは<service名>Providerでinjectする。   
configではproviderオブジェクトの設定を行う。
   
* 独立したscopeを持つディレクティブが付与されている要素のngModelに対して  
値を渡す際は親要素のcontrollerのスコープが適用できるか($parentを付けるべきか)を  
考慮する。  

* [mock.inject](https://docs.angularjs.org/api/ngMock/function/angular.mock.inject)の引数を\_で囲んでも\_は削除された状態になる。   

* ng-repeatで利用する配列が[1, 2, 3, 1]のように同じ値が複数存在している場合    
ng-repeat="value in [1, 2, 3, 1] track by $index"のように      
[track by $index](https://docs.angularjs.org/error/ngRepeat/dupes)を付ける必要がある。  

* One-time binding [*](https://docs.angularjs.org/guide/expression)    

* Domのevent handlerからeventオブジェクトを取得する際は$eventをhandlerの引数にする [*](https://docs.angularjs.org/guide/expression)   

* [angular.module(name, [requires], [configFn]);](https://docs.angularjs.org/api/ng/function/angular.module)   
requiresがあれば新しいmoduleを作成する。       
requiresがない場合は既存のmoduleを利用する。   
moduleを作成せずに利用するとエラーになる。   

* angular.module(name, [requires], [configFn])のrequiresを動的に設定する方法                     
```
let app = angular.module("app", []);
app.requires.push("fooModule");
```

* $httpBackend [*](https://docs.angularjs.org/api/ngMock/service/$httpBackend)       
下記を追加することを忘れない      
```
afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
});
```
[when](https://docs.angularjs.org/api/ngMock/service/$httpBackend#when)と[expect](https://docs.angularjs.org/api/ngMock/service/$httpBackend#expect)                

* directiveのrequire順番にlinkのcontrollersにコントローラが入る   
^は親のディレクティブ   
何もなしはfooディレクティブとその属性  
?は該当するディレクディブが存在しなくてもエラーにならない   
 {% highlight html %}
// fooディレクディブの定義
require: ['foo', 'ngModel'],   
link: function(scope, element, attrs, ctrls) {   
    var fooCtrl = ctrls[0], ngModelCtrl = ctrls[1];   
}   
 {% endhighlight %}

* $httpのtimeoutでキャンセルした場合、respose.stateは-1になる      

* input要素に付与される属性型(A)の[ディレクティブ](https://docs.angularjs.org/api/ng/service/$compile)からinput要素のmodelを更新したい場合はrequireに`[ngModel]`を指定してlinkのctrls[0]から[ngModelController](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController)を取得する。ngModelController.$setViewValue(value)を実行する。   
  
* 数字をカンマ区切りにするフィルター [*](https://docs.angularjs.org/api/ng/filter/number)   

* data url schemeをするには以下の処理を加える     
`$compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https|data):/);`   
download="ファイル名"をHTML要素に付与する      
  
* [ui-routerメモ](/2015/05/24/ui-router.html)




