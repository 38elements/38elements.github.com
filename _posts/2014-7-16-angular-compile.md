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
function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective,
                        previousCompileContext)を返す。   
{% highlight javascript %}
var startSymbol = $interpolate.startSymbol(),
    endSymbol = $interpolate.endSymbol(),
    denormalizeTemplate = (startSymbol == '{{' || endSymbol  == '}}')
        ? identity
        : function denormalizeTemplate(template) {
          return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
    },
    NG_ATTR_BINDING = /^ngAttr[A-Z]/;
{% endhighlight %}   
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
attrName: directive($$element)に書き込まれる属性名 (デフォルトはkeyをsnake caseに変換したもの)
{% highlight javascript %}
// していることの概要
// Attributesインスタンスのkey属性にvalueを保存する
this[key] = value;    
// $attrにkeyをキーとしてsnake caseにして保存する
this.$attr[key] = attrName = snake_case(key, '-');
// elementの属性に値を書き込む
this.$$element.attr(attrName, value);
// $$observersに登録されている関数を実行する。
observer = key
var $$observers = this.$$observers;
$$observers && forEach($$observers[observer], function(fn) {
    try {
        fn(value);
    } catch (e) {
        $exceptionHandler(e);
    }
});
{% endhighlight %}   
#### Attributes::$observe(key, fn)   
key: directive($$element)にある属性型のdirectiveのcamel case化した名前や     
     directiveのscopeに存在しているモデル名 (ex: ngIf)    
fn: $$observersに格納される関数です。keyの値が変更されるたびに実行される。    
$$observersにfnを格納する。     
$$observersからfnを削除する関数を返す。    
{% highlight javascript %}
$rootScope.$evalAsync(function() {
    if (!listeners.$$inter) {
        // no one registered attribute interpolation function, so lets call it manually
        fn(attrs[key]);
    }
});
{% endhighlight %}   
<br />
####  compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext)
$compile.$get()の戻り値      
$compileNodesをjqLiteオブジェクトにする。    
$compileNodesの要素の中で空文字でないTextNodeは<span>でwrappする。     
{% highlight javascript %}
// publicLinkFn内で利用する
var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes,
                                       maxPriority, ignoreDirective, previousCompileContext);
{% endhighlight %}   
$compileNodesのclass属性にng-scopeを追加する。           
これを返すfunction publicLinkFn(scope, cloneConnectFn, transcludeControllers, parentBoundTranscludeFn)
<br />
#### compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext)    
compileで利用されるcompositeLinkFnを返す。     
nodeListのnodeごとにAttributesインスタンスを生成する。    
nodeListのnodeごとにcollectDirectives()を実行する。    
<br/>
#### collectDirectives(node, directives, attrs, maxPriority, ignoreDirective)    
nodeのnodeTypeがElement(1)の場合     
以下をチェックして該当した場合、 directivesに加える。

* node自身がdirective
* nodeの属性がdirective
* nodeのclassがdirective
  

nodeのnodeTypeがText Node(3)の場合     
addTextInterpolateDirective(directives, text)を実行する    
<br/>
nodeのnodeTypeがComment(8)の場合     
OMMENT_DIRECTIVE_REGEXPにマッチした場合、addDirective()を実行する 



