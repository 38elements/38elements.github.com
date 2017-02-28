---
layout: posts
title: Vue Materialメモ
---
[Github](https://github.com/marcosmoura/vue-material)  
[Document](https://vuematerial.github.io/#/)  

* @click.nativeを使用する [\*](https://vuematerial.github.io/#/changelog)  

* [input](https://vuematerial.github.io/#/components/input)でplaceholderはlabelがデフォルトでなるが、placeholderをセットするとplaceholderになる       
その場合、requiredが反映されない

* `md-table`には`overflow-x: auto;`が設定されている  

* `md-file`は@change.nativeを使用する

* `md-select`が遅くなる場合は`md-input-container`で`v-if`して`md-select`で`v-once`
