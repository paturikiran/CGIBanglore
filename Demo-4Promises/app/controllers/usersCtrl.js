
/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
.controller('userCtrl',['$scope','userFactory',function($scope,userFactory){

        function init(){
            $scope.users=[];
            getUsers();
        }

        function getUsers(){
            userFactory.getUsers()
                .then(function(response){
                 $scope.users= response.users;
            })
        }
        init();
    }]);