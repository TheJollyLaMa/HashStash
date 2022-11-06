app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Angular Animate Demo';
    $scope.show = false;
    $scope.showForm = function() {
        $scope.show = true;
    }
}]);