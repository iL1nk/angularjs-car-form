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

        // adding new vehicle to the array
        $scope.addNewVehicle = function() {
            if ($scope.newCarTemplate.vehicleID != null && $scope.newCarTemplate.carName != null && $scope.newCarTemplate.carName != null && $scope.newCarTemplate.carModel != null && $scope.newCarTemplate.carYear != null && $scope.newCarTemplate.carType != null) {
                //Push the vehicle data to the array of cars
                $scope.carList.push({
                    carName:    $scope.newCarTemplate.carName,
                    carModel:   $scope.newCarTemplate.carModel,
                    carYear:    $scope.newCarTemplate.carYear,
                    carType:    $scope.newCarTemplate.carType,
                    vehicleID:  $scope.newCarTemplate.vehicleID,
                });
            }

            $scope.closeActiveWindow();

            // clear temp
            Object.keys($scope.newCarTemplate).forEach((key) => {
                $scope.newCarTemplate[key] = null;
            });
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
                var isValidated = true;
                Object.keys($scope.carList[carIndex]).forEach((key) => {
                    if (isValidated && $scope.carList[carIndex][key] === undefined) {
                        isValidated = false;
                    }
                });
                
                isValidated && $scope.closeActiveWindow();
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