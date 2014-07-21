---
layout: posts
title: animate.jsメモ 
---
AngularJSの[animate.js](https://github.com/angular/angular.js/blob/master/src/ng/animate.js)を読んだ際のメモ  
[animateSpec.js](https://github.com/angular/angular.js/blob/master/test/ng/animateSpec.js)   
<br/>
#### $AnimateProvider   
$animateサービスのプロバイダー   
<br/>
#### $AnimateProvider.register(name, factory)      
アニメーションを実行する関数のプロバイダーを登録する。     
nameは.から始まる文字列   
var key = name + '-animation';   
this.$$selectors[name.substr(1)] = key;  
$provide.factory(key, factory);    
アニメーションを実行する関数のプロバイダーは以下の形式のデータを返す。   
{% highlight javascript %}
{
    //element: アニメーションの実行対象
    //doneFunction: アニメーションが終わったときに実行する
    //cancellationFunction: アニメーションをキャンセルする関数
    eventFn: function(element, doneFunction) {
        return function cancellationFunction() {
        }
    }
}
{% endhighlight %}   

