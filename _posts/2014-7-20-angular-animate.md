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
#### $animateProvider.register(name, factory)      
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
<br/>
#### $animateProvider.classNameFilter(expression)     
expressionはRegExpである必要がある。RegExpでない場合はnullが$$classNameFilterに代入される。    
$$classNameFilterの内容をexpressionに書き換える。   
$$classNameFilterを返す。    
<br/>
#### $animateProvider.$get($timeout, $$asyncCallback)        
{% highlight javascript %}
function async(fn) {
    fn && $$asyncCallback(fn);
}
{% endhighlight %}   
<br/>
#### $animate.enter(element, parent, after, done)     
afterが指定された場合elementをafter要素の後ろに置く。    
parentが指定された場合elementをparent要素の最初の子要素にする。    
doneは処理が終了したときに実行される。     
<br/>
#### $animate.leave(element, done)     
elementを削除する。    
doneは処理が終了したときに実行される    
<br/>
#### $animate.move(element, parent, after, done)     
$animate.enter(element, parent, after, done)と同じ   

