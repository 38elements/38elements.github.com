---
layout: posts
title: React Reduxメモ
---
[redux github](https://github.com/reactjs/redux/)  
[react-redux github](https://github.com/reactjs/react-redux)  
[redux document](http://redux.js.org/?q=#)  

#### Action

* Actionの規約 [\*](https://github.com/acdlite/flux-standard-action)  

* dispatch(action)でreducerに渡される

* actionCreatorで生成される

<br>

#### Reducer

* reducerはstoreのstateを変更する

* stateがundefinedのときreducerは初期値を返す。  
stateにデフォルトの値を設定する。  
変更がない場合はstateをそのまま返す。  

* stateを変更する際は新しいオブジェクトを返す  
`Object.assign({}, old, {foo: 123})`  

<br>

### react-redux

#### connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

* mapStateToProps(state, [ownProps])  

* mapDispatchToProps(dispatch, [ownProps])  

* mergeProps(stateProps, dispatchProps, ownProps)  

* options
