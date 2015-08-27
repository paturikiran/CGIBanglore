/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .factory('userFactory',
    ['$http',function($http){
        return{
            getUsers:function(){
                return $http.get('app/data/users.json')
            }
        }
    }]);