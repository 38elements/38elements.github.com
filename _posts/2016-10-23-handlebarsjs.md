---
layout: posts
title: Handlebars.jsメモ
---
[Handlebars.js](http://handlebarsjs.com/)  
[reference](http://handlebarsjs.com/reference.html)  

#### 出力
\{\{ var \}\}  
\{\{! comment \}\}  
\{\{\{ raw \}\}\}  
[example](http://jsdo.it/38elements/handlebarsjs-1)  
<br>

#### コンパイル

```javascript
let template = Handlebars.compile(template_source);
let html = template(data);
```
<br>

#### ヘルパー

[Block](http://handlebarsjs.com/block_helpers.html)  
[Built-In Helpers](http://handlebarsjs.com/builtin_helpers.html)  

エスケープせずにそのまま出力する場合は下記を返す。

```
new Handlebars.SafeString(html)
```
<br>

#### Partial

[document](http://handlebarsjs.com/partials.html)  
<br>
