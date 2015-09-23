module.exports = function (graphdb, mongoose) {
	var mongraph = require('mongraph')

	var User = require('./../model/userModel')(mongoose);
	var Noticia = require('./../model/noticiaModel')(mongoose);

	mongraph.init({
		neo4j: graphdb,
		mongoose: mongoose
	});

	var _user = {
		username: 'nico',
		password: '123',
		nome: 'Nicolas Ibanheiz',
		estado: 'SP'	
	};

	var _noticia = {
		titulo: 'Consegui conectar no mongraph',
		subtitulo: 'O bagulho é bonito mesmo meu parceirinho',
		image: 'nicolindo.jpg'
	};

	var User = new User(_user);
	var Noticia = new Noticia(_noticia);
	
	console.log(User)
	User.save(function (err, user) {
		if (err) {
			console.log(err);
		} else {
			console.log('ID do nó: ' + user._node_id);
			User.getNode(function(err, node){
				if (err) {
					console.log(err);

				} else {
		      console.log('Nó: ' + node); // prints the node
				}
		  });
		}
	});

}