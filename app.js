let app = require('./config/server')

const PORT = 2003;

app.listen(PORT, function(){
    console.log('server on');
})