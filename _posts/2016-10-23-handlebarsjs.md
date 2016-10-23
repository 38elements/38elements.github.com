---
layout: posts
title: Handlebars.jsメモ
---
[Handlebars.js](http://handlebarsjs.com/)  
[reference](http://handlebarsjs.com/reference.html)  

### 出力
\{\{ var \}\}  
\{\{! comment \}\}  
\{\{\{ raw \}\}\}  
[example](http://jsdo.it/38elements/handlebarsjs-1)  
<br>

### コンパイル

```javascript
let template = Handlebars.compile(template_source);
let html = template(data);
```
<br>

### ヘルパー

[Block](http://handlebarsjs.com/block_helpers.html)  
[Built-In Helpers](http://handlebarsjs.com/builtin_helpers.html)  

* \{\{#foo\}\}の形式  
<br>

#### Block Helper  
* 以下のようなブロックの場合  
\{\{#foo\}\}\{\{bar\}\}\{\{/foo\}\}  
何もしないブロックヘルパーの定義  

```
Handlebars.registerHelper('foo', function(options) {
    return options.fn(this);
});
```

* ブロックヘルパーに引数を渡した場合  
\{\{#foo args\}\}\{\{bar\}\}\{\{/foo\}\}  
argsがcontext  

```
Handlebars.registerHelper('with', function(context, options) {
    return options.fn(context);
});
```

* 繰り返し
\{\{#foo args\}\}\{\{bar\}\}\{\{/foo\}\} 

```
Handlebars.registerHelper('foo', function(context, options) {
    let content = "";
    for(let i = 0, max=context.length; i < max; i++) {
        content = content + options.fn(context[i]);
    }
    return content;
});
```

* キーワード引数

\{\{#foo args foo='bar' key='value' \}\}\{\{bar\}\}\{\{/foo\}\}   
options.hashにキーワード引数が格納されている  


* エスケープせずにそのまま出力する場合は下記を返す。

```
new Handlebars.SafeString(html)
```

#### Built-In Helper

* if   
[example](http://jsdo.it/38elements/handlebarsjs-if)  

* unless  

* each  
ループ処理を行う   
空の場合はelse節を利用することができる。  
\{\{@index\}\} インデックス  
\{\{@key\}\} キー    
<br>

### Partial

[document](http://handlebarsjs.com/partials.html)  

```
Handlebars.registerPartial(partial_name, partial)
```

\{\{> partial \}\}  

* context  
\{\{> partial context \}\}  

* parameter    
\{\{> partial foo='bar' \}\}  

* outer

outerパーシャルが下記の場合

{{raw}}
foo
{{p1}}
bar
{{p2}}
{{endraw}}

<br>
