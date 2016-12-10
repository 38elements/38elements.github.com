---
layout: posts
title: sanicのソースコードリーディングメモ 
---
sanicはasyncioベースの速さに注力しているウェブサーバーです。  
Python3.5以上で動作します。  
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
    # add_parameter(match)でuriにパラメータがある場合
    elif parameters:
        self.routes_dynamic[url_hash(uri)].append(route)
    else:
        self.routes_static[uri] = route
```
<br>

Routeはnamedtuple [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/router.py#L7)  

#### app.run() [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L220)  
サーバーイベントリスナーの登録 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L262-L279)  
ワーカーの起動(serve()) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L288-L298)  
<br>

#### serve() [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L207)
async_loopはuvloopもしくはasyncio [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L9-L12)  
loopの生成 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L228)  
[create_server()](https://docs.python.org/3.5/library/asyncio-eventloop.html#asyncio.AbstractEventLoop.create_server)でしてcoroutineを生成 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L238)  
protocol_factoryは[HttpProtocolクラス](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L25)を返す関数   
HttpProtocolは[asyncio.Protocol](https://docs.python.org/3.5/library/asyncio-protocol.html#protocols)のサブクラス  
1秒間ごとにcurrent_timeを更新する [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L249)  
server_coroutineの実行 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L252) 
<br>

#### request_handler [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L252)
request_handlerは[app.handle_request(self, request, response_callback)](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L140)   
handle_requestはミドルウェアとハンドラを実行したあとresponse_callbackを実行する  
response_callbackは[write_response](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L142)  
on_message_complete()で実行される [\*](https://github.com/channelcat/sanic/blob/89e2084489a8db6ba3e1fd69ebbcd5d15d0adf42/sanic/server.py#L144)     

<br>

#### HttpProtocol [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L25)
HttpProtocolは[asyncio.Protocol](https://docs.python.org/3.5/library/asyncio-protocol.html#protocols)のサブクラス  
on_url, on_header, on_headers_complete, on_body, on_message_completeは[httptools](https://github.com/MagicStack/httptools)インスタンスから呼ばれる  
self.parser = httptools.HttpRequestParser(self) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L97)  

connection_timeout, connection_made, data_receivedはasyncio.Protocolのメソッド  

* [connection_made(self, transport)](https://docs.python.org/3.5/library/asyncio-protocol.html#asyncio.BaseProtocol.connection_made) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L58)  
[Transport](https://docs.python.org/3.5/library/asyncio-protocol.html#transports)  
self.transport = transport [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L62)  

* [connection_lost(self, exc)](https://docs.python.org/3.5/library/asyncio-protocol.html#asyncio.SubprocessProtocol.pipe_connection_lost) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L65)  

* connection_timeout(self) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L70)  
connection_madeしてからのタイムアウトの処理  
[ここ](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L60-L61)で設定されている  

* [data_received(self, data)](https://docs.python.org/3.5/library/asyncio-protocol.html#asyncio.Protocol.data_received) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L84)  
リクエストデータを受け取ってhttptools.HttpRequestParserを実行  

* write_response(self, response) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L142)   
responseはhandlerの戻り値 [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/sanic.py#L179)  
__self.transport.write()でresponseの内容を書き込んでいる__ [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L146)    

* on_url(self, url) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L106)  
urlをセット  

* on_header(self, name, value) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L109)  
self.headersにnameとvalueを追加  

* on_headers_complete(self) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L116)  
self.requestにRequestインスタンスを代入

* on_body(self, body) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L134)  
self.request.body = body  

* on_message_complete(self) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L134)   
__request_handlerを実行する__  

<br>

#### httptools [\*](https://github.com/MagicStack/httptools)  
app.parserはhttptools.HttpRequestParser(self) [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/server.py#L97)  
<br>

#### HTTPResponse [\*](https://github.com/channelcat/sanic/blob/93f50b8ef7ed8fee206d2c440b096c09f1dd0af4/sanic/response.py#L74)  
json(), text(), html()はHTTPResponse()のwrapper  
<br>

#### Request [\*](https://github.com/channelcat/sanic/blob/e3453553e1c904ddf8e0cf4de47c9f5e69f7eef5/sanic/request.py#L36)
Requestはdictのサブクラス  
