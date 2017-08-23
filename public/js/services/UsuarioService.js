angular.module('userApp').factory('Usuario',
function($resource) {
	return $resource('/usuarios/:id');
});