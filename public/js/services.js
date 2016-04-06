angular.module('LocationServices', ['ngResource'])

.factory('Location', ['$resource', function($resource) {
  return $resource('/api/locations/:id');
}])