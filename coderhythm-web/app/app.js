/**
 * Main application file for Coderhythm.net web component
 * @author Mark Doucette
 */
'use strict';

//  Application module
var app = angular.module('app', ['ngRoute',
    'app.home', 'app.about', 'app.portfolio', 'app.contact', 'app.video', 'app.books']);

app.config(function ($routeProvider, $locationProvider, $httpProvider) {

    // Default route
    $routeProvider.otherwise({redirectTo: '/'});

    // Settings for http communications
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});