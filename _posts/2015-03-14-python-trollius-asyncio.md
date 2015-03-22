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
def concat(a, b, second):
    yield From(asyncio.sleep(second))
    raise Return(a + b)


@asyncio.coroutine
def display(x, y, second):
    result = yield From(concat(x, y, second))
    print result

loop = asyncio.get_event_loop()
tasks = [
    asyncio.async(display("a", "b", 5)),
    asyncio.async(display("c", "d", 2)),
    asyncio.async(display("e", "f", 1)),
    asyncio.async(display("g", "h", 4)),
    asyncio.async(display("i", "j", 3)),
]
loop.run_until_complete(asyncio.wait(tasks))
loop.close()

# ef 
# cd
# ij 
# gh
# ab
{% endhighlight %}
   
<br/>
[RxPY](https://github.com/ReactiveX/RxPY)のto_futureでtrollius.Futureを利用する。   
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
