var app = angular.module('app', ["ngRoute"]);

app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/", {controller: "MainController", templateUrl: "views/home.html"})
        .when("/home", {controller: "MainController", templateUrl: "views/home.html"})
        .otherwise({redirectTo: '/'});
}]);