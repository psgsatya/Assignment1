var my = angular.module('myapp',[]);


my.controller('UserController',['$scope',function($scope){



    $scope.userList = [];
    $scope.addUser = function(param){
        var x = angular.copy(param);
        $scope.userList.push(x);
    };


    $scope.removeUser = function(user){
        $scope.userList.pop(user);
    }

}]);