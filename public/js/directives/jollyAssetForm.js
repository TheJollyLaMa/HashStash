// directive for the jollyAssetForm.html in angularjs
app.directive('jollyAssetForm', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: "AssetController",
        templateUrl: 'js/directives/jollyAssetForm.html'
    };
    
});
