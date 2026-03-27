const express = require('express');
const app = express();

// function that returns a Boolean if the age of person is more than 14
function isoldenough(age){
    if(age>=14){
        return ;
    }else{
        return false;
    }
}

function isoldenoughmiddleware(res,req,next){
    age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg : "sorry, you are not of age "
        })
    }
}

app.use(isoldenoughmiddleware);
app.get("/ride2", function(re,re){
    if(isoldenough(req.query.age)){
        res.json({
        msg : "you have successfully riden the ride 2"
        })
    }
    
})
app.get("/ride1",  function(re,re){
    if(isoldenough(req.query.age)){
        res.json({
        msg : "you have successfully riden the ride 1"
        })
    }
    
})


// app.listen(3000);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});