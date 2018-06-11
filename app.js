// MODULE
var todoListApp = angular.module('todoListApp', ['ngRoute', 'ngResource']);

// ROUTES
todoListApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/completed.html',
        controller: 'tasksController'
    })

    .when('/completed', {
        templateUrl: 'pages/completed.html',
        controller: 'completedController'
    })
    
    .when('/inProgress', {
        templateUrl: 'pages/in_progress.html',
        controller: 'inProgressController'
    })
    
});

// CONTROLLERS

todoListApp.controller('inProgressController', ['$scope', function($scope) {
    
}]);

todoListApp.controller('completedController', ['$scope', function ($scope) {

}]);
