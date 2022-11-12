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
        .when("/AdultMath", {controller: "JollyController", templateUrl: "views/AdultMath.html"})
        
        .when("/success/contactForm_success", {controller: "JollyController", templateUrl: "views/success/contactForm_success.html"})
        .when("/success/inventoryForm_success", {controller: "JollyController", templateUrl: "views/success/inventoryForm_success.html"})
        .when("/success/personalHealthForm_success", {controller: "JollyController", templateUrl: "views/success/personalHealthForm_success.html"})
        .when("/success/residenceHealthForm_success", {controller: "JollyController", templateUrl: "views/success/residenceHealthForm_success.html"})
        .when("/success/assetForm_success", {controller: "JollyController", templateUrl: "views/success/assetForm_success.html"})

        .when("/AdultMath", {controller: "AdultMathController", templateUrl: "views/adultMath.html"})

        .otherwise({redirectTo: '/'});
}]);