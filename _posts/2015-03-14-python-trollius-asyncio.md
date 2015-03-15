---
layout: posts
title: Trolliusを使ってみました 
---
[Trollius](http://trollius.readthedocs.org/en/latest/index.html)を使ってみました。     
TrolliusはPython 2.6-3.5で[asyncio](http://docs.python.jp/3/library/asyncio.html)の機能を提供するライブラリです。    
{% highlight python %}
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
{% endhighlight %}
   
RxPYのto_futureで利用する。   
{% highlight python %}
from __future__ import print_function
import rx
import trollius as asyncio


@asyncio.coroutine
def display():
    future = rx.Observable.return_value("a").to_future(asyncio.Future)
    subscription = rx.Observable.from_future(future).subscribe(print)

loop = asyncio.get_event_loop()
loop.run_until_complete(display())
{% endhighlight %}
