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
        var self = this;
        self.message = "Inside HomeController"; // Message for unit test
        self.articles = {}

        $http.get("http://localhost:8080/api/articles")
            .success(function (data) {
                alert("JSON DATA: Title: " + data[0].title + ", ID: " + data[0].id);
                console.log("Content: " + data[0].content);
            });

    }]);