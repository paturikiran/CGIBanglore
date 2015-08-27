/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .factory('locationFactory',['$http',function($http){
        return{
            getLocations:function(){
                return $http.get('app/data/location.json')
            }
        }
    }]);