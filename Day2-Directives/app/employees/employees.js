/**
 * Created by kiran on 8/28/2015.
 */
angular.module('employee',[])
     .controller('employeeCtrl',['$scope',
        function($scope){
            $scope.heading="CGI Employee Site";
            $scope.tableHeaders = [
                {name:"First Name"},
                {name:"Last Name"},
                {name:"Email Id"}
            ];
            $scope.employees =[
                {firstName:"Kiran",lastName:"PVS",email:"abcd@gmail.com"},
                {firstName:"John",lastName:"PVS",email:"abcd@gmail.com"},
                {firstName:"Karrne",lastName:"PVS",email:"abcd@gmail.com"},
                {firstName:"xyz",lastName:"PVS",email:"abcd@gmail.com"}
            ];
            $scope.editEmployee =function(){
                console.log("I am called from the directive");
            }
        }]);