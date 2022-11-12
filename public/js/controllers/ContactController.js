app.controller('ContactController', ['$scope', '$location', function($scope, $location) {
    $scope.title = 'Contact Form';

    // send contact form
    $scope.sendContactForm = function() {
        $location.path('/success/contactForm_success');
        console.log($scope.contactForm);
    }
}]);