var app = angular.module('vehicleListApp', [])
    .controller('vehicleListCtrl', function($scope) {
        // create dummy data for application
        $scope.carList = [{
            carName:  'BMW',
            carModel: '320d',
        }, {
            carName:  'Ford',
            carModel: 'Mustang',
        }, {
            carName:  'Dodge',
            carModel: 'Challenger',
        }, {
            carName:  'Chevrolet',
            carModel: 'Corvette',
        }, {
            carName:  'Chevrolet',
            carModel: 'Camarro',
        }];

        // identify car item to show data info
        $scope.carItemIndex = null;
        $scope.openCarInfo = function(index) {
            $scope.carItemIndex = index;
        };

        // check if this 
        $scope.isCarActive = function(carItemIndex) {
            return $scope.carItemIndex === carItemIndex;
        };

        // set active tab
        $scope.setActiveTab = function(event) {
            var elementId = event.target.parentNode.id || 'page1';
            document.querySelector('.nav-tabs li.active[role="presentation"]').length && document.querySelector('.nav-tabs li.active[role="presentation"]').classList.remove('active');
            document.querySelector(elementId).classList.add('active');
        }
    });