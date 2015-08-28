/**
 * Created by kiran on 8/28/2015.
 */
widget.directive('mainDirective',[function(){
    return{
        restrict:"E",
        /*link:{
            pre:function(scope,element,attrs){
                console.log("PreLink-->Main")
            },
            post:function(scope,element,attrs){
                console.log("PostLink-->Main")
            }
        }*/
        compile:function(element,attrs){
          console.log(element);
        },
        link:function(scope,element,attrs){
            scope.dad="Kiran";
        }
    }
}]);

/**
 * Created by kiran on 8/28/2015.
 */
widget.directive('childDirective',[function(){
    return{
        restrict:"E",
        compile:function(element,attrs){
            console.log(element);
        },
        link:function(scope){
                console.log(scope);
        }

    }
}]);