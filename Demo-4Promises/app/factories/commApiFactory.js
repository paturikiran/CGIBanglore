/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .factory('commonApiFactory',
    ['$http','$q',function($http,$q){
        return{
          getData:function(url){
                var dfd=$q.defer();
                $http.get(url)
                    .success(function(response){
                        dfd.resolve(response);
                    }).error(function(response){
                        dfd.reject(response);
                    });
                return dfd.promise;
            }
        }
    }]);