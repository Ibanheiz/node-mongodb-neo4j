module.exports = function (mongoose) {
	var Schema = mongoose.Schema;

	var UserSchema = new Schema({
		username: {type: String,  default: ''},
		password: {type: String,  default: ''},
		nome: {type: String,  default: ''},
		estado: {type: String,  default: ''},
	    dataCadastro: { type: Date, default: Date.now },
	    ativo: { type: Boolean, default: 1}
	});

	return mongoose.model('User', UserSchema);
}