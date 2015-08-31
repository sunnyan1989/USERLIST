/**
 * Created by Sunny on 2015/8/20.
 */
app.controller('changeUser', function($scope, $routeParams,Users) {
    var id = $routeParams.id;
    $scope.users = Users.list();


    $scope.fName = '';
    $scope.lName = '';
    $scope.gender = '';
    $scope.age = '';
    $scope.passw1='';
    $scope.passw2='';
    $scope.error=false;
    $scope.incomplete=false;



    $scope.fName = $scope.users[id-1].fName;
    $scope.lName = $scope.users[id-1].lName;
    $scope.gender = $scope.users[id-1].gender;
    $scope.age = $scope.users[id-1].age;

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
        $scope.users[id-1].fName = $scope.fName;
        $scope.users[id-1].lName = $scope.lName;
        $scope.users[id-1].gender = $scope.gender;
        $scope.users[id-1].age = $scope.age;
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
