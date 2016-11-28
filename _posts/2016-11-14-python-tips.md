---
layout: posts
title: Python Tips
---

#### Generator

```python
def gen():
    yield 1
    yield 2
    yield 3

g = gen()
print(g.__class__.__name__)

for i in g:
    print(i)

# generator
# 1
# 2
# 3
```
<br>

#### 引数をデコレータ関数

```python
def deco(foo):
    print('1')
    def _deco(func):
        print('2')
        def __deco(arg):
            print(foo)
            func(arg)
        print('3')
        return __deco 
    print('4')
    return _deco


@deco('foo')
def func(arg):
    print(arg)

func('bar')

# 1
# 4
# 2
# 3
# foo
# bar
```
<br>

#### dictにデフォルトの値を設定する

[collections.defaultdict([default_factory[, ...]])](https://docs.python.org/3.5/library/collections.html#collections.defaultdict)  

```python
from collections import defaultdict

d = defaultdict(lambda: 100)

d['foo'] += 1
print(d['foo'])
# 101
```
<br>

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

#### 関数の実行結果をキャッシュする

[functools.lru_cache(maxsize=128, typed=False)](https://docs.python.org/3/library/functools.html#functools.lru_cache)  
maxsizeにNoneを指定した場合、すべての引数の結果をキャッシュする  

```python
from functools import lru_cache


@lru_cache(maxsize=2)
def func(foo):
    print(str(foo))
    return

func(1)
func(2)
func(3)
func(3)
func(2)
func(1)


# 1
# 2
# 3
# 1
```
<br>

#### 値の数量を調べる。 指定した値とその数量をもつ配列を生成する

[collections.Counter([iterable-or-mapping])](https://docs.python.org/3.5/library/collections.html#collections.Counter)  

```python
from collections import Counter

c1 = Counter('aaaabbcccd')
print(list(c1.elements()))
# ['a', 'a', 'a', 'a', 'd', 'b', 'b', 'c', 'c', 'c']
print(c1.most_common())
# [('a', 4), ('c', 3), ('b', 2), ('d', 1)]
print(c1.most_common(2))
# [('a', 4), ('c', 3)]
c2 = Counter(a=4, b=2)
print(list(c2.elements()))
# ['b', 'b', 'a', 'a', 'a', 'a']
c3 = Counter(a=4, b=3, c=1)
print(list(c3.elements()))
# ['b', 'b', 'b', 'a', 'a', 'a', 'a', 'c']
c4 = Counter({'a': 1, 'b': 3})
print(list(c4.elements()))
# ['a', 'b', 'b', 'b']
c4.subtract(c1)
print(dict(c4))
# {'a': -3, 'd': -1, 'b': 1, 'c': -3}
print(dict(+c4))
# {'b': 1}
print(dict(-c4))
# {'a': 3, 'c': 3, 'd': 1}
c2.update(c3)
print(dict(c2))
# {'b': 5, 'a': 8, 'c': 1}
```
<br>
