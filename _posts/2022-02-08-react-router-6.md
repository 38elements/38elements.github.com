---
layout: posts
title: React Router 6メモ
---

# React Router 6メモ

## pathが変更された時に実行する処理の設定方法

```ts
  const location = useLocation()
  useEffect(() => {
    // ここに処理を書く
  }, [location.pathname])
```
