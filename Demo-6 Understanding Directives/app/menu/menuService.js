/**
 * Created by kiran on 8/27/2015.
 */
angular.module('cgiTwitter')
.service('menuService',[function(){
        this.menuItems =[
            {name: "Home",template:"app/templates/home.html"},
            {name: "Users",template:"app/templates/users.html"},
            {name: "Tweets",template:"app/templates/tweets.html"},
            {name: "Register",template:"app/templates/register.html"}
        ];
    }])