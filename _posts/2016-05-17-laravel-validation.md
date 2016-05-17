---
layout: posts
title: LaravelのValidationメモ 
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
        'data.*.title' => 'required|alpha_num|max:255',
    ]);
}
```

エラーになった場合は前のページにリダイレクトされる  
$errorsと入力されたデータがflashに入る  

`bail`をつけると最初のバリデーションエラーでバリデーションの検証が終わる  
<br>

### エラーメッセージの設定
`App\Http\Controllers`のControllerクラスの`formatValidationErrors`メソッドを変更する。  
`Illuminate\Contracts\Validation\Validator`クラスをインポートする。

```
namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;

abstract class Controller extends BaseController
{
    use DispatchesJobs, ValidatesRequests;

    protected function formatValidationErrors(Validator $validator)
    {
        return $validator->errors()->all();
    }
}
```
<br>

### XMLHttpRequest
エラーのときは422のステータスコードを返す  
<br>

### 手動でリダイレクトしてエラーと入力値を記録する

```
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'passowrd' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect('user/login')
                        ->withErrors($validator)
                        ->withInput();
        }
    }
```
<br>

### 名前付きエラー
ひとつのページに複数のフォームがある場合エラーを表示する際にどのフォームのバリデーションエラーかを判断するために名前をつける
```
return redirect('register')
    ->withErrors($validator, 'login');
```

{% raw %}
{{ $errors->login->first('email') }}
{% endraw %}










































