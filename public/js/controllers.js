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
.controller('SearchCtrl', ['$scope', '$http', '$location', 'SearchResults', function($scope, $http, $location, SearchResults) {
  $scope.searchTerm = '';
  $scope.results = SearchResults
  $scope.search = function() {
    $http( {
      url: "/api/locations/search",
      method: "GET",
      params: {
        searchTerm: $scope.searchTerm
      }
    }).then(function success(res) {
      SearchResults.set(res.data);
      console.log(res.data);
      $location.path('/results');
    }, function error(res) {
      console.log(res);
    })
  }
}])
.controller('ResultsCtrl', ['$scope', 'SearchResults', function($scope, SearchResults) {
  $scope.results = SearchResults.get();
  console.log($scope.results)
}])