angular.module('userApp').controller('UsuarioController',
function($scope, $routeParams, Usuario) {
	
	$scope.usuario = {};
	
	if ($routeParams.id) {
		Usuario.get({id: $routeParams.id},
			function(usuario) {
				$scope.usuario = usuario;
			},
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível obter o serviço.'
				};
				console.log(erro);
			}
		);
	} else {
		$scope.usuario = new Usuario();
	}
	
	$scope.salva = function() {
		$scope.usuario.$save()
		.then(
			function() {
				$scope.mensagem = {
					texto: 'Salvo com sucesso'
				};
				
				$scope.usuario = new Usuario();
			}
		)
		.catch(
			function(erro) {
				$scope.mensagem = {texto: 'Não foi possível salvar'};
			}
		);
	};
	
});