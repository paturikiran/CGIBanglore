/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .controller('menuCtrl', function ($scope) {
        $scope.welcomeMessage = "Hello CGI I am the controller";
        $scope.clicked = function () {
            console.log($scope);
        };
        $scope.navItems = [
            {name: "Home"},
            {name: "Users"},
            {name: "Tweets"}
        ];

    });