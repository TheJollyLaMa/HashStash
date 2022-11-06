// footer directive for the jollyfoot.html in angularjs
app.directive('jollyContactForm', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: "JollyController",
        templateUrl: 'js/directives/jollyContactForm.html'
    };
    
});
