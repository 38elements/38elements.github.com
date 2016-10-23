---
layout: posts
title: Handlebars.jsメモ
---


\{\{ var \}\}  
\{\{! comment \}\}  
\{\{\{ raw \}\}\}  

```html
<template id="main">
    {{! comment }}
    This is a {{item}}.
    {{{raw}}}
</template>
<script>
    window.addEventListener('load', () => {
        let source   = document.getElementById('main').innerHTML;
        let template = Handlebars.compile(source);
        let html    = template({item: 'pen', raw: '<br><br><br><b>raw</b>'});
        document.body.innerHTML += html;
    });
</script>
````
