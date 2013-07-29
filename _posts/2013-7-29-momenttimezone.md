---
layout: posts
title: MomentTimezoneメモ
---
[Moment Timezone](http://momentjs.com/timezone/)はMoment.jsでtimezoneを切り替えるためのライブラリです。  
  
利用する手順は以下のとおり  
  
* moment.jsの読み込み
* moment-timezone.jsの読み込み
* timezone dataの読み込み

timezone dataは[Timezone Data Builder](http://momentjs.com/timezone/data/)のページで左側のボタンから利用したいtimezone名を選択して  
右側にあるOutputの内容をtimezone dataとして利用する。  
  
timezoneの切り替えはtz(&lt;timezone名&gt;)で行なう。  
  
{% highlight html %}
<script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min.js"></script>
<script src="https://rawgithub.com/timrwood/moment-timezone/0.0.1/min/moment-timezone.min.js"></script>
<script>
//バンコクとシンガポールを選択
moment.tz.add({
   "zones": {
       "Asia/Bangkok": [
           "6:42:4 - LMT 1880 6:42:4",
           "6:42:4 - BMT 1920_3 6:42:4",
           "7 - ICT"
       ],
       "Asia/Singapore": [
           "6:55:25 - LMT 1901_0_1 6:55:25",
           "6:55:25 - SMT 1905_5_1 6:55:25",
           "7 - MALT 1933_0_1 7",
           "7:20 - MALST 1936_0_1 7:20",
           "7:20 - MALT 1941_8_1 7:20",
           "7:30 - MALT 1942_1_16 7:30",
           "9 - JST 1945_8_12 9",
           "7:30 - MALT 1965_7_9 7:30",
           "7:30 - SGT 1982_0_1 7:30",
           "8 - SGT"
       ]
   },
   "rules": {},
   "links": {}
});
</script>
<script>
var m = moment();
//バンコクの現地時間
console.log(m.tz("Asia/Bangkok").format());
//シンガポールの現地時間
console.log(m.tz("Asia/Singapore").format());
</script>
{% endhighlight %}
