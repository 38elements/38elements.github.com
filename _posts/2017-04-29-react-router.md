---
layout: posts
title: React Routerメモ
---
# React Routerメモ

[Github](https://github.com/ReactTraining/react-router)  
[Document](https://reacttraining.com/react-router/web/guides/quick-start)  


* Applicationのroot要素は[Rooter](https://reacttraining.com/react-router/web/api/Router)系の要素にする

## Link [\*](https://reacttraining.com/react-router/web/api/Link)

* [Link](https://reacttraining.com/react-router/web/api/Link)でrender()内で遷移処理を作成する

* aタグに渡すようなpropsを指定することができる [\*](https://reacttraining.com/react-router/web/api/Link/others)

### to prop [\*](https://reacttraining.com/react-router/web/api/Link/to-string)

### replace prop [\*](https://reacttraining.com/react-router/web/api/Link/replace-bool)

### innerRef prop [\*](https://reacttraining.com/react-router/web/api/Link/innerref-function)

## NavLink [\*](https://reacttraining.com/react-router/web/api/NavLink)

Linkにstyleの設定を加えたもの

## Route [\*](https://reacttraining.com/react-router/web/api/Route)

* [Route](https://reacttraining.com/react-router/web/api/Route)で子コンポーネントを表す

* 子コンポーネント(Route)は[match](https://reacttraining.com/react-router/web/api/match), [location](https://reacttraining.com/react-router/web/api/location), [history](https://reacttraining.com/react-router/web/api/history)をpropsに持つ [\*](https://reacttraining.com/react-router/web/api/Route/route-props)  
これらはcomponent、render、childrenの3つのrender関数に渡される [\*](https://reacttraining.com/react-router/web/api/Route/route-render-methods)  
[component](https://reacttraining.com/react-router/web/api/Route/component) propに渡されたコンポーネントにも渡される

* `path`がないものがデフォルト

* beforeのような処理はRouteをラップする [\*](https://reacttraining.com/react-router/web/example/auth-workflow)  

```
const FooRoute = ({ component, ...props }) => (
  <Route {...props} render={props => (
      bar ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={ pathname: '/login', state: { from: props.location } } />
      )
    )}
  />
)
```

### component prop [\*](https://reacttraining.com/react-router/web/api/Route/component)

* component propにインライン関数を渡してはいけない [\*](https://reacttraining.com/react-router/web/guides/basic-components/route-rendering-props)  
[render](https://reacttraining.com/react-router/web/api/Route/render-func)に渡す

* matchした時のみ実行

* Routeのpropsを受け取る

### render prop [\*](https://reacttraining.com/react-router/web/api/Route/render-func)

* Routeのpropsを引数で受け取る

* matchした時のみ実行

### children prop [\*](https://reacttraining.com/react-router/web/api/Route/children-func)

* Routeのpropsを引数で受け取る

* 常に実行される

### path prop [\*](https://reacttraining.com/react-router/web/api/Route/path-string)

* [path-to-regexp](https://github.com/pillarjs/path-to-regexp)のパターン

* 指定しない場合はデフォルトのRouteになる

### exact prop [\*](https://reacttraining.com/react-router/web/api/Route/exact-bool)

* props.pathとlocation.pathnameが一致する場合のみマッチするようにする

### strict prop [\*](https://reacttraining.com/react-router/web/api/Route/strict-bool)

* マッチの判定に末尾の/を考慮するかどうか

### location prop [\*](https://reacttraining.com/react-router/web/api/Route/location-object)

### sensitive prop [\*](https://reacttraining.com/react-router/web/api/Route/sensitive-bool)

* マッチの判定にpathの大文字小文字を考慮するかどうか

## location [\*](https://reacttraining.com/react-router/web/api/location)

## match [\*](https://reacttraining.com/react-router/web/api/match)

* match.urlは自分自身が紐づいている部分url  
もし、/foo/barに紐づいていて現在の状態が/foo/bar/bazだったら  
match.urlは/foo/bar

* `<Route path="/:id" component={Child}/>`で`match.params.id`でパラメータを取得することができる

## history [\*](https://reacttraining.com/react-router/web/api/history)

* repositoryは[history](https://github.com/ReactTraining/history)  

* Routerのpropsにセットする [\*](https://reacttraining.com/react-router/web/api/Router/history-object)

* `history.location.state`は`history.push(path [,state])`の`state`
