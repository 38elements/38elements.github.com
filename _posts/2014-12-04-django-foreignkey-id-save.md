---
layout: posts
title: DjangoのModelで外部キーにModelではなくidを渡すことができる 
---
foo.bar = bar_model    
foo.bar.save()   
の代わりに    
foo.bar_id = bar_id    
foo.bar.save()   
とすることができる   
<br/>
foo.bar_idで外部キーを参照することができる
