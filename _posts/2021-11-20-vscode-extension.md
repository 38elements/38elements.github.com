---
layout: posts
title: VSCode Extension
---
# VSCode Extension

## User Interface

* 各部位の名称 [\*](https://code.visualstudio.com/docs/getstarted/userinterface)

## Contribution

* $(alert)は[アイコン](https://code.visualstudio.com/api/references/icons-in-labels#icons-in-labels)

* `contributes.viewsContainers.activitybar`は一番左のコントロール

* `contributes.views.explorer`はExplorerのSide Bar

## Utils

### EventEmitterの使い方

```ts
const onDidChangeFoo = new vscode.EventEmitter<Foo>()
const onDidChangeFooEvent = onDidChangeFoo.event
onDidChangeFooEvent(listener)
onDidChangeFoo.fire(data)
```
