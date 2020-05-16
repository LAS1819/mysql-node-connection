// Advertimos de que requerimos de la BD
const dbConnection = require('../../config/dbConnection');

module.exports = app => {
	// Ejecutamos la función y guardamos la conexión en una constante
	const connection = dbConnection();

	// Renderizamos
	app.get('/', (req, res) => {
		// Hacemos la conexión antes de renderizar
		connection.query('SELECT * FROM news', (err, result) => {
			console.warn(result);
			res.render('news/news', {
				news: result
			});	
		});
		
	});
}