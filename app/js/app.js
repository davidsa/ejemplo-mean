 var app = angular.module('myApp', ['myApp.controllers', 'myApp.services', 'ngRoute']);

 app.config(function($routeProvider) {
   $routeProvider
     .when('/', {
       controller: 'LoginCtrl',
       templateUrl: 'partials/login.html'
     })
     .when('/cat', {
       controller: 'CatCtrl',
       templateUrl: 'partials/cat.html'
     })
     .otherwise({
       redirectTo: '/'
     });

 });
