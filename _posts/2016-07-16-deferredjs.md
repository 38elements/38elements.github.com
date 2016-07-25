---
layout: posts
title: deferred.jsメモ
---
[deferred.js](https://github.com/tj/deferred.js)は下記を以下のように書くことができる。  

```
const co = require('co');

const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});


co(function *(){
    console.log(2);
    let a = yield p;
    console.log(a);
});
```

```
const co = require('co');
const Deferred = require('deferred');

const deferred = new Deferred();

setTimeout(() => {
    deferred.resolve(1)
}, 1000);

co(function *(){
    console.log(2);
    let a = yield deferred;
    console.log(a);
});
```
