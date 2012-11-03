---
layout: posts
title: flatten by concat 
---
JavaScriptでArray::concatをapply経由で呼ぶと配列のネストを1つ消すことができる。
{% highlight javascript %}
Array.prototype.concat.apply([], [ 1, [2], [[3]], [[[4]]] ])
//=> [1,2,[3],[[4]]]
{% endhighlight %}

<br/>
underscore.jsのflattenメソッドは再起で実装されている。
{% highlight javascript %}
// Internal implementation of a recursive `flatten` function.
var flatten = function(input, shallow, output) {
each(input, function(value) {
  if (_.isArray(value)) {
    shallow ? push.apply(output, value) : flatten(value, shallow, output);
  } else {
    output.push(value);
  }
});
return output;
};

// Return a completely flattened version of an array.
_.flatten = function(array, shallow) {
return flatten(array, shallow, []);
};
//_.flatten([1, [2], [[3]], [[[4]]]]) => [1, 2, 3, 4]
{% endhighlight %}

<br/>
concatメソッドを使用すると以下のように実装することができる。
{% highlight javascript %}
function flatten(arr, shallow) {
    output = [];
    while (arr.length) {
        if (Array.isArray(arr[0])) {
            if (shallow) {
               output = output.concat(arr.shift()); 
            }
            else { 
                arr = Array.prototype.concat.apply([], arr);
            }   
        }
        else {
            output.push(arr.shift());
        }
    }
    return output;
}
{% endhighlight %}

<br/>

