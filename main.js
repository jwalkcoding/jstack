myApp.controller('mainCtrl', function ($scope) {

    $scope.appName = 'Case Resolution Management System';

    $scope.startDatePicker = {
        dateValue: null,
        open: function () {
            this.popUpStatus.opened = true;
        },
        popUpStatus: {
            opened: false
        },
        placeholder: 'Start Date',
        controlId: 'startDate'
    }
    $scope.endDatePicker = {
        dateValue: null,
        open: function () {
            this.popUpStatus.opened = true;
        },
        popUpStatus: {
            opened: false
        },
        placeholder: 'End Date',
        controlId: 'endDate'
    }

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