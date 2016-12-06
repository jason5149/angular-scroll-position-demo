app.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        $scope.title = 'HOME PAGE';

        $scope.position = 0;

        $scope.arr = [];

        function init() {
            var i = 1;

            while ($scope.arr.length < 100) {
                $scope.arr.push(i++);
            }
        }

        init();
    }
])