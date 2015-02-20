---
layout: posts
title: RxPYとFutureのメモ
---
[RxPY](https://github.com/ReactiveX/RxPY)と[Future](https://docs.python.org/3/library/concurrent.futures.html)を使ってみました。    
concurrent.futuresはPython3.1以下では[こちら](https://pypi.python.org/pypi/futures)を利用します。     
{% highlight python %}
import rx
import concurrent.futures
import time

seconds = [5, 1, 2, 4, 3]

def sleep(t):
    time.sleep(t)
    return t

def output(result):
    print '%d seconds' % result

with concurrent.futures.ProcessPoolExecutor(5) as executor:
    rx.Observable.from_(seconds).flat_map(
        lambda x: rx.Observable.from_future(executor.submit(sleep, x))
    ).subscribe(output)

# 1 seconds
# 2 seconds
# 3 seconds
# 4 seconds
# 5 seconds
{% endhighlight %}  
