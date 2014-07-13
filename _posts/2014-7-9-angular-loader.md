---
layout: posts
title: loader.jsメモ 
---
AngularJsの[loader.js](https://github.com/angular/angular.js/blob/master/src/loader.js)を読んだ際のメモ  
[loader.suffix](https://github.com/angular/angular.js/blob/master/src/loader.suffix)   
<br/>
#### setupModuleLoader(window)
loader.suffixでsetupModuleLoader(window);が実行される。     
window.angularオブジェクトを作成する。  
angular.module(name, requires, configFn)を生成する。    
[angular.module(name, requires, configFn)](https://docs.angularjs.org/api/ng/function/angular.module)を返す。   
下記の関数を多用している。
{% highlight javascript %}
function ensure(obj, name, factory) {
    return obj[name] || (obj[name] = factory());
}
{% endhighlight %}   
<br/>
#### module(name, requires, configFn)
[angular.module](https://docs.angularjs.org/api/ng/function/angular.module)の実体   
[configFn](https://docs.angularjs.org/api/ng/type/angular.Module)はmodule.config()と同じ    
requiresが存在するとmodulesのキャッシュをクリアする。    
moduleInstance (ensure(modules, name, function() {)を返す。  
moduleInstanceのインスタンスメソッドを以下のように登録している。
{% highlight javascript %}
controller: invokeLater('$controllerProvider', 'register'),
value: invokeLater('$provide', 'value'),
constant: invokeLater('$provide', 'constant', 'unshift')
{% endhighlight %}   
<br/>
#### invokeLater(provider, method, insertMethod, queue)     
moduleのインスタンスメソッドがinvokeQueueにロードするデータを登録する関数を返す。  
{% highlight javascript %}
myModule.value('appName', 'MyApp');
{% endhighlight %}   
{% highlight javascript %}
function invokeLater(provider, method, insertMethod, queue) {
    if (!queue) queue = invokeQueue;
    return function() {
        // 上の例ではargumentsは['appName', 'MyApp']
        queue[insertMethod || 'push']([provider, method, arguments]);
        return moduleInstance;
    };
}
{% endhighlight %}   
invokeQueueは[injector.js](https://github.com/angular/angular.js/blob/master/src/auto/injector.js)のloadModules(modulesToLoad)内のrunInvokeQueue(queue)で実行される。    
{% highlight javascript %}
function runInvokeQueue(queue) {
    var i, ii;
    for(i = 0, ii = queue.length; i < ii; i++) {
        var invokeArgs = queue[i],
            provider = providerInjector.get(invokeArgs[0]);

        // myModule.value('appName', 'MyApp');の場合は
        // value: invokeLater('$provide', 'value'),なので
        // $provide.value('appName', 'MyApp') 
        provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
    }
}

try {
    if (isString(module)) {
        moduleFn = angularModule(module);
        runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
        runInvokeQueue(moduleFn._invokeQueue);
        //var config = invokeLater('$injector', 'invoke', 'push', configBlocks);
        runInvokeQueue(moduleFn._configBlocks);
    } else if (isFunction(module)) {
{% endhighlight %}   


