/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
    .factory('userFactory',
    ['commonApiFactory','$q','APPCONSTANTS',
        function(commonApiFactory,$q,
                 CONSTANTS){
            var users=[];
        return{
            getUsers:function(){
                var dfd=$q.defer();
                if(users && users.length>0){
                    dfd.resolve(users);
                }
                else {

                    commonApiFactory.
                        getData(CONSTANTS.USERURL)
                        .then(function (response) {
                            users = response;
                            dfd.resolve(users);
                        });
                }
                return dfd.promise;
            }
        }
    }]);