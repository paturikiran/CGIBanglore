/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .controller('menuCtrl', function ($scope) {
        $scope.navItems = [
            {name: "Home",template:"app/templates/home.html"},
            {name: "Users",template:"app/templates/users.html"},
            {name: "Tweets",template:"app/templates/tweets.html"},
            {name: "Register",template:"app/templates/register.html"}
        ];

        $scope.loadView=function(menu){
            $scope.templateView = menu.template;
        }

    });