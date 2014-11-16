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
        callback();
        }, {
  		  'type': 'keyup',
  	  });
    };
    pass = function () {
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
      '1': pass,
      '2': pass,
      '3': pass,
      '4': pass,
      '5': pass,
      '6': pass,
      '7': pass,
      '8': pass,
      '9': pass
    }
    for (key in keys){
      keyevents(key, keys[key]);
    };

// function r_change1(myRadio) {
//   if ($(myRadio).hasClass("answer_true")) {
//     $(myRadio).addClass("btn-success")
//   }
//   else {
//     $(myRadio).addClass("btn-danger")
//   }
//   return false
// };
// $('#answers').unbind();
//
// $('#answers').find('>a').on('click', function() {
//   if ($(this).hasClass('answer_true')) {
//     $(this).css("background", "#1AF029");
//   }
//   if ($(this).hasClass('answer_false')) {
//     return $(this).css("background", "#F5111D");
//   }
// });
//
// $('html').bind('keypress', function(e) {

// });

}])
