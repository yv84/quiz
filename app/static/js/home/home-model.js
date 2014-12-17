angular.module('job_quiz')

.factory('HomeFactory', ['$http', function ($http) {
    url_path =  window.location.pathname + '/ask.json';
    console.log("url_path", url_path)
    return {
      list: function (callback){
        $http({
            method: 'GET',
            url: url_path,
            cache: true
        }).success(callback);
      },
    }
}]);
