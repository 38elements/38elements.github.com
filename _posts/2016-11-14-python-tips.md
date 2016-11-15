---
layout: posts
title: Python Tips
---

#### \_\_call\_\_でクロージャーのようなふるまい

```python
class Foo():

    def __init__(self):
        self.count = 0

    def __call__(self):
        self.count += 1
        print(self.count)

foo = Foo()
foo()
foo()

# 1
# 2
```
<br>

#### 関数の第1引数の型で処理を振り分ける

[@functools.singledispatch(default)](https://docs.python.org/3.5/library/functools.html#functools.singledispatch)  

```python
from functools import singledispatch

@singledispatch
def func(foo, bar):
    print('default')
    print(bar)

@func.register(int)
def _(foo, bar):
    print('int')
    print(bar)

@func.register(list)
def _(foo, bar):
    print('list')
    print(bar)

func(1, 'bar')
func([], 'bar')
func({}, 'bar')

# int
# bar
# list
# bar
# default
# bar
```
<br>
