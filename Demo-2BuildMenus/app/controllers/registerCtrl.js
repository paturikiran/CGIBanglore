/**
 * Created by kiran on 8/27/2015.
 */
/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .controller('registerCtrl', function ($scope) {
        $scope.cities=[
            {"state":"Karnataka","city":"Bangalore"},
            {"state":"Karnataka","city":"Mangalore"},
            {"state":"Andhra Pradesh","city":"Vijayawada"},
            {"state":"Andhra Pradesh","city":"Guntur"},
            {"state":"Uttar Pradesh","city":"Lucknow"},
            {"state":"Uttar Pradesh","city":"Kanput"}
        ];
        $scope.handleChange=function(){
            console.log($scope.selectedCity);
        }
        console.log($scope);


    });