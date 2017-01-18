---
layout: posts
title: VueRouterメモ
---
[Document](https://router.vuejs.org/en/)  

* ルートコンポーネントにrouterを置く [\*](https://router.vuejs.org/en/essentials/getting-started.html)  

* urlの変更はoption.watch.$routes()でわかる [\*](https://router.vuejs.org/en/essentials/dynamic-matching.html)  

* pathの設定例 [\*](https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js)  

* [&lt;router-view&gt;&lt;/router-view&gt;](https://router.vuejs.org/en/api/router-view.html)にroutesに設定したcomponentが入る [\*](https://router.vuejs.org/en/essentials/getting-started.html)  

* 子ステートはchildrenに設定する [\*](https://router.vuejs.org/en/essentials/nested-routes.html)  

* router.push(location), router.replace(location), router.replace(location) [\*](https://router.vuejs.org/en/essentials/navigation.html)  

* [&lt;router-link&gt;](https://router.vuejs.org/en/api/router-link.html)はテンプレートでの遷移を記述する際に使用する  

* nameキーを指定することによってルーティングされるpathに名前をつけることができる [\*](https://router.vuejs.org/en/essentials/named-routes.html)  

* 1つのパスに複数のコンポーネントをルーティングする方法 [\*](https://router.vuejs.org/en/essentials/named-views.html)  
componentsにnameキーを置く  

* redirectには関数を渡して動的にパスを変更することができる [\*](https://router.vuejs.org/en/essentials/redirect-and-alias.html)  

* before(), after() [\*](https://router.vuejs.org/en/advanced/navigation-guards.html)  
toもfromも[ルートオブジェクト](https://router.vuejs.org/en/api/route-object.html)   

* metaキーで[ルートオブジェクト](https://router.vuejs.org/en/api/route-object.html)にメタデータを付与することができる [\*](https://router.vuejs.org/en/advanced/meta.html)  

* Routeオブジェクト [\*](https://router.vuejs.org/en/api/route-object.html)  

* Routeのoption [\*](https://router.vuejs.org/ja/api/options.html)  

* Routeオブジェクト [\*](https://router.vuejs.org/en/api/router-instance.html)  

* router.app  
routerが所属しているVueオブジェクト

* router.currentRoute  
現在のRouteオブジェクト  

<hr>
[Vue.jsメモ](/2016/12/20/vuejs.html)  
[Vuexメモ](/2017/01/14/vuex.html)  
