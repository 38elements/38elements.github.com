---
layout: posts
title: nightmare.jsメモ 
---
[github](https://github.com/segmentio/nightmare)  

* Promiseのthen()を実装している [\*](https://github.com/segmentio/nightmare/blob/1aac3062153131391f853d24b1f74e191ed01451/lib/nightmare.js#L430-L440)  

* partitionオプションにユニークな文字列を渡せばsessionを共有しないpersist:をつけなければ永続化されない [\*](https://github.com/segmentio/nightmare#nightmareoptions)  [\*](https://github.com/electron/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions)
