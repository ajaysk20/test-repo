// croos origin resource sharing should not be allowed by default
// Node.js cors requests are blocked 
const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());
app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        anser : a+b
    })
})

app.listen(3002);