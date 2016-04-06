angular.module('LocationCtrls', ['LocationServices'])

.controller('Locations', ['$scope', 'Location', function($scope, Location) {
  $scope.locations = [];
  Location.query(function success(res) {
    $scope.locations = res;
    console.log(res);
  }, function error(res) {
    console.log(res);
  });
}])
.controller('Directions', ['$scope', '$stateParams', 'Location', function($scope, $stateParams, Location) {
  $scope.locations = {};
  Location.get({id: $stateParams.id}, function success(data) {
    $scope.locations = data;
  }, function error(data) {
    console.log(data);
  });
}])