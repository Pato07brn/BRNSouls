const express = require("express");

const app = express();
const PORT = 2003;

app.set('view engine', 'ejs');
app.set('views', './public/views');
app.use(express.static('./public'))


app.get('/', function(req, res){
    res.render('index.ejs')
    console.log("O SoulsLike da Programação está ativo");
})

app.listen(PORT)