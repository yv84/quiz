angular.module('job_quiz')

  .controller('HomeController', ['$scope', '$routeParams', '$timeout', 'keyboardManager', 'HomeFactory',
    function ($scope, $routeParams, $timeout, keyboardManager, HomeFactory) {
      $scope.askId = $routeParams.askId;
      $scope.back = "#/ask/" + (+$scope.askId-1);
      $scope.next = "#/ask/" + (+$scope.askId+1);
      $scope.asks = HomeFactory;

    keyevents = function(key, callback){
      keyboardManager.bind(key, function() {
        console.log(key);
        callback(key);
        }, {
  		  'type': 'keyup',
  	  });
    };

    get_answer = function (index) {
      if ($($("#answers>p a").get([+index-1])).hasClass('answer_true')) {
        $($("#answers>p a").get([+index-1])).addClass('answered_true')
      }
      else if ($($("#answers>p a").get([+index-1])).hasClass('answer_false')) {
        $($("#answers>p a").get([+index-1])).addClass('answered_false')
      };
    }

    route_back = function () {
      console.log('back');
      // $('#back').trigger("click");
    }

    route_next = function () {
      console.log('next');
      // $('#next').trigger("click");
    }

    keys = {
      'q': route_back,
      'w': route_next,
      '1': get_answer,
      '2': get_answer,
      '3': get_answer,
      '4': get_answer,
      '5': get_answer,
      '6': get_answer,
      '7': get_answer,
      '8': get_answer,
      '9': get_answer
    }
    for (key in keys){
      keyevents(key, keys[key]);
    };
}])
