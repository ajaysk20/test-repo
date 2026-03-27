// your task is to create a global middleware(app.use) which will main a count of Node. of request made to the server  in 
// the global reuestcount variabl
const express = require('express');
const app  = express();

let requestCount = 0;
app.use(function(req, res, next){
    requestCount = requestCount + 1;
    next();

})
app.get('/user', function(req,res){
    res.status(200).json({name : 'John'});

});

app.post('/user', function(req, res){
    res.status(200).json({msg : "create dumy server"});

});

app.get('/requestCount', function(req, res){
    res.status(200).json({requestCount});
});

app.listen((3000));