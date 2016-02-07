---
layout: posts
title: Djangoのテストメモ 
---
* [Top page](https://docs.djangoproject.com/en/dev/topics/testing/)

* テストで利用するデータベースのテーブルについて [\*](https://docs.djangoproject.com/en/1.8/topics/testing/overview/#the-test-database)    

* fixturesディレクトリをINSTALLED_APPSに設定したアプリケーションのディレクトリの下に置く [\*](https://docs.djangoproject.com/en/1.8/topics/testing/tools/#fixture-loading)   

* 下記のようにするにはfoo/tests/\_\_init\_\_.pyにテストクラスをインポートする必要がある。   
{% highlight bash %}
python manage.py test foo.tests 
{% endhighlight %}

* fixturesは相対パス
{% highlight python %}
class BookmarkModelTestCase(TestCase):
    fixtures = [
        'feedhoos/fixtures/bookmark.json',
    ]

    def setUp(self):
        super(BookmarkModelTestCase, self).setUp()

    def tearDown(self):
        super(BookmarkModelTestCase, self).tearDown()
{% endhighlight %}

* URL_CONFの設定 [\*](https://docs.djangoproject.com/en/stable/topics/testing/tools/#urlconf-configuration)    
    
* settings.pyの設定 [\*](https://docs.djangoproject.com/en/stable/topics/testing/tools/#overriding-settings)    
SimpleTestCase.settings() [\*](https://docs.djangoproject.com/en/stable/topics/testing/tools/#overriding-settings)  

* Assertions [\*](https://docs.djangoproject.com/en/1.9/topics/testing/tools/#assertions)    
TestCase [\*](http://docs.python.jp/2/library/unittest.html#unittest.TestCase)    
    

