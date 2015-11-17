/**
 * Books Controller
 */
'use strict';

angular.module('app.books', ['ngRoute'])

// Route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/books', {
            controller: 'BooksController',
            templateUrl: 'components/views/booksView.html'
        })
    }])

// controller
    .controller('BooksController', ['$scope', function($scope) {

    }]);
