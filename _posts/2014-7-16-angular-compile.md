---
layout: posts
title: compile.jsメモ 
---
AngularJsの[compile.js](https://github.com/angular/angular.js/blob/master/src/ng/compile.js)を読んだ際のメモ   
<br/>
#### $CompileProvider($provide, $$sanitizeUriProvider)   
{% highlight javascript %}
var hasDirectives = {},
    Suffix = 'Directive',
    COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
    CLASS_DIRECTIVE_REGEXP = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
    ALL_OR_NOTHING_ATTRS = makeMap('ngSrc,ngSrcset,src,srcset');
{% endhighlight %}   
* function registerDirective(name, directiveFactory)   
$compileProvider.directive(name, directiveFactory)の実体である。   
nameはcamel case化したものである。   
providerCacheにdirectiveを生成する関数をname + "Directive"というキー名で登録する。    
hasDirectives[name]が存在していない場合、directiveを生成する関数を登録する。
  
* aHrefSanitizationWhitelist(regexp)    
aタグのhrefのサニタイズに利用する正規表現を変更する。   
  
* imgSrcSanitizationWhitelist(regexp)    
imgタグのsrcのサニタイズに利用する正規表現を変更する。   
