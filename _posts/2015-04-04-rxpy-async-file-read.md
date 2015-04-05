---
layout: posts
title: 非同期でファイルのデータを取得してRxPYで利用する 
---
非同期でファイルからデータを読み込んでRxPYで利用するためのソースを生成する処理を作成しました。   
[asyncore](https://docs.python.org/2.7/library/asyncore.html#module-asyncore)     
{% highlight python %} 
from __future__ import print_function
import asyncore
import os
import rx


class AsyncFileReader(asyncore.file_dispatcher, object):

    def __init__(self, file_name, observer, size=None):
        fd = os.open(file_name, os.O_RDONLY)
        super(AsyncFileReader, self).__init__(fd)
        self.observer = observer
        self.size = size
        self.data = ""

    def handle_read(self):
        self.data += self.recv(self.size)

    def handle_close(self):
        self.observer.on_next(self.data)
        self.close()

    def writable(self):
        return False


def form_async_file_read(file_names, size=1024, timeout=30, use_poll=False):
    def subscribe(observer):
        map(lambda file_name: AsyncFileReader(file_name, observer, size), file_names)
        asyncore.loop(timeout, use_poll)
        observer.on_completed()
    return subscribe

if __name__ == "__main__":
    rx.Observable.create(form_async_file_read(["a.txt", "b.txt"], use_poll=True)).subscribe(print)
{% endhighlight %}
