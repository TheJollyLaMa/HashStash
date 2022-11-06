// header directive for the jollyhead.html in angularjs
app.directive('jollyHead', function() {
    return {
        restrict: 'E',
        scope: {
            navbar: '=',
            data: '='
        },
        controller: "JollyController",
        templateUrl: 'js/directives/jollyHead.html',
        link: function(scope, elem, attrs ) {
            scope.sayHi = function() {
                alert("Hi! This alert is from the jollyHead directive.\n\nToday is "+ scope.data.date + ".\n " + scope.data.name + " is " + scope.data.age + " years old and not getting any younger.\n jrlamanna@gmail.com");
            };
        }
    }
});
