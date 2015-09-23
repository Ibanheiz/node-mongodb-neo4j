module.exports = function (graphdb, mongoose) {
	var mongraph = require('mongraph')

	var User = require('./../model/userModel')(mongoose);

	mongraph.init({
		neo4j: graphdb,
		mongoose: mongoose
	});

	var _user = {
		username: 'nico',
		password: '123',
		nome: 'Nicolas Ibanheiz',
		estado: 'SP',
		dataCadastro: null,
		ativo: 1
	};

	var User = new User(_user);

	User.save(function (err, user) {
		if (err) {
			console.log(err);
		} else {
			User.getNode(function(err, node){
				if (err) {
					console.log(err);

				} else {
		      console.log(node); // prints the node
				}
		  });
		}
	});

}