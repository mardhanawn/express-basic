const express = require('express');
const app = express();
const path = require('path');

//MODULE
const routes = require('./routes');

//SET ENGINE PUG
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './view'))
app.use(express.static('statics'))

//ROUTES
routes(app);

app.listen(2019, () => {
    console.log('Aplikasi Berjalan Pada Port', 2019);
});