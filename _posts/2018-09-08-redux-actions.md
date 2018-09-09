---
layout: posts
title: redux-actionsメモ
---

# redux-actionsメモ

[Action Creator](https://redux.js.org/glossary#action-creator)と[Reducer](https://redux.js.org/glossary#reducer)の定義を補助する

[Github](https://github.com/redux-utilities/redux-actions)  
[Document](https://redux-actions.js.org/)

## Action Creator

[createAction(type, payloadCreator, metaCreator)](https://redux-actions.js.org/api/createaction#createactiontype-payloadcreator-metacreator)で以下のようなActionを返すAction Creatorを生成する。  
payloadCreatorを指定しなかった場合、actionCreactor(foo)のfooがそのままpayloadになる。  
metaCreatorはpayloadを引数に取る。  
payloadがErrorオブジェクトの場合、reducerに渡されるactionのaction.errorはtrueになる。  

```
{
　type: type,
  payload: {...},
  meta: {...}
}
```

## Reducer

以下の形式でreducerを定義する

```
const reducer = handleActions(
  {
    // actions.fooはcreateAction()の戻り値
    [acitons.foo]: (state, action) => {
      return {
        ...state,
        foo: action.payload.foo
      }
    },
    [actions.bar]: (state, aciton) => {
      // ...
    }
  },
  initialState
)
```

<hr/>

[React Routerメモ](/2017/04/29/react-router.html)  
[React Reduxメモ](/2017/04/29/react-redux.html)  
