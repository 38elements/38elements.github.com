---
layout: posts
title: React Reduxメモ
---
[redux github](https://github.com/reactjs/redux/)  
[react-redux github](https://github.com/reactjs/react-redux)  
[redux document](http://redux.js.org/?q=#)  

### Redux

#### Action

* Actionの規約 [\*](https://github.com/acdlite/flux-standard-action)  

* dispatch(action)でreducerに渡される

* actionCreatorで生成される

<br>

#### ActionCreator

* ActionCreatorはActionを返す関数  

* bindActionCreators(actionCreators, dispatch)はactionCreatorsをdispatchでラップする  

<br>

#### Reducer

* reducerはstoreのstateを変更する

* stateがundefinedのときreducerは初期値を返す。  
stateにデフォルトの値を設定する。  
変更がない場合はstateをそのまま返す。  

* stateを変更する際は新しいオブジェクトを返す  
`Object.assign({}, old, {foo: 123})`  

* combineReducers(reducers) [\*](http://redux.js.org/docs/api/combineReducers.html)  

<br>

#### Middleware

* Middlewareはdispatch(action)を実行した前の処理と後の処理を定義することができる  
applyMiddlewareはdispachを上書きする  

* Middlewareを通過した後に本物のdispatchを呼び出してReducerにいく  

* applyMiddleware(A, B, C)はA前->B前->C前->Cでdispach(action)->C後->B後->A後の順  
C後->B後->A後で一つ前のmiddlewareの戻り値をdispatch(action)の戻り値で取得することができる

<br>

### react-redux

#### connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

* mapStateToProps(state, [ownProps])  

* mapDispatchToProps(dispatch, [ownProps])  

* mergeProps(stateProps, dispatchProps, ownProps)  

* options

<br>

### Redux Thunk

非同期処理は[Redux Thunk](https://github.com/gaearon/redux-thunk)を使用する。  
thunkをmiddlewareの先頭に置く。

<br>

