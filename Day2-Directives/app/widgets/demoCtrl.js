/**
 * Created by kiran on 8/28/2015.
 */

widget.controller('demoCtrl',['$scope',
    function($scope){
    $scope.buttonTitle ="Show";
        $scope.clickOnCtrl = function(){
          console.log($scope.buttonTitle);
        };

}]);