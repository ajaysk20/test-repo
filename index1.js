const express = require("express");
const app = express();

app.use(express.json()); // ✅ FIX

app.post("/sum", function (req, res) {

    console.log(req.body); // should print {a:..., b:...}

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});