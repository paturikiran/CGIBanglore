/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .factory('locationFactory',['$http','$q',
        function($http,$q){
        return{
            getLocations:function(){
                var dfd= $q.defer();
                $http.get('app/data/location.json')
                    .error(function(response){
                        dfd.reject(response);
                    }).success(function(response){
                        dfd.resolve(response);
                    });
                return dfd.promise;
            }
        }
    }]);