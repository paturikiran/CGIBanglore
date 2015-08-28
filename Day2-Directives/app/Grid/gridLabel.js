/**
 * Created by kiran on 8/28/2015.
 */
grid.directive("gridHeader",[function(){
    return{
        template:"<h1>{{siteHeader}}</h1>",
        scope:{
            siteHeader:"@"
        },
       link:function(scope){
            console.log(scope);
        }
    }
}]);