const express = require('express');
const ejs = require('ejs');

/* Variable que usa la function express */
const app = express();

/* Le decimos que use el directorio public */
app.use(express.static('public'));

/* Configuración motor de vistas ejs */
app.set('view engine', 'ejs');

/* Especifico el puerto de conexión */
app.listen(8080, () => {
    console.log('Servidor iniciado');
});

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/about', (req, res) => {  
    res.render('pages/about');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});