// footer directive for the jollyfoot.html in angularjs
app.directive('jollyPersonalHealthForm', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: "PersonalHealthController",
        templateUrl: 'js/directives/jollyPersonalHealthForm.html'
    };
    
});
