var app = angular.module('app', ['ngRoute','ui.gravatar']);

// config the route
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/commentsView.html',
        controller: 'commentsCtrl'
      }).
        otherwise({
        redirectTo: '/'
      });
  }]);