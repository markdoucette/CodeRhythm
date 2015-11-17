/**
 * Portfolio Controller
 */
'use strict';

angular.module('app.portfolio', ['ngRoute'])

    // Routing configuration for this module
    .config(['$routeProvider',function($routeprovider){
        $routeprovider.when('/portfolio', {
            controller: 'PortfolioController',
            templateUrl: 'components/views/portfolioView.html'
        });
    }])

    // Controller definition for this module
    .controller('PortfolioController', ['$scope', function($scope) {

        // In the init method we are declaring all the
        // neccesarry settings and assignments to be run once
        // controller is invoked
        init();

        function init(){

        };

        this.message = "Hello Portfolio!";

    }]);
