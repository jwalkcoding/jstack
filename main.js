myApp.controller('mainCtrl', function ($scope) {

    $scope.appName = 'Case Resolution Management System';

    $scope.startSearchDate=null;

    $scope.openStartDatePicker = function() {
        $scope.startDatePickerPopStatus.opened = true;
      };

      $scope.startDatePickerPopStatus = {
        opened: false
      };


    $scope.records = [{
        "Name": "Alfreds Futterkiste",
        "Country": "Germany"
    }, {
        "Name": "Berglunds snabbköp",
        "Country": "Sweden"
    }, {
        "Name": "Centro comercial Moctezuma",
        "Country": "Mexico"
    }, {
        "Name": "Ernst Handel",
        "Country": "Austria"
    }];

});