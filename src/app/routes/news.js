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

	// Recibimos la petición port con la ruta de news
	// Lo manejamos con una función de ES6
	app.post('/news', (req, res ) => {
		const { title, news } = req.body;
		connection.query('INSERT INTO news SET?', {
			title,
			news
		}, (err, result) => {
			res.redirect('/');
		});

	});
}