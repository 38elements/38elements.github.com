---
layout: posts
title: Trolliusを使ってみました 
---
[Trollius](http://trollius.readthedocs.org/en/latest/index.html)を使ってみました。     
TrolliusはPython 2.6-3.5でasyncioの機能を提供するライブラリです。    
```python
import trollius as asyncio
from trollius import From, Return


@asyncio.coroutine
def concat(a, b):
    print "in concat {a}, {b}".format(a=a, b=b)
    yield From(asyncio.sleep(2))
    raise Return(a + b)


@asyncio.coroutine
def display(x, y):
    result = yield From(concat(x, y))
    print result

loop = asyncio.get_event_loop()
loop.run_until_complete(display("foo", "bar"))
loop.close()
```
