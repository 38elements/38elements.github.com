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

* [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

* `ReadonlyArray`と`as const` [\*](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const)

```
const a: ReadonlyArray<string> = ['a', 'b', 'c'];
const b: ReadonlyArray<string> = ['a', 'b', 'c'];
```
