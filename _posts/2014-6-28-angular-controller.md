---
layout: posts
title: controller.jsメモ 
---
AngularJsの[controller.js](https://github.com/angular/angular.js/blob/master/src/ng/controller.js)を読んだ際のメモ  
[controllerSpec.js](https://github.com/angular/angular.js/blob/master/test/ng/controllerSpec.js)   
<br/>  
#### $ControllerProvider()
Controllerを生成するサービスを生成する。    
registerメソッドを通じてControllerをcontrollersに登録する。  
<br/>  
#### register(name, constructor)   
angular.Module.controller(name, constructor);で[invokeQueue](https://github.com/angular/angular.js/blob/master/src/loader.js)に登録される。     
[injector.js](https://github.com/angular/angular.js/blob/master/src/auto/injector.js)のloadModules(modulesToLoad)内のrunInvokeQueue(queue)で実行される。          
<br/>  
#### function(expression, locals)
$controllerの実体  
Controllerサービスを実装している。  
[compile.js](https://github.com/angular/angular.js/blob/345ed5d1c73f38a6032c4c2b869742502da807ea/src/ng/compile.js)で下記のように使用されている。
{% highlight javascript %}
//$controller('FooCtrl', {$scope:scope});
controllerInstance = $controller(controller, locals);
{% endhighlight %}   
registerで登録したcontstructorを$injector::instantiate(Type, locals, serviceName)に渡す。   
その戻り値をreturnする。   

