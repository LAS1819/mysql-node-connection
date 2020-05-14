const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// -----------Configuraciones----------

// Abrimos el puerto y lo dejamos escuchando en el puerto, si no, en el 3000
app.set(app.set('port'), process.env.PORT || 3000);

// Definimos el motor de plantilla que vamos a utilizar
app.set('view engine', 'ejs');

// Definimos dónde están las vistas (usamos módulo path)
app.set('views', path.join(__dirname, '../app/views'));




// ------------Middleware----------------------

// Definimos bodyParser, para pasar datos sin imágenes
app.use(bodyParser.urlencoded({extended: false}));

// Exportamos esto al index.js
module.exports = app;