const express = require('express');
const path = require('path')
const app = new express();
const ejs = require('ejs')
const http = require('http');
const querystring = require('querystring');
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

(async () => {
  const client = new DynamoDB({ region: "ap-northeast-2" });
  try {
    const results = await client.listTables({});
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error(err);
  }
})();

app.set('view engine','ejs');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/recent',(req,res)=>{
    res.render('recent');
})

app.get('/result',(req,res)=>{
    res.render('result');
})

let port = process.env.PORT;
if (port==null || port==""){
    port=4000;
}
app.listen(port, ()=>{
    console.log('App listening...')
})