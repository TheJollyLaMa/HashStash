app.controller('ResidenceHealthController', ['$scope', '$location', function($scope, $location) {
    $scope.title = 'Residence Health Form';


    // send residence health form
    $scope.sendResidenceHealthForm = function() {
        $location.path('/success/residenceHealthForm_success');
        console.log($scope.residenceHealthForm);
    }
}]);