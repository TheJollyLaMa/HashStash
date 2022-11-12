// footer directive for the jollyfoot.html in angularjs
app.directive('jollyContactForm', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: "ContactController",
        templateUrl: 'js/directives/jollyContactForm.html'
    };
    
});
