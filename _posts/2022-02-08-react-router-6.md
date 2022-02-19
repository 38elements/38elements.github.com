---
layout: posts
title: React Router 6メモ
---

# React Router 6メモ

## pathが変更された時に実行する処理の設定方法

root componentに以下の処理を追加する。  

* [useLocation()](https://reactrouter.com/docs/en/v6/api#uselocation)
* [Location](https://github.com/remix-run/history/blob/main/docs/api-reference.md#location)

```ts
  const location = useLocation()
  useEffect(() => {
    // ここに処理を書く
  }, [location.pathname])
```
