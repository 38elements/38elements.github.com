---
layout: posts
title: Handlebars.jsメモ
---
[Handlebars.js](http://handlebarsjs.com/)  

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
