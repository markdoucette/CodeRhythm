/**
 * About Controller
 * @author Mark Doucette
 */
'use strict';

angular.module('app.about', ['ngRoute'])

// Routing configuration for this module
    .config(['$routeProvider', function ($routeprovider) {
        $routeprovider.when('/about', {
            controller: 'AboutController',
            templateUrl: 'components/views/aboutView.html'
        });
    }])

// Controller definition for this module
    .controller('AboutController', ['$scope', function ($scope) {
        this.message = "Inside AboutController"; // Message for unit test
    }]);