const express = require('express');
const app = express();

app.get('', (req,res)=>{
    console.log(req);
    res.end();
});

app.listen(4720);