---
layout: posts
title: KarmaをUbuntuで利用した 
---
npm install -g phantomjs              
export PHANTOMJS_BIN=/usr/local/bin/phantomjs   
npm install karma-phantomjs-launcher --save-dev
  
karma.conf.jsで  
browsers : ['PhantomJS'],   
plugins : ['karma-phantomjs-launcher']  

