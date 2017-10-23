---
layout: posts
title: JavaScriptメモ 
---
[caniuse](http://caniuse.com/)  
  
* keyイベントでデフォルトの動作を防ぎたい場合はイベントハンドラでfalseを返す。
  
* changeイベントの発動条件を変更したい場合はonfocus, onblurを変更する。
  
* 関数オブジェクトのlengthプロパティは関数定義の引数の数が入っている。  
var func = function(a,b,c) {};  
func.length;  
=>3  
  
* 文字列の途中で改行を入れたいときは「\」を行末に置く。
{% highlight javascript %}
var a = "12345\
678";
// 12345678
{% endhighlight %}

* [String.prototype.replace()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
{% highlight javascript %}
"abc1234def".replace(/[^\d]+(\d+)/g, function(match, p1) {return "__" + p1 + "__";});
// "__1234__def"
"abc".replace(/([a-z])([a-z])/g, "$1-$2-");
// "a-b-c"
{% endhighlight %}

* ~~は[Math.floor()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)と同じ

* [ceil](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)と[floor](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
{% highlight javascript %}
Math.ceil(4.3)
// 5
Math.floor(4.3)
// 4
{% endhighlight %}

* [for of](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)はiterableオブジェクトの値を回す

* [window.onerror](https://developer.mozilla.org/ja/docs/Web/API/GlobalEventHandlers/onerror)は発生したエラーをハンドリングする  

* \`\`内で1行が長い文字列を改行をして生成する方法  

```
`123\
45`
// => '12345'
```

* input.formでinput要素が所属しているformを取得 [\*](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)  

* getterを使用したproxyの例

```
let _b = {
    c: {
        d: 1
    }
};
let a = {
    get b() {
        return _b;
    }
};
console.log(a.b.c.d);
// => 1
```

* 分割代入で変数に値を割り当てない

```
[, a, b] = [1, 2, 3]
// a = 2
// b = 3
```

* 分割代入で新しい配列を生成

```
a = [1, 2, 3]
[...a]
// [1, 2, 3]
```

* 分割代入でデフォルトの値を反映しつつ代入

```
let { a = 1, b = 9 } = {b: 2}
// a = 1
// b = 2
```

* input type="file"で画像データをdata uriで取得する

```
function handler(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        console.log(e.target.result);
    };
    reader.readAsDataURL(file);
}
```

<hr>

[Microsoft Edge Developer Guide](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide)  
[Microsoft Edge Platform status](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/)  
[Firefox Platform Status](https://platform-status.mozilla.org/)  
[WebKit Feature Status](https://webkit.org/status/)  
[Chrome  Platform Status](https://www.chromestatus.com/features)  

