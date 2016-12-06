app.directive('scrollPosition', [
    function() {
        return {
            restrict: 'AE',
            scope: {
                scrollPosition: '='
            },
            link: function($scope, $element, $attribute) {
                var elem = $element[0];

                $element.on('scroll', scrollEvent);

                function scrollEvent() {
                    //  this is the value of scroll top
                    console.log(elem.scrollTop);

                    $scope.scrollPosition = elem.scrollTop;

                    $scope.$apply();
                }

                $scope.$on('$destroy', function() {
                    $element.off('scroll', scrollEvent);
                })
            }
        }
    }
]);