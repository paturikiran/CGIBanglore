/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
       .filter('phoneFormatter',[function() {
        return function (input, filteringCriteria) {
            var phoneNumber= input;
             if(filteringCriteria=='US' && phoneNumber.length==10 ){
                 var firstThree = input.substring(0,3);
                 var  secondThree = input.substring(3,6);
                 var final = input.substring(6,10);
                 return "("+firstThree+")("+secondThree+")-"+final;
             }
            return phoneNumber;
        }

    }]);
