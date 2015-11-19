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
    .controller('HomeController', ['$scope', '$http', function ($scope, $http) {
        this.message = "Inside HomeController"; // Message for unit test

        $http.get("http://localhost:8080/api/articles")
            .success(function(data) {
                console.log(data[0].title);
            });
    }]);