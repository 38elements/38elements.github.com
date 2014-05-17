---
layout: posts
title: grunt-angular-templatesで指定できるbootstrapオプションの例 
---
[grunt-angular-templates](https://github.com/ericclemmons/grunt-angular-templates)でのbootstrapオプションの出力結果に関するメモ  
以下のファイルでgruntを実行する。
<br/>
foo.html
{% highlight html %}
this is foo.
{% endhighlight %}
bar.html
{% highlight html %}
this is bar.
{% endhighlight %}
Gruntfile.js
{% highlight javascript %}
module.exports = function(grunt) {
    grunt.initConfig({
        ngtemplates: {
            Test: {
                src: '*.html',
                dest: 'templates.js',
                options: {
                    bootstrap: function(module, script) {
                        // module is 'Test'
                        return "PREFIX\n" + script + "\nSUFFIX";
                    }
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('default', ["ngtemplates"]);
};
{% endhighlight %}
<br/>
<br/>
出力結果  
templates.js
{% highlight javascript %}
PREFIX
  'use strict';

  $templateCache.put('bar.html',
    "this is bar.\n"
  );


  $templateCache.put('foo.html',
    "this is foo.\n"
  );

SUFFIX
{% endhighlight %}


