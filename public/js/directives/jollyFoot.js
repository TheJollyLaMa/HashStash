// footer directive for the jollyfoot.html in angularjs
app.directive('jollyFoot', function() {
    return {
        restrict: 'E',
        scope: {
            scope: '=',
            data: '='
        },
        controller: "JollyController",
        templateUrl: 'js/directives/jollyFoot.html',
        link: function(scope, elem, attrs ) {
            scope.sayHi = function() {
                alert("Hi! This alert is from the jollyFoot directive.\n\nToday is "+ scope.data.date + ".\n " + scope.data.name + " is " + scope.data.age + " years old and not getting any younger.\n");
            };
        }
    };
    
});
