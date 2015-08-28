/**
 * Created by kiran on 8/28/2015.
 */
var grid = angular.module('customGrid',[]);
grid.directive('customTable',[ function(){
    return{
        templateUrl:"app/grid/table.html",
        scope:{
            data:'=',
            headings:'=',
            edit:'&'
        }

    }

}]);