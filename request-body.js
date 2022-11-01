const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded());
app.use(express.json());

app.post('/', (req,res)=>{
    console.log("data send by ME", req.body);
    res.send(req.body);
});

app.listen(4400);