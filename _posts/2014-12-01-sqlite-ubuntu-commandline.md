---
layout: posts
title: Sqliteをコマンドラインから操作する 
---
ubuntuでsqliteをコマンドラインから利用する。   
1. sudo apt-get install sqlite3    
2. sqlite3 <sqliteのファイル名>      
<br/>

テーブル一覧を表示するSQL
{% highlight sql %}
SELECT name FROM sqlite_master WHERE type='table';
{% endhighlight %}   
<br/>

テーブル定義を表示するSQL
{% highlight sql %}
SELECT sql FROM sqlite_master WHERE type='table' and name="<テーブル名>";
{% endhighlight %}   
<br/>


<br/>
<br/>
[FAQ](https://www.sqlite.org/faq.html)



