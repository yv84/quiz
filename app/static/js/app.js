// Declare app level module which depends on filters, and services
angular.module('job_quiz', ['ngResource', 'ngRoute',
            'ui.bootstrap', 'ui.date', 'cfp.hotkeys'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/ask/:askId', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'})
      .otherwise({redirectTo: '/ask/1'});
  }]);
