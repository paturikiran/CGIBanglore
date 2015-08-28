/**
 * Created by kiran on 8/28/2015.
 */
widget.directive('customDatePicker',[function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            var mindate=attrs['mindate'];
            var maxdate=attrs['maxdate']
            element.datepicker({maxDate:maxdate,minDate:mindate});
        }
    }
}]);