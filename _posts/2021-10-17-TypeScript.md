---
layout: posts
title: TypeScriptメモ 
---

* 配列の型から要素の型を取り出す。

```ts
type Item = Items[number]
```

* [Parameter Properties](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties)

* [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

* `ReadonlyArray`と`as const` [\*](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const)

```
const a: ReadonlyArray<string> = ['a', 'b', 'c'];
const b: ReadonlyArray<string> = ['a', 'b', 'c'];
```
