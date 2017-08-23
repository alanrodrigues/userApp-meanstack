angular.module('userApp').controller('UsuariosController',
function($scope, Usuario) {
	
	$scope.usuarios = [
	];

	$scope.filtro = '';
	
	$scope.mensagem = {texto: ''};
	
	function buscaUsuarios() {
		Usuario.query(
			function(usuarios) {
				$scope.usuarios = usuarios;
			},
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível obter a lista.'
				};
				console.log(erro);
			}
		);
	}
	
	$scope.remove = function(usuario) {

		Usuario.delete({id: usuario._id},
			buscaUsuarios,
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível remover o usuário'
				};
				console.log(erro);
			}
		);
	};
	
	buscaUsuarios();
	
});