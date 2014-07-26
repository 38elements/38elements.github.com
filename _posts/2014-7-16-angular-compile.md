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


<br/>
#### $CompileProvider::$get()        
<br/>
#### Attributes(element, attr)   
<br/>
#### Attributes::$normalize(name)  
nameをcamel caseに変換する。    
<br/>
#### Attributes::$addClass(classVal)     
コンストラクタの引数のelementのclass属性にclassValを追加する。       
<br/>
#### Attributes::$removeClass(classVal)     
コンストラクタの引数のelementのclass属性にclassValを削除する。       
<br/>
#### Attributes::$updateClass(newClasses, oldClasses)     
コンストラクタの引数のelementのclass属性にnewClassesとoldClassesの差分を反映する。        
<br/>
#### Attributes::$set(key, value, writeAttr, attrName)     
key: directive($$element)にある属性型のdirectiveのcamel case化した名前や     
     directiveのscopeに存在しているモデル名 (ex: ngIf)    
value: keyの値 (ex: "foo_id != 0")   
writeAttr: directive($$element)にattrName=valueを属性として書き込むか (デフォルトはtrue)         
attrName: directiveに書き込まれる属性名 (デフォルトはkeyをsnake caseに変換したもの)


