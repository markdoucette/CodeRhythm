/**
 * Home Controller
 * @author Mark Doucette
 */
'use strict';

angular.module('app.home', ['ngRoute'])

// Routing configuration for this module
    .config(['$routeProvider', function ($routeprovider) {
        $routeprovider.when('/', {
            controller: 'HomeController',
            templateUrl: 'components/views/homeView.html'
        });
    }])

// Controller definition for this module
    .controller('HomeController', ['$scope', function ($scope) {
        this.message = "Inside HomeController"; // Message for unit test
    }]);