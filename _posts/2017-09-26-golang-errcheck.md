---
layout: posts
title: errcheckでtestファイルとvendorとdeferを除外する方法
---

```
errcheck -ignoretests $(go list ./... | grep -v /vendor/ ) | grep -v defer
```
