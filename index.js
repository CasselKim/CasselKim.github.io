const express = require('express');
const path = require('path')
const app = new express();
const ejs = require('ejs')
app.set('view sample','ejs');

app.use(express.static('public'))

app.get('/',function(req,res){
    res.render('index');
})

app.get('/recent',function(req,res){
    res.render('recent');
})


app.listen(4000, ()=>{
    console.log("App listening on port 4000...")
})