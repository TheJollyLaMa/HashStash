app.controller('JollyController', ['$scope', function($scope) {
    $scope.title = "HashStash - Blockchain for the Rest of Us";
    $scope.HashStashNav = [
        {name: "Home", url: "#!/home"},
        {name: "Contact", url: "#!/contact"},
        {name: "Inventory", url: "#!/inventory"}
    ];
    $scope.data = {
        "name": "Jolly",
        // date in dd MON YYYY format
        "date": new Date().toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'}),
        // date minus birthdate including month and day
        "age": Math.floor((new Date() - new Date(1985, 04, 21)) / 31557600000)
    };

    $scope.showContactForm = false;
    $scope.showInventoryForm = false;
    $scope.toggleContactForm = function() {
        $scope.showContactForm = !$scope.showContactForm;
    }
    $scope.toggleInventoryForm = function() {
        $scope.showInventoryForm = !$scope.showInventoryForm;
    }
}]);
