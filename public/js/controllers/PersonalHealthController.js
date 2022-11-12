app.controller('PersonalHealthController', ['$scope', '$location', function($scope, $location) {
    $scope.title = 'Personal Health Form';

    // send personal health form
    $scope.sendPersonalHealthForm = function() {
        $location.path('/success/personalHealthForm_success');
        console.log($scope.personalHealthForm);
    }

}]);