---
layout: posts
title: sanicのソースコードリーディングメモ 
---

[Github](https://github.com/channelcat/sanic)  

appでありSanicクラス [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L20) 

#### @app.route(uri, methods=None) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L44)   
これをしているだけ  
app.router.add(uri=uri, methods=methods, handler=handler)  
handlerはcoroutineである必要がある  

router.add()ではuriのparameterを取得する正規表現の生成が行われる [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/router.py#L49)  
uriによってrouteを格納する変数を振り分ける [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/router.py#L98-L104)

```python
    route = Route(
        handler=handler, methods=methods, pattern=pattern,
        parameters=parameters)

    self.routes_all[uri] = route
    if properties['unhashable']:
        self.routes_always_check.append(route)
    // add_parameter(match)でuriにパラメータがある場合
    elif parameters:
        self.routes_dynamic[url_hash(uri)].append(route)
    else:
        self.routes_static[uri] = route
```

Routeはnamedtuple [\*](ihttps://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/router.py#L7)  

#### app.run() [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L220)  
サーバーイベントリスナーの登録 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L262-L279)  
ワーカーの起動(serve()) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L288-L298)  

#### serve() [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L207)
async_loopはuvloopもしくはasyncio [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L9-L12)  
loopの生成 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L228)  
[create_server()](https://docs.python.org/3.5/library/asyncio-eventloop.html#asyncio.AbstractEventLoop.create_server)でしてcoroutineを生成 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L238)  
protocol_factoryは[HttpProtocol](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L25)を返す関数   
