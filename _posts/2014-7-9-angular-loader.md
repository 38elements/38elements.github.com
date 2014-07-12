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
angular.module(name, requires, configFn)を返す。   
<br/>
#### module(name, requires, configFn)
angular.moduleの実体   

