var app = angular.module('app', ["ngRoute", "ngAnimate"]);

app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
        .when("/", {controller: "JollyController", templateUrl: "views/home.html"})
        .when("/home", {controller: "JollyController", templateUrl: "views/home.html"})
        .when("/contact", {controller: "JollyController", templateUrl: "views/contact.html"})
        .when("/inventory", {controller: "JollyController", templateUrl: "views/inventory.html"})
        .when("/personal", {controller: "JollyController", templateUrl: "views/personal.html"})
        .when("/residence", {controller: "JollyController", templateUrl: "views/residence.html"})
        .otherwise({redirectTo: '/'});
}]);