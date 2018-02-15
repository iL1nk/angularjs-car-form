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

        $scope.activeWindow = {
            edit: false,
            add: false,
            display: false,
        }
              
        $scope.newCarTemplate = {
            vehicleID: null,
            carName: null,
            carModel: null,
            carYear: null,
            carType: null,
          };

        // identify car item to show data info
        $scope.carItemIndex = false;

        $scope.openCarInfo = function(index) {
            $scope.carItemIndex = index;
            $scope.setActiveTab('page1');
            $scope.setActiveWindow('display');
        };

        $scope.setActiveWindow = function(actionType) {
            Object.keys($scope.activeWindow).forEach((key) => {
                $scope.activeWindow[key] = key === actionType;
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

        // clear template data
        $scope.clearTemplateData = function() {
            Object.keys($scope.newCarTemplate).forEach((key) => {
                $scope.newCarTemplate[key] = null;
            });
        }

        // close the active tab
        $scope.closeActiveWindow = function() {
            $scope.carItemIndex = null;
            $scope.setActiveWindow();
            $scope.clearTemplateData();
        }

        // open new car window
        $scope.openNewCarWindow = function() {
            $scope.carItemIndex = null;
            $scope.setActiveTab('page1');
            $scope.setActiveWindow('add');
        }

        // adding new vehicle to the array
        $scope.addNewVehicle = function() {
            if (['vehicleID',
            'carName',
            'carModel',
            'carYear',
            'carType'].every(function(prop){ return $scope.newCarTemplate[prop] != null })) {
                //Push the vehicle data to the array of cars
                $scope.carList.push({
                    carName:    $scope.newCarTemplate.carName,
                    carModel:   $scope.newCarTemplate.carModel,
                    carYear:    $scope.newCarTemplate.carYear,
                    carType:    $scope.newCarTemplate.carType,
                    vehicleID:  $scope.newCarTemplate.vehicleID,
                });

                $scope.closeActiveWindow();
                $scope.clearTemplateData();
            }
        };

        // open edit acr data window
        $scope.editVehicle = function(carIndex) {
            if (carIndex !== false && carIndex !== null) {
                $scope.setActiveTab('page1');
                $scope.setActiveWindow('edit');
            }
        }

        // save editted data and close the window
        $scope.saveEdittedVehicle = function(carIndex) {
            if (carIndex !== false && carIndex !== null) {
                var isValid = true;
                Object.keys($scope.carList[carIndex]).forEach((key) => {
                    if (isValid && $scope.carList[carIndex][key] === undefined) {
                        isValid = false;
                    }
                });
                
                isValid && $scope.closeActiveWindow();
            }
        }

        // delete selected vehicle from the list
        $scope.deleteSelectedVehicle = function(carIndex) {
            if (carIndex !== false && $scope.carList[carIndex] !== undefined) {
                $scope.carList.splice(carIndex, 1);

                $scope.closeActiveWindow();
                $scope.carItemIndex = null;
            }
        }
    });