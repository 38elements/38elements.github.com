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
