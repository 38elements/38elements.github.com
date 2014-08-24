---
layout: posts
title: AngularJSでGitHubにあるrepositoryのタグ一覧を表示する。 
---
[AngularJS](https://github.com/angular/angular.js/)でGitHubにあるrepositoryのタグ一覧をJSONPで取得して表示するプログラムを作成しました。    
    
[$http](https://docs.angularjs.org/api/ng/service/$http#jsonp)でJSONPを行うにはcallback関数名をJSON_CALLBACKにする必要があります。       
      
AngularJSのtag一覧を取得するURLの例      
https://api.github.com/repos/angular/angular/angular.js/tags?callback=JSON_CALLBACK   
    
[DEMO](http://jsdo.it/38elements/github_api_angularjs_jsonp)
{% highlight html %}
<!doctype html>
<html ng-app="githubApp">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.19/angular.min.js"></script>
  </head>
  <body>
    <div ng-controller="GitHubController">
      <h3>{{title}}のTag一覧</h3>
        repository&nbsp;<input ng-model="repository"><button ng-click="getTags(repository)">Display</button>
      <div ng-repeat="d in response.data">
        <div>
           {{ "{{ d.name " }}}}
        </div>
      </div>
    </div>
  </body>
</html>
{% endhighlight %}   
{% highlight javascript %}
var app = angular.module('githubApp', []);
app.controller('GitHubController', ['$scope', "$http", function($scope, $http) {
    var callback = function (response) {
        $scope.response = response;
    };
    var getTags = function(repository) {
        $http.jsonp("https://api.github.com/repos/" + repository + "/tags?callback=JSON_CALLBACK")
        .success(callback);
        $scope.title = repository;
    }
    $scope.repository = "angular/angular.js";
    $scope.title = "angular/angular.js";
    $scope.getTags = getTags;
    getTags($scope.repository);
}]);
{% endhighlight %}   
      
参考   
[GitHub API JSON-P Callbacks](https://developer.github.com/v3/#json-p-callbacks)
