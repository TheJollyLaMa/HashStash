app.controller('InventoryController', ['$scope', '$location', function($scope, $location) {
    $scope.title = 'Inventory Form';

    // send inventory form
    $scope.sendInventoryForm = function() {
        $location.path('/success/inventoryForm_success');
        console.log($scope.inventoryForm);
    }

}]);