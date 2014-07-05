---
layout: posts
title: injector.jsメモ 
---
AngularJsの[injector.js](https://github.com/angular/angular.js/blob/master/src/auto/injector.js)を読んだ際のメモ  
[injectorSpec.js](https://github.com/angular/angular.js/blob/master/test/auto/injectorSpec.js)   
<br/>    
#### $provide  
{% highlight javascript %}
$provide: {
    provider: supportObject(provider),
    factory: supportObject(factory),
    service: supportObject(service),
    value: supportObject(value),
    constant: supportObject(constant),
    decorator: decorator
  }
{% endhighlight %}   
providerからserviceを取得する際は$get属性を使用する。  
$get属性の様式   
{% highlight javascript %}
a.$get = function(a,b,c) {};
a.$get = ["a", "b", "c", function(a, b, c) {}];
{% endhighlight %}   
$getはinstanceInjectorのfactory関数内で利用される。  
{% highlight javascript %}
instanceCache = {},
instanceInjector = (instanceCache.$injector =
  createInternalInjector(instanceCache, function(servicename) {
    var provider = providerInjector.get(servicename + providerSuffix);
    return instanceInjector.invoke(provider.$get, provider, undefined, servicename);
  }, strictDi));
{% endhighlight %}   
* decoratorの$delegateはwrapper対象のserviceインスタンス      

* module.service(name, constructor), module.factory(name, factoryFn), module.value(name, value)、module.provider(name, provider_)はserviceプロバイダーを返す。    

* module.service(name, constructor), module.factory(name, factoryFn), module.value(name, value)はmodule.provider(name, provider_)を内部で利用する際にmodule.provider内でDIする。

* module.service(name, constructor), module.factory(name, factoryFn), module.value(name, value)はmodule.provider(name, provider_)を内部で利用する際にserviceプロバイダーをproviderCacheに格納する。   

<br/>    
#### anonFn(fn)  
{% highlight javascript %}
anonFn(function(a,b,c) {var a = b + 1;});
// "function(a,b,c)"
anonFn("foo");
// "fn"
{% endhighlight %}   
<br/>    
#### annotate(fn, strictDi, name)
{% highlight javascript %}
var a = angular.injector();
a.annotate(function(aa, bb, _cc_) {});
// ["aa", "bb", "cc"]
a.annotate(["a", "b", "c", function(a,b,c){}]);
// ["a", "b", "c"]
var b = function(){};
b.$inject = ["a", "b", "c"];
a.annotate(b);
// ["a", "b", "c"]
{% endhighlight %}   
<br/>    
#### createInternalInjector(cache, factory)   
下記でのみ使用されている。    
{% highlight javascript %}
      providerCache = {
        $provide: {
            provider: supportObject(provider),
            factory: supportObject(factory),
            service: supportObject(service),
            value: supportObject(value),
            constant: supportObject(constant),
            decorator: decorator
          }
      },
      providerInjector = (providerCache.$injector =
          createInternalInjector(providerCache, function() {
            throw $injectorMinErr('unpr', "Unknown provider: {0}", path.join(' <- '));
          }, strictDi)),
      instanceCache = {},
      instanceInjector = (instanceCache.$injector =
          createInternalInjector(instanceCache, function(servicename) {
            var provider = providerInjector.get(servicename + providerSuffix);
            return instanceInjector.invoke(provider.$get, provider, undefined, servicename);
          }, strictDi));
{% endhighlight %}   
<br/>    
#### $injector::getService(serviceName)  
$injector::get(getService)である。
createInternalInjector内にある。    
serviceインスタンスを取得する場合は下記のfactory関数から取得したserviceインスタンスを   
instanceCacheに格納している。    
{% highlight javascript %}
function(servicename) {
    var provider = providerInjector.get(servicename + providerSuffix);
    return instanceInjector.invoke(provider.$get, provider, undefined, servicename);
}
{% endhighlight %}   
serviceプロバイダーを取得する場合factoryは呼ばれない。    
module.service(name, constructor), module.factory(name, factoryFn), module.value(name, value)は実行時に   
該当プロバイダーがproviderCacheに格納されている。
{% highlight javascript %}
return providerCache[name + providerSuffix] = provider_;
{% endhighlight %}   

<br/>    
#### $injector::invoke(fn, self, locals, serviceName)  
createInternalInjector内にある。    
DIを行う。    
selfを主語にしてfnを実行する。そのときにargsにDIするサービスオブジェクトを渡す。     
return fn.apply(self, args);   
annotateでDIを行うサービスの一覧を取得する。    
以下の部分でサービスを取得する。  
localsが優先     
{% highlight javascript %}
args.push(
    locals && locals.hasOwnProperty(key)
    ? locals[key]
    : getService(key)
);
{% endhighlight %}   
fnはannotateに渡すfnと同じ形式で必ずしもfunctionである必要はない。    
fn内のfunctionを実行した戻り値を返す。   
fnが配列の場合はfnの最後の要素をfnに代入する。    
return fn.apply(self, args);  
<br/>    
#### $injector::instantiate(Type, locals, serviceName)    
Typeからコンストラクタになる関数を取り出す。     
取り出した関数のprototypeを共有した空クラスのinstanceを生成する。  
取り出した関数と空クラスのinstanceをinvokeに渡す。  
invokeの戻り値がオブジェクトもしくは関数の場合、戻り値を返す。   
それ以外の場合はinstanceを返す。   
<br/>    
#### loadModules(modulesToLoad)  

* runInvokeQueue(queue)  
$provideサービスでserviceプロバイダーオブジェクトをproviderCacheに登録する。   
invokeとかもする。   
$controllerProviderのregisterを実行する。

loadedModules = new HashMap([], true)   
modulesToLoadはarrayである。      
各modulesToLoadの要素に対して以下の処理を行う。   

* stringの場合      
moduleFn = angularModule(module);している。    
(angularModule = [setupModuleLoader](https://github.com/angular/angular.js/blob/master/src/loader.js)(window);でangularModuleを定義している。    
angularModuleはangular.moduleと同じでmodule(name, requires, configFn))   
{% highlight javascript %}
runInvokeQueue(moduleFn._invokeQueue);
runInvokeQueue(moduleFn._configBlocks);
{% endhighlight %}   
* functionの場合       

* arrayの場合   

* その他の場合   










