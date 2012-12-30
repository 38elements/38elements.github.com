---
layout: posts
title: DOM Enlightenmentを読んだ際のメモ
---

### outerHTML
outerHTMLはouterHTMLを所有している要素を指定した文字列の内容に<span style="color:red;">置き換える</span>。<br/> 
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
