angular.module('LocationCtrls', [])

.controller('Locations', ['$scope', '$http', function($scope, $http) {
  $scope.locations = [];

  $http.get('/api/locations').then(function success(res) {
    $scope.locations = res.data;
  }, function error(res) {
    console.log(res);
  });
}]);