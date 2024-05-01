var app = angular.module('menuApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/about', {
      templateUrl: 'about.html'
    })
    .when('/contact', {
      templateUrl: 'contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
