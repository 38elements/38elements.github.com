---
layout: posts
title: React Reduxメモ
---
[redux github](https://github.com/reactjs/redux/)  
[react-redux github](https://github.com/reactjs/react-redux)  
[redux document](http://redux.js.org/)  
[history](https://github.com/reacttraining/history)  
[用語集](https://redux.js.org/glossary)

## Redux

### Action

* Actionの規約 [\*](https://github.com/acdlite/flux-standard-action)  

* dispatch(action)でreducerに渡される

* actionCreatorで生成される

<br>

### ActionCreator

* ActionCreatorはActionを返す関数  

### bindActionCreators(actionCreators, dispatch)

actionCreatorをdispatchでラップする [\*](https://redux.js.org/api/bindactioncreators)  
mapDispatchToProps()内で使用する。  
actionCreatorsはFunctionかObjectをしているする。  
Objectの場合は以下の形式にする  

```
{
  actionCreator名: actionCreator
}
```

<br>

### Reducer

```
// reducerは変更がある場合新しいstateを返す
// ない場合は既存のstateを返す
let reducer =  function (state, action) {
  if(action.type == 'foo') {
    let changedState = {};
    return changedState;
  }
  return state;
};
```

* storeのstateはconnect()のmapStateToPropsを通じてコンポーネントに渡される

* middlewareではない場合、dispatch(action)でreducer(state, action)を呼ぶ

* reducerはstoreのstateを変更する

* stateがundefinedのときreducerは初期値を返す。  
stateにデフォルトの値を設定する。  
変更がない場合はstateをそのまま返す。  

* stateを変更する際は新しいオブジェクトを返す  
`Object.assign({}, old, {foo: 123})`  

stateがundefinedの場合、combineReducersに登録されている各reducerが呼ばれる  
だから、最初にinitalStateがundefinedの場合、combineReducersに登録されている各reducerが呼ばれる  
[createStore(reducer, preloadedState, enhancer)](https://redux.js.org/api/createstore)のreducerには[combineReducers(reducers)](http://redux.js.org/docs/api/combineReducers.html)の戻り値が渡されることが多い。  

```
const store = Redux.createStore(
  combineReducers({
    // fooキーに対応する値を返すreducer関数
    foo,
    // barキーに対応する値を返すreducer関数
    bar
  }),
  initialState
)
```

<br>

### Middleware

* Middlewareはdispatch(action)を実行した前の処理と後の処理を定義することができる  
applyMiddlewareはdispachを上書きする  

* Middlewareを通過した後に本物のdispatchを呼び出してReducerにいく  

* applyMiddleware(A, B, C)はA前->B前->C前->Cでdispach(action)->C後->B後->A後の順  
C後->B後->A後で一つ前のmiddlewareの戻り値をdispatch(action)の戻り値で取得することができる

<br>

## react-redux

### connect(mapStateToProps, mapDispatchToProps, mergeProps, options) [\*](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

`connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)`でstoreとcomponentが接続される

#### mapStateToProps(state, [ownProps])

storeのstateをstoreに接続しているcomponentに渡されたpropsにマージするstateを返す。  
storeのstateを使用しない場合はnullまたはundefinedを指定する。  
storeのstateからpropsにマージするデータを抽出する処理をselectorと言う。

#### mapDispatchToProps(dispatch, [ownProps])

dispatchを実行する関数を接続しているcomponentとして渡す。  

[bindActionCreators](https://redux.js.org/api/bindactioncreators)を使用した例   

```
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(actionCreators, dispatch)
    }
}
```

* mergeProps(stateProps, dispatchProps, ownProps)  
mapStateToProps()の戻り値とmapDispatchToProps()の戻り値と接続しているcomponentに渡されたpropsを引数に取る。  
そして、それらを処理してcomponentに渡すpropsを生成する。  
指定しなかった場合、`Object.assign({}, ownProps, stateProps, dispatchProps)`を実行する関数になる。

* options

routerと一緒に使うときは[withRouter](https://reacttraining.com/react-router/web/api/withRouter)でラップする

```
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component))
```

<br>

## Redux Thunk

非同期処理は[Redux Thunk](https://github.com/gaearon/redux-thunk)を使用する。  
thunkをmiddlewareの先頭に置く。  
actionCreatorsはdispatch, getStateを引数にとる関数を返す

<br>

<hr/>

[redux-actionsメモ](/2018/09/08/redux-actions.html)
