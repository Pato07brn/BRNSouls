const express = require('express')

let app = express()

app.set('views', './app/views');

app.get('/', function(req, res){
    res.render('index.ejs')
    console.log("O SoulsLike da Programação está ativo");
})

module.exports = app