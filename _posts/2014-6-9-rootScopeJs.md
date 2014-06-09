---
layout: posts
title: rootScope.jsメモ 
---
AngularJsの[rootScope.js](https://github.com/angular/angular.js/blob/5224499bcdab670a882c6119e2d9192b84aa9047/src/ng/rootScope.js)に関するメモ     
<br/>
#### Scope::$new
isolateなscopeは共有するために$$asyncQueue、$$postDigestQueueを代入している。   
子scopeはthis.$$childScopeClass.prototype = thisすることで親scopeを代入して共有している。   
親scopeと子scopeのデータ共有がthis.$$childScopeClass.prototype = thisで行われている。   
共有されないものが$$childScopeClassの属性になっている。  
