---
layout: posts
title: jQuery-Timepicker-Addonメモ
---
[jQuery-Timepicker-Addon](https://github.com/trentrichardson/jQuery-Timepicker-Addon)で選択することができる最小の日時とデフォルトの値を設定するサンプル
  
  
{% highlight html %}
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="jquery-ui-timepicker-addon.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script src="jquery-ui-timepicker-addon.js"></script>
<script src="jquery-ui-sliderAccess.js"></script>
</head>
<body>
    <input type="text" id="a" >
    <script>
        $('#a').datetimepicker({
            dateFormat : "yy/mm/dd",
            timeFormat : "HH:mm:ss", 
            defaultValue: "2013/09/30 23:09:12",
            minDateTime: new Date(2013, 9, 30, 23,2, 5)
        });
    </script>
</body>
</html>
{% endhighlight %}
