/**
 * Created by kiran on 8/28/2015.
 */
var app = angular.module('custom.directives', []);

app.directive('myCard', function() {
    return {
        scope: {
            title: '=myTitle',
            pic: '=myPic',
            content: '@myContent'
        },
        templateUrl: 'app/directives/myCard.html'
    };
});


app.directive('myCardWithTransclude', function() {
    return {
        scope: {
            title: '=myTitle',
            pic: '=myPic'
        },
        templateUrl: 'app/directives/myCardWithTransclude.html',
        transclude: true,
        link: function(scope, el, attrs, ctrl, transclude) {
            el.find('div').append(transclude());
        }
    };
});

app.directive('customCardWithController',function(){
   return{
       scope:{
           title:'=myTitle',
           pic:"=myPic",
           templateUrl: 'app/directives/myCardWithTransclude.html',
           transclude:true,
       }

   }
});
