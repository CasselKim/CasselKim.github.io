var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/',function(req,res){
    res.send('Hello Wordl!');
})

app.get('/about',function(req,res){
    res.json({
        name : 'Greg Lim'
    });
})

app.listen(3000, function(){
    console.log("App listening on port 3000...")
})