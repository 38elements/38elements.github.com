---
layout: posts
title: LaravelのRequestメモ 
---
[Document](https://laravel.com/docs/5.2/validation)  
[指定できる条件の一覧](https://laravel.com/docs/5.2/validation#available-validation-rules)  
<br>

### 使い方

連想配列のネストは`.`  

```
public function user(Request $request)
{
    $this->validate($request, [
        'id' => 'required|integer',
        'data.name' => 'required|alpha_num|max:255',
    ]);
}
```
