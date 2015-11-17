/**
 * Contact Controller
 * @author Mark Doucette
 */
'use strict';

angular.module('app.contact', ['ngRoute'])

// routes
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            controller: 'ContactController',
            templateUrl: 'components/views/contactView.html'
        })

    }])

// controller
    .controller('ContactController', ['$scope', function ($scope) {
        this.message = "Inside ContactController"; // Message for unit test
    }]);
