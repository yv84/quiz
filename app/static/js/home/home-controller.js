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

    route_back = function () {
      $scope.askid = +$scope.askid - 1;
      path = "/ask/" + (+$scope.askid);
      $location.path(path);
      $scope.back = "#/ask/" + (+$scope.askid-1);
      return false;
    }

    route_next = function () {
      $scope.askid = +$scope.askid + 1;
      path = "/ask/" + (+$scope.askid);
      $location.path(path);
      $scope.next = "#/ask/" + (+$scope.askid+1);
      return false;
    }

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
      numeralkeys: "&",
    },
    restrict: 'A',
    template: '<a href="#" class="btn btn-block answer_true">{{index}}: {{descr}}</a>',
    controller: function ($scope) {
        $scope.activate = function (element) {
            if ($scope.correctness === "true") {
                element.addClass($scope.tr);
            } else {
                element.addClass($scope.f);
            }
        };
        $scope.deactivate = function (element) {
            if ($scope.correctness === "true") {
                element.removeClass($scope.tr);
            } else {
                element.removeClass($scope.f);
            }
        }
    },
    link: function (scope, element, attrs) {
        element.bind("click", function () {
            scope.activate(element);
            return false;
        });
        hotKeyCallback = function () {
            scope.activate(element);
        }
        scope.numeralkeys({index: scope.index,
            cb: hotKeyCallback
        });
    }
  };
})
