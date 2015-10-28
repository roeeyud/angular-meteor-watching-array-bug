module = angular.module('app', ['angular-meteor'])
function onReady() {
  angular.bootstrap(document, ['app']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);

module.controller('appCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
  $scope.List = $meteor.collection(List, false).subscribe('List');
  $scope.$watch('List[0].array', function (list) {
    $scope.list = list;
  })

  $scope.send = function (msg) {
    $meteor.call('addToList', msg);
  }
  $scope.remove = function(index) {
    $meteor.call('removeFromList', index);
  }
}]);

module.directive('appView', ['$meteor', function ($meteor){
  return {
    restrict: 'C',
    templateUrl: 'client/app-view.ng.html',
    link: function (scope, element, attrs) {

    }
  }
}]);
