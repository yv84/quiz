(function () {
    "use strict";

angular.module('job_quiz')

.controller('HomeController', [
  '$scope', '$routeParams', '$location', '$timeout',
  'HomeFactory', 'hotkeys',
    function (
  $scope, $routeParams, $location, $timeout,
  HomeFactory, hotkeys) {
    $scope.askid = $routeParams.askId;
    $scope.back = "#/ask/" + (+$scope.askid-1);
    $scope.next = "#/ask/" + (+$scope.askid+1);
    $scope.asks = HomeFactory;
    $scope.ask = (function () {
        var _ask = $scope.asks[+$scope.askid-1];
        if (_ask) {return _ask}
        else return {
            number: '?',
            question: "",
            answers: [
                {
                    answer: '',
                    correct: false
                }
            ]
        };
    })();

    $scope.number_keys = {};
    $scope.setNumeralKeys = function (index, cb) {
        if (index in [1,2,3,4,5,6,7,8,9]) {
            $scope.number_keys[index + ""] = cb;
        } else {console.error("error")};
        hotkeys.bindTo($scope).add({
            combo: index + "",
            description: index + "",
            callback: function() {
                $scope.number_keys[index]();
            }
        })
    };

    hotkeys.bindTo($scope)
      .add({
        combo: 'q',
        description: 'Route back',
        callback: function() {
          route_back();
        }
      })
      .add({
        combo: 'w',
        description: 'Route back',
        callback: function() {
          route_next();
        }
      })

    var route_back = function () {
      $scope.askid = +$scope.askid - 1;
      var path = "/ask/" + (+$scope.askid);
      $location.path(path);
      $scope.back = "#/ask/" + (+$scope.askid-1);
      return false;
    }

    var route_next = function () {
      $scope.askid = +$scope.askid + 1;
      var path = "/ask/" + (+$scope.askid);
      $location.path(path);
      $scope.next = "#/ask/" + (+$scope.askid+1);
      return false;
    }
}])


.directive('ask', function(){
  return {
    scope: {
        askid: "&",
        askobj: "&",
    },
    restrict: 'A',
    templateUrl: 'views/home/ask.html',
    controller: function ($scope) {
        $scope.question = $scope.askobj().question;
    },
    link: function (scope, element, attrs) {
    }
  };
})



.directive('answer', function(){
  return {
    scope: {
      descr: "@",
      correctness: "@",
      index: "@",
      numeralkeys: "&",
    },
    restrict: 'A',
    templateUrl: 'views/home/answer.html',
    controller: function ($scope) {
        $scope.answered_true = "answered_true";
        $scope.answered_false = "answered_false";
        $scope.activate = function (element) {
            if ($scope.correctness === "true") {
                element.addClass($scope.answered_true);
            } else {
                element.addClass($scope.answered_false);
            }
        };
        $scope.deactivate = function (element) {
            if ($scope.correctness === "true") {
                element.removeClass($scope.answered_true);
            } else {
                element.removeClass($scope.answered_false);
            }
        }
    },
    link: function (scope, element, attrs) {
        element.bind("click", function () {
            scope.activate(element);
            return false;
        });
        var hotKeyCallback = function () {
            scope.activate(element);
        }
        scope.numeralkeys({index: scope.index,
            cb: hotKeyCallback
        });
    }
  };
})



}());
