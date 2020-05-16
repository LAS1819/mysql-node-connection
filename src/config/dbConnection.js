// Para conectar con la BD mysql
// Utilizamos el módulo mysql de npm
const mysql = require('mysql');

// Le decimos dónde conectarnos y va a devolver la conexión
module.exports = () => {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'news_portal'
	});
}