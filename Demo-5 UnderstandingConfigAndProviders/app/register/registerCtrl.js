/**
 * Created by kiran on 8/27/2015.
 */
/**
 * Created by kiran on 8/27/2015.
 */
angular.module('registerModule')
    .controller('registerCtrl',
    ['$scope','locationFactory',
        function ($scope,locationFactory) {
        locationFactory.getLocations()
            .then(function(response){
                $scope.cities=response.location;
            }).finally(function(response){
                console.log("iam called finally");
            });

        $scope.handleChange=function(){
            console.log($scope.selectedCity);
        }



    }]);