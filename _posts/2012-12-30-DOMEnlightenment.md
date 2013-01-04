---
layout: posts
title: DOM Enlightenmentメモ
---

### outerHTML
outerHTMLはouterHTMLを所有している要素を指定した文字列の内容に置き換える。<br/> 
[DEMO](http://jsdo.it/38elements/orze)<br/>
<br/>

### element.insertAdjacentHTML(position, html)
element自身や子要素の前後にhtmlを挿入する。<br/>
positionには以下の4つを指定することができる。<br/>
<dl>
    <dt>beforebegin</dt>
    <dd>elementの前にhtmlを挿入</dd>
    <dt>afterend</dt>
    <dd>elementの後にhtmlを挿入</dd>
    <dt>afterbegin</dt>
    <dd>elementの最初の子要素の前にhtmlを挿入</dd>
    <dt>beforeend</dt>
    <dd>elementの最後の子要素の後にhtmlを挿入</dd>
</dl>
[DEMO](http://jsdo.it/38elements/insertAdjacentHTML)<br/>
<br/>

### parentElement.insertBefore(insert_elem, child_elem)
parentElementの子要素の前に挿入対象の要素を挿入する。<br/>
基準となる要素がparentElementの子要素でない場合エラーになる。<br/>
[DEMO](http://jsdo.it/38elements/cKnK)<br/>
<br/>

### NodeListはArray.prototypeのメソッドを適用することができる
Array.prototype.slice.call(nodeList)でnodeListをArrayに変換することができる。<br/>
[DEMO](http://jsdo.it/38elements/6WIS)<br/>
<br/>

### firstChildとfirstElementChildの違い
firstChildは第1子Node(TextNodeを含む)を返す。<br/>
firstChildElementは第1子Elementを返す。<br/>
[DEMO](http://jsdo.it/38elements/hkas)<br/>
<br/>

### node.isEqualNode(someNode)
ノードの種類や属性が同じ時trueを返す。<br/>
[DEMO](http://jsdo.it/38elements/o0f8)<br/>
<br/>

### node.isEqualNode(someNode)
ノードの種類や属性が同じ時trueを返す。<br/>
[DEMO](http://jsdo.it/38elements/o0f8)<br/>
<br/>

### document.activeElement
document.activeElementはフォーカスがあたっている要素を返す。<br/>
document.hasFocus()はフォーカスがあたっている要素がある場合はtrueを返す。<br/>
<br/>

### elem.classList
classListリストは要素のclassを編集する際に利用する。<br/>
[DOMTokenList](https://developer.mozilla.org/en-US/docs/DOM/DOMTokenList)の一種である。<br/>
elem.classList.add(class_name)#class_nameを追加<br/>
elem.classList.remove(class_name)#class_nameを削除<br/>
elem.classList.toggle(class_name)#class_nameをドグル<br/>
elem.classList.contains(class_name)#class_nameがclassListに含まれるか<br/>
elem.classList.length#classListの長さ<br/>
<br/>

### elem.matchesSelector(selector)
要素が指定したセレクタの対象か判定する。<br />
<br />

### elem.scrollIntoView()
要素が画面に出てくるまでスクロールする<br/>
<br/>

### CSSStyleSheet
スタイルシートの内容を動的に変更する。
{% highlight javascript %}
document.querySelector('#styleElement').sheet.insertRule('p{color:red}',1);

var styleElm = document.createElement('style');
styleElm.innerHTML = 'body{color:red}';
{% endhighlight %}

CSSを無効にする
{% highlight javascript %}
document.querySelector('#linkElement').disabled = true;
{% endhighlight %}
[DEMO](http://jsdo.it/38elements/vImp)<br/>















