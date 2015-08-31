/**
 * Created by Sunny on 2015/8/20.
 */
app.controller('userCtrl', function($scope, Users) {
    $scope.users = Users.list();
    // Sort Users
    $scope.predicate = 'age';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };


    // Pagination
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.maxSize = 5;

    $scope.editUser = function(id) {

        Users.edit(id, fName, lName, gender, age);


    };
    //When the *delete* button is clicked.
    $scope.deleteUser = function(id) {
       Users.delete(id);
    };
});