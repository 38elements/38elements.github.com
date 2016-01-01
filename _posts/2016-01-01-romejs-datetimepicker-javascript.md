---
layout: posts
title: rome.jsメモ
---
[rome.js](https://github.com/bevacqua/rome)は`moment.js`にのみ依存した`jQuery`を利用しないdatetimepickerです。    
<br>
[Example1](http://jsdo.it/38elements/rome-datetimepicker-1)

{% highlight html %}
<input type="text" id="foo"></input>
{% endhighlight %}

{% highlight javascript %}
var foo = document.getElementById('foo');
var calendar1 = rome(foo);
{% endhighlight %}

<br>
[Example2](http://jsdo.it/38elements/rome-datetimepicker-2)

{% highlight html %}
<div id="result"></div>
<div id="outer"></div>
<a href="#" id="open" class="button button-rounded">Open</a>
&nbsp;
<a href="#" id="close" class="button button-rounded">Close</a>
{% endhighlight %}

{% highlight css %}
.selected-day {
    background-color: #FF851B;
    color: #fff;
}
{% endhighlight %}

{% highlight javascript %}
var result = document.getElementById('result');
var outer = document.getElementById('outer');
var close = document.getElementById('close');
var open = document.getElementById('open');
var calendar = rome(outer, {
    'monthFormat': 'YYYY年 MM月',
    "timeInterval": 1200,
    'styles': {
        'selectedDay': 'selected-day'
    }
});
calendar.on('data', function(value){
    result.textContent = value;
})
close.addEventListener('click', function() {
    calendar.hide();
});
open.addEventListener('click', function() {
    calendar.show();
});
{% endhighlight %}
