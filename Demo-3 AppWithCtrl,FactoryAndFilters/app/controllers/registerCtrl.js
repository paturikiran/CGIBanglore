/**
 * Created by kiran on 8/27/2015.
 */
/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .controller('registerCtrl',
    ['$scope','locationFactory',
        function ($scope,locationFactory) {
        locationFactory.getLocations()
            .success(function(response){
                $scope.cities=response.location;
            })
            .error(function(response){
                console.log(response);
            });

        $scope.handleChange=function(){
            console.log($scope.selectedCity);
        }



    }]);