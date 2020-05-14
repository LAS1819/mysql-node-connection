const app = require('./config/server');

require('./app/routes/news')(app);

// Iniciando servidor
app.listen(app.get('port'), () => {
	console.log('Server en el puerto ', app.get('port'));
});