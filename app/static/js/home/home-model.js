angular.module('job_quiz')

.factory('HomeFactory', ['$http', function ($http) {
    return {
      list: function (callback){
        $http({
            method: 'GET',
            url: 'ask.json',
            cache: true
        }).success(callback);
      },
    }
}]);
