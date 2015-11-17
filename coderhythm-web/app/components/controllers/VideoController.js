/**
 * Videos Controller
 */
'use strict'

angular.module('app.video', ['ngRoute'])

// route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/video', {
            controller: 'VideoController',
            templateUrl: 'components/views/videoView.html'
        })
    }])

// controller
    .controller('VideoController', ['$scope', function($scope) {

    }]);
