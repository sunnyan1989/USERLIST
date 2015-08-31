/**
 * Created by Sunny on 2015/8/20.
 */
app.controller('newUser', function($scope,Users) {
   $scope.users = Users.list();

    $scope.incomplete = true;
    $scope.fName = '';
    $scope.lName = '';
    $scope.gender = '';
    $scope.age = '';
    $scope.passw1='';
    $scope.passw2='';
    $scope.error = false;

    $scope.createUser = function() {
        Users.create($scope.fName,$scope.lName,$scope.gender,$scope.age);
    };


    $scope.$watch('passw1',function() {$scope.test();});
    $scope.$watch('passw2',function() {$scope.test();});
    $scope.$watch('fName', function() {$scope.test();});
    $scope.$watch('lName', function() {$scope.test();});
    $scope.$watch('gender', function() {$scope.test();});
    $scope.$watch('age', function() {$scope.test();});

    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ( (!$scope.fName.length ||
            !$scope.lName.length ||
            !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
});