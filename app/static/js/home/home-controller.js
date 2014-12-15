angular.module('job_quiz')
.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    // var original = $location.path;
    // $location.path = function (path, reload) {
    //     if (reload === false) {
    //         var lastRoute = $route.current;
    //         var un = $rootScope.$on('$locationChangeSuccess', function () {
    //             $route.current = lastRoute;
    //             un();
    //         });
    //     }
    //     return original.apply($location, [path]);
    // };
}])
.run(['$location', function ($location) {
    a = 0;
}])
.controller('HomeController', ['$scope', '$routeParams', '$location', '$timeout', 'keyboardManager', 'HomeFactory',
    function ($scope, $routeParams, $location, $timeout, keyboardManager, HomeFactory) {
    $scope.askid = $routeParams.askId;
    $scope.back = "#/ask/" + (+$scope.askid-1);
    $scope.next = "#/ask/" + (+$scope.askid+1);
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
      $location.path($scope.back);
      $scope.askId -= 1;
      $scope.back = "#/ask/" + (+$scope.askid-1);
      $scope.$apply();
      return false;
    }

    route_next = function () {
      $location.path($scope.back);
      $scope.askId += 1;
      $scope.next = "#/ask/" + (+$scope.askid+1);
      $scope.$apply();
      return false;
    }

    keys = {
      // 'q': route_back,
      // 'w': route_next,
      // '1': get_answer,
      // '2': get_answer,
      // '3': get_answer,
      // '4': get_answer,
      // '5': get_answer,
      // '6': get_answer,
      // '7': get_answer,
      // '8': get_answer,
      // '9': get_answer
    }

    $scope.$on('$routeChangeStart', function(next, current) {
        console.log("$routeChangeStart")
    });
    for (key in keys){
      keyevents(key, keys[key]);
    };
    $scope.true_class = "answered_true";
    $scope.false_class = "answered_false";
}])


.directive('ask', function(){
  return {
    scope: {
      askid: "&",
      tr: "&",
      f: "&",
      asks: "&",
    },
    restrict: 'A',
    template: '<h1>ASK: {{askid()}}</h1>',
    controller: function ($scope) {
    },
    link: function (scope, element, attrs) {
    }
  };
})



.directive('answer', function(){
  return {
    scope: {
      askid: "&",
      tr: "&",
      f: "&",
      descr: "@",
      correctness: "@",
      index: "@",
    },
    restrict: 'A',
    template: '<a href="#" class="btn btn-block answer_true">{{index}}: {{descr}}</a>',
    controller: function ($scope) {
    },
    link: function (scope, element, attrs) {
      element.bind("mouseenter", function () {
        if (scope.correctness === "true") {
          element.addClass(scope.tr);
        } else {
          element.addClass(scope.f);
        }
      }),
      element.bind("mouseleave", function () {
        if (scope.correctness === "true") {
          element.removeClass(scope.tr);
        } else {
          element.removeClass(scope.f);
        }
      }),
      element.bind("click", function () {
      })
    }
  };
})
