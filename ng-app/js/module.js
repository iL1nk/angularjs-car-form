var app = angular.module('vehicleListApp', [])
    .controller('vehicleListCtrl', function($scope) {
        // create dummy data for application
        $scope.carList = [{
            carName:    'BMW',
            carModel:   '320d',
            carYear:    '2015',
            carType:    'Sedan',
            vehicleID:  'WWE346',
        }, {
            carName:    'Ford',
            carModel:   'Mustang',
            carYear:    '1969',
            carType:    'Cabrio',
            vehicleID:  '1SLQWE',
        }, {
            carName:    'Dodge',
            carModel:   'Challenger',
            carYear:    '1970',
            carType:    'Coupe',
            vehicleID:  'FJM47A',
        }, {
            carName:    'Chevrolet',
            carModel:   'Corvette',
            carYear:    '2017',
            carType:    'Coupe',
            vehicleID:  'GDDMIA',
        }, {
            carName:  'GMC',
            carModel: 'Vandura',
            carYear:    '1983',
            carType:    'Van',
            vehicleID:  'A-TEAM',
        }];

        // $scope.displayWindow = [
        //     'Vehicle ID',
        //     'Vehicle Name',
        //     'Vehicle Model',
        //     'Year of manufacture',
        //     'Vehicle Type',
        // ];

        $scope.activeWindow = {
            edit: false,
            add: false,
            display: false,
        }

        // identify car item to show data info
        $scope.carItemIndex = null;

        $scope.openCarInfo = function(index) {
            $scope.carItemIndex = index;
            $scope.setActiveTab('page1');
            $scope.setActiveWindow('display');
        };

        $scope.setActiveWindow = function(actionType) {
            Object.keys($scope.activeWindow).forEach((key) => {
                $scope.activeWindow[key] = key === actionType ? true : false;
            })
        };

        // set car item class as active 
        $scope.isCarActive = function(carIndex) {
            return $scope.carItemIndex === carIndex;
        };

        // set active tab
        $scope.setActiveTab = function(id) {
            $scope.activeTabId = id;
        }

        // check if Page1 or Page2 is active tab
        $scope.isActiveTab = function(id) {
            return $scope.activeTabId === id;
        }

        // close the active tab
        $scope.closeActiveWindow = function() {
            $scope.carItemIndex = null;
            $scope.setActiveWindow();
        }

        // open new car window
        $scope.openNewCarWindow = function() {
            $scope.carItemIndex = null;
            $scope.setActiveTab('page1');
            $scope.setActiveWindow('add');
        }
    });