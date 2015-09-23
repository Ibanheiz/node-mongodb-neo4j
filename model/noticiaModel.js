module.exports = function (mongoose) {
	var Schema = mongoose.Schema;

	var NoticiaSchema = new Schema({
		titulo: {type: String,  default: ''},
		subtitulo: {type: String,  default: ''},
		image: {type: String,  default: ''},
    data: { type: Date, default: Date.now },
    ativo: { type: Boolean, default: 1}
	});

	return mongoose.model('Noticia', NoticiaSchema);
}