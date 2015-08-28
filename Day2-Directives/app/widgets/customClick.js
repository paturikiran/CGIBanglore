/**
 * Created by kiran on 8/28/2015.
 */
widget.directive('customClick',[function(){

    return{
        //template:"<button class='btn btn-primary'>Click</button>",
        templateUrl:'app/widgets/button.html',
        restrict:"AEC",
        //controller:'demoCtrl',
        link: function(scope,element,attrs){
            element.bind('click',function(){
               element.find('h1').toggle();
                //scope.$apply(function () {
                    scope.buttonTitle="Hide";

                //});
            });
        }
    }
}]);