const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.status(404).send({
        error:`Page Not Found`,
        name:`Todo App`
    });
});


app.get('/users',(req,res)=>{
    res.send({
       users:[
           {
               name:`Ming`,
               age:27
           },
           {
               name:`Dave`,
               age:44
           }]
    });
});



app.listen(3000);

module.exports.app = app;