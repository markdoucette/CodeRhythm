/**
 * Contact Controller
 */

angular.module('app.contact', ['ngRoute'])

// routes
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            controller: 'ContactController',
            templateUrl: 'components/views/contactView.html'
        })

    }])

// controller
    .controller('ContactController', ['$scope', function($scope) {

        init();

        function init() {

        }

        this.message = "Hello Contact!";

    }]);
