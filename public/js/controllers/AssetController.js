app.controller('AssetController', ['$scope', function($scope) {
    $scope.title = 'Asset Form';

    // send asset form
    $scope.sendAssetForm = function() {
        $location.path('/success/assetForm_success');
        console.log($scope.assetForm);
    }

}]);