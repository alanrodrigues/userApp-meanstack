module.exports = function(app) {
	
	var Usuario = app.models.usuario;
	
	var controller = {};
	
	controller.listaUsuarios = function(req, res) {
		
		Usuario.find()
		.exec()
		.then(
			function(usuarios) {
				res.json(usuarios);
			},
			function(erro) {
				console.error(erro);
				res.status(500).json(erro);
			}
		);
		
	};
	
	controller.obtemUsuario = function(req, res) {
		
		var _id = req.params.id;
		Usuario.findOne({_id: _id}).exec()
		.then(
			function(usuario) {
				if (!usuario) 
					throw new Error("Serviço não encontrado");
				res.json(usuario) ;
			},
			function(erro) {
				console.log(erro);
				res.status(404).json(erro);
			}
		);
		
	};
	
	controller.salvaUsuario = function(req, res) {
		
		var _id = req.body._id;
		
		if(_id) {
			
			Usuario.findOne({_id: _id}).exec()
			.then(
				function(usuario) {
					if (!usuario)
						throw new Error("Serviço não encontrado");
					
					Usuario.findByIdAndUpdate(usuario._id, req.body).exec()
					.then(
						function(usuario) {
							res.status(201).json(usuario);
						},
						function(erro) {
							console.error(erro);
							res.status(500).json(erro);
						}
					);
					
				}
			);
			
			
		} else {
			Usuario.create(req.body)
			.then(
				function(usuario) {
					res.status(201).json(usuario);
				},
				function(erro) {
					console.log(erro);
					res.status(500).json(erro);
				}
			);
		}
		
	};
	
	controller.excluiUsuario = function(req, res) {
		var _id = req.params.id;
		
		Usuario.remove({"_id" : _id})
		.exec()
		.then(
			function() {
				res.end();
			},
			function(erro) {
				return console.error(erro);
			}
		);
	};
	
	return controller;
};