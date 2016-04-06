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
.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.searchTerm = '';
  $scope.search = function() {
    $http( {
      url: "/api/locations/search",
      method: "GET",
      params: {
        searchTerm: $scope.searchTerm
      }
    }).then(function success(res) {
      $scope.results = res.data;
    }, function error(res) {
      console.log(res);
    })
  }
}]);