---
layout: posts
title: compile.jsメモ 
---
AngularJSの[compile.js](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js)を読んだ際のメモ   
<br/>
priorityは高いものから順番に実行されれる。   
terminalがtrueだとそのpriorityで終わり。    
<br/>
#### $CompileProvider($provide, $$sanitizeUriProvider)   
{% highlight javascript %}
var hasDirectives = {},
    Suffix = 'Directive',
    COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
    CLASS_DIRECTIVE_REGEXP = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
    ALL_OR_NOTHING_ATTRS = makeMap('ngSrc,ngSrcset,src,srcset');
{% endhighlight %}   
#### [function registerDirective(name, directiveFactory)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L563)   
{% highlight javascript %}
// directiveFactoryの例
var inputDirective = ['$browser', '$sniffer', '$filter', function($browser, $sniffer, $filter) {
  return {
    restrict: 'E',
    require: ['?ngModel'],
    link: function(scope, element, attr, ctrls) {
      if (ctrls[0]) {
        (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrls[0], $sniffer,
                                                            $browser, $filter);
      }
    }
  };
}];
{% endhighlight %}   
$compileProvider.directive(name, directiveFactory)の実体である。   
nameはcamel case化したものである。   
providerCacheにdirectiveを生成する関数をname + "Directive"というキー名で登録する。    
hasDirectives[name]が存在していない場合、directiveFactoryをhasDirectives[name]に登録する。
  
* aHrefSanitizationWhitelist(regexp)    
aタグのhrefのサニタイズに利用する正規表現を変更する。   
  
* imgSrcSanitizationWhitelist(regexp)    
imgタグのsrcのサニタイズに利用する正規表現を変更する。


<br/>
#### [$CompileProvider::$get()](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L660)        
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
#### [Attributes(element, attr)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L666)   
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
####  [compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L854)
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
#### [compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L916)    
[compileで利用されるcompositeLinkFnを返す。](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L868)     
nodeListのnodeごとにAttributesインスタンスを生成する。    
nodeListのnodeごとにcollectDirectives()を実行する。    
nodeListのnodeごとにaddDirectivesToNode()を実行する。    
nodeLinkFn.scopeがtrue（directive.scope === true）なら対象の要素のclassに'ng-scope'を加える。    
<br/>
#### [collectDirectives(node, directives, attrs, maxPriority, ignoreDirective)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1031)    
[compileNodes()で利用されている。](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L925)   
nodeに存在しているdirectiveを見つける。      
そのdirectiveのデータを生成する。      
directiveのデータをdirectivesに格納する。    
directivesを返す。    
     
nodeのnodeTypeがElement(1)の場合     
以下をチェックして該当した場合、 directivesに加える。

* node自身がdirective
* nodeの属性がdirective
* nodeのclassがdirective

要素の属性データを登録する。     
{% highlight javascript %}
// attrsMapはattrs.$attrのこと      
// nName: "ngRepeat"  
// name: "ng-repeat"  
// value: "e in entries"
attrsMap[nName] = name;
attrs[nName] = value = trim(attr.value);
{% endhighlight %}   

nodeのnodeTypeがText Node(3)の場合     
addTextInterpolateDirective(directives, text)を実行する    
<br/>
nodeのnodeTypeがComment(8)の場合     
COMMENT_DIRECTIVE_REGEXPにマッチした場合、addDirective()を実行する     
byPriorityでpriorityを降順にソートする。
{% highlight javascript %}
//directivesの値の例
[
    {
        compile: function () {return value;},
        index: 0,
        link: function (scope, $element, attr, ctrl, $transclude) { },
        name: "ngView",
        priority: 400,
        require: undefined,
        restrict: "ECA",
        terminal: true,
        transclude: "element"
    },
    {
        compile: function () {return value;}
        index: 1
        link: function (scope, $element) {}
        name: "ngView"
        priority: -400
        require: undefined
        restrict: "ECA"
    },
]
{% endhighlight %}   
<br />
####  [addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1654)
[collectDirectives()内で呼ばれる。](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1031)     
tDirectivesにdirectiveのデータを格納する。    
hasDirectives($compileProvider.directiveで登録)にnameキーが存在した場合、    
directives = $injector.get(name + Suffix)    
directivesの各データごとにdirectiveがAでstart属性とend属性が設定されていた場合、それらをdirective.$$startとdirective.$$endに付与する。       
tDirectivesにdirectiveのデータを格納する。    
<br />
#### [applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1190)     
jqCollectionはroot of compile tree      
nodeLinkFnを返す。             
[compileNodes()内で利用しています。](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L928)
{% highlight javascript %}
nodeLinkFn = (directives.length)
            ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement,
              null, [], [], previousCompileContext)
                          : null;
{% endhighlight %}
要素に存在しているdirectiveごとに以下の処理をする。   
directiveValueには一時的に使用する値を代入する。     

* directive.$$startがある場合は範囲内にあるnodeを取得して$compileNodeに格納する。
* terminalPriority > directive.priorityならループを抜ける。  
* directive.scopeに対する処理   
1.directive.templateUrlが設定されていない状態でdirective.scopeがobjectの場合   
newIsolateScopeDirective = directiveとする。   
2.newScopeDirective = newScopeDirective || directive;  
* directiveName = directive.name;   
* !directive.templateUrl && directive.controllerに対する処理    
1.controllerDirectives = controllerDirectives || {};    
2.controllerDirectives[directiveName] = directive;
* directive.transcludeに対する処理   
1.directive.transclude === "element"    
hasElementTranscludeDirective = true;
  後で書く    
2.directive.transclude == trueのとき   
  $template = jqLite(jqLiteClone(compileNode)).contents();   
  $compileNode.empty(); // clear contents  
  childTranscludeFn = compile($template, transcludeFn);    
* directive.templateに対する処理   
1.directive.templateが関数の場合はdirective.template($compileNode, templateAttrs)を実行する。
その戻り値をテンプレートとする。文字列の場合はdirective.templateをテンプレートとする。
2.denormalizeTemplate(テンプレート)
テンプレートの"\{\{" "\}\}"が別の文字列に設定されていた場合、"\{\{" "\}\}"をそれらと変換する。    
3.directive.replaceが存在しない場合、$compileNodeにテンプレートを挿入する。
* [directive.replaceに対する処理](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1311)   
  このreplaceの処理はdirective.templateに対する処理で、directive.templateUrlに対応する処理はcompileTemplateUrlで実行される。     
  テンプレートをjqLiteオブジェクトに変換したものを$templateに代入する。    
  $compileNodeを$template[0]で置き換える。   
  $template[0]内にあるdirectiveをcollectDirectivesで取得する。    
  directivesで処理を行っているdirectiveの直後に$template[0]内にあるdirectiveを格納する。      
  $template[0]内の各Nodeの属性を現在処理中のdirectiveの属性データに統合する。
* [directive.templateUrlに対する処理](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1350)    
  [compileTemplateUrl()](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1741)を実行して[nodeLinkFn](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1840)を上書きする。    
* [directive.compileに対する処理](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1367)   
  terminalUrlがある場合はそれに対応した後にこの処理が実行される。    
  linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);         

<br/>
#### [compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1741)   
applyDirectivesToNode()内で[利用されている](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1359)。    
[nodeLinkFn](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1840)上書きする[delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1840)を生成して返す。      
{% highlight javascript %}
nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode,
  templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
    controllerDirectives: controllerDirectives,
    newIsolateScopeDirective: newIsolateScopeDirective,
    templateDirective: templateDirective,
    nonTlbTranscludeDirective: nonTlbTranscludeDirective
  });
{% endhighlight %}
$compileNodeの子要素を削除する。    
$http.get(templateUrl)でテンプレートを取得する。    
現在処理中のdirectiveに対してreplaceが設定されている場合、それに対応した処理をする。    
directive.templateとと処理内容はほぼ同じだが、applyDirectivesToNode(), compileNode()を実行する。    
delayedNodeLinkFnと$http.get()のコールバック関数のどちらが先に実行されるかで処理の内容が異なる。     
それは、linkQueueに要素数があるかどうかで決まる。      
<br/>
#### [delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn)](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1840) 
templateUrlが指定されていた場合の[nodeLinkFn](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L1359)の実体    
applyDirectivesToNode()の[戻り値](https://github.com/angular/angular.js/blob/v1.3.0-beta.18/src/ng/compile.js#L928)      




