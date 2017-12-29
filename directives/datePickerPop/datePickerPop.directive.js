myApp.directive('datePickerPop',function(){

return{

    templateUrl:'/directives/datePickerPop/datePickerPop.tpl.html',
    replace:true,
    scope:{
        
        myOpenDatePickerPop:'&',
        myPlaceholder:'@',
        myIsOpenedProp:'=',
        mySearchDate:'=',
        myDatePickerId:'@'
    }
}

});