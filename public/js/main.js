angular.module('userApp', ['ngRoute', 'ngResource', 'ngSanitize', 'ui.mask'])
.config(function($routeProvider) {
	
	$routeProvider.when('/usuarios', {
		templateUrl: 'partials/usuarios.html',
		controller: 'UsuariosController'
	});
	
	$routeProvider.when('/usuario/:id', {
		templateUrl: 'partials/usuario.html',
		controller: 'UsuarioController'
	});
	
	$routeProvider.when('/usuario', {
		templateUrl: 'partials/usuario.html',
		controller: 'UsuarioController'
	});
	
	$routeProvider.otherwise({redirectTo: '/usuarios'});
});