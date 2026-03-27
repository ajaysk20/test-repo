const express = require('express');
const app = express();
let errorCount = 0;

app.get('/user', function(req, res){
    throw  new Error("some error");
});

app.post('/user', function(req, res){
    res.status(200).json({msg : 'crated dummy user'});
});

app.get('/errorcount', function(req, res){
    res.status(404).json({errorCount});
});

// error handling middleware
app.use(function(err, req, res, nexrt){
    res.status(404).send({})
})

app.listen(3000);
module.exports = app;