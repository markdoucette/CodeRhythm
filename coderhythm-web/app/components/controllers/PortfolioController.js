/**
 * Portfolio Controller
 * @author Mark Doucette
 */
'use strict';

angular.module('app.portfolio', ['ngRoute'])

    // Routing configuration for this module
    .config(['$routeProvider', function ($routeprovider) {
        $routeprovider.when('/portfolio', {
            controller: 'PortfolioController',
            templateUrl: 'components/views/portfolioView.html'
        });
    }])

    // Controller definition for this module
    .controller('PortfolioController', ['$scope', function ($scope) {
        this.message = "Inside PortfolioController"; // Message for unit test
    }]);
