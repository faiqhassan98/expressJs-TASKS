const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    console.log("data sent by ME", req.query);
    res.send("Without param " + req.query.name);
});

app.get('/:name/:age',(req,res)=>{
    console.log("data sent by ME", req.params);
    res.send("With param " + req.params.name + req.params.age);
});

// app.get('/about',(req,res)=>{
//     res.send("This is About Page ");
// })

app.listen(4800);
