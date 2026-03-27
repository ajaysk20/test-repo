const express = require("express");
const app = express();

function loggermiddleware(req, res, next){
    console.log("method is :", + req.method);
    consol.log("host is ", +req.hostname);
    console.log("route is ",+ req.url);
    console.log(new Date());
    next();
}
app.use(loggermiddleware);
app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a+b,
    });
});

app.listen(3000);