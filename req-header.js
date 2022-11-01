const express = require('express');
const app = express();
let api_key = 12345678;

app.get('/', (req, res) => {
    if (req.headers['api-key'] == api_key){
        console.log(req.headers);
    }
    else{
        console.log("Api Key Not Found");
    }
    return res.send("Api hit");
    console.log('sasas');
  });

app.listen(4550);