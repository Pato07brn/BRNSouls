const express = require("express");
const routes = require('../app/routes')

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(routes)

app.use(express.static('./public'))

module.exports = app;
