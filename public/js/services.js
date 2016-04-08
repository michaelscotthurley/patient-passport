angular.module('LocationServices', ['ngResource'])

.factory('Location', ['$resource', function($resource) {
  return $resource('/api/locations/:id');
}])

.factory('SearchResults', function() {
  var results = [];

  return {
    set: function(data) {
      results = data;
    },
    get: function() {
      return results;
    }
  }
})