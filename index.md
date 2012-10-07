---
layout: common
title: Main Page
---
<div class="cnt" id="main_page">
  <h1>Posts</h1>
  <ul>
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
