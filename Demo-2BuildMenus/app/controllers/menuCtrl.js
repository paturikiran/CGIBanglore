/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .controller('menuCtrl', ['$scope','menuService',
        function ($scope,menuService) {
        $scope.navItems = menuService.menuItems;

        $scope.loadView=function(menu){
            $scope.templateView = menu.template;
        }

    }]);