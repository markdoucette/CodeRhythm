/**
 * Books Controller
 * @author Mark Doucette
 */
'use strict';

angular.module('app.books', ['ngRoute'])

// Route
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/books', {
            controller: 'BooksController',
            templateUrl: 'components/views/booksView.html'
        })
    }])

// controller
    .controller('BooksController', ['$scope', function ($scope) {
        this.message = "Inside BookController"; // Message for unit test
    }]);
