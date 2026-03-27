const express = require('express');
const app = express();

let numberofrequestsforuser = {};
setInterval(() => {
    numberofrequestsforuser = {};
}, 1000);

app.use(function(req, res, next) {
    const userId = req.headers["user-id"];
    if (numberofrequestsforuser[userId]) {
        numberofrequestsforuser[userId] = numberofrequestsforuser[userId] + 1;
        if (numberofrequestsforuser[userId] > 5) {
            res.status(404).send("no entry");
        } else {
            next();
        }
    } else {
        numberofrequestsforuser[userId] = 1;
        next();
    }
});
