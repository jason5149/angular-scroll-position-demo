app.controller('MessageCtrl', [
    '$scope',
    function($scope) {
        $scope.title = 'MESSAGE PAGE';

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