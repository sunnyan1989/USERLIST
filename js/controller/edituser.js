/**
 * Created by Sunny on 2015/8/20.
 */
app.controller('changeUser', function($scope, $routeParams,Users) {
    var id = $routeParams.id;
    $scope.user = Users.get(id);


    
    $scope.passw1='';
    $scope.passw2='';
    $scope.error=false;
    $scope.incomplete=false;


  $scope.fName = $scope.user.fName;
    $scope.lName = $scope.user.lName;
    $scope.gender = $scope.user.gender;
    $scope.age = $scope.user.age;

    $scope.editUser = function(){
        Users.edit(id);
    };

    $scope.$watch('passw1',function() {$scope.test();});
    $scope.$watch('passw2',function() {$scope.test();});
    $scope.$watch('fName', function() {$scope.test();});
    $scope.$watch('lName', function() {$scope.test();});
    $scope.$watch('gender', function() {$scope.test();});
    $scope.$watch('age', function() {$scope.test();});

    $scope.incomplete = true;
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


    $scope.saveChange = function() {
        $scope.user.fName = $scope.fName;
        $scope.user.lName = $scope.lName;
        $scope.user.gender = $scope.gender;
        $scope.user.age = $scope.age;
        $scope.edit = false;
        $scope.delete = false;
        $scope.incomplete = true;
        $scope.fName = '';
        $scope.lName = '';
        $scope.gender = '';
        $scope.age = '';
        $scope.passw1 = '';
        $scope.passw2 = '';
        alert("You have changed the user!");
    };
});
