---
layout: posts
title: Node.childrenとNode.childNodesメモ 
---
[Node.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode.children)はNodeの子Elementの配列([HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection))を返します。      
[Node.childNodes](https://developer.mozilla.org/en/docs/Web/API/Node.childNodes)はNodeの子Nodeの配列([NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList))を返します。     
childrenにはコメントやテキストが含まれません。     
childNodesはコメントやテキストが含まれます。     
childrenもchildNodesも子要素が変更された場合それらが自動的に反映されます。      

[DEMO](http://jsdo.it/38elements/node-children)    
     
[Node.childElementCount](https://developer.mozilla.org/ja/docs/Web/API/ParentNode.childElementCount)は子Elementの数です。   
