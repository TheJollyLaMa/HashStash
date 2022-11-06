// footer directive for the jollyfoot.html in angularjs
app.directive('jollyInventoryForm', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: "InventoryController",
        templateUrl: 'js/directives/jollyInventoryForm.html'
    };
    
});
