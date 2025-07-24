const express = require("express");
const app = express();

//function that returns a boolean if the age of the person is more than 14


function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age
    if (age >= 14) {
        next()
    }
    else {
        res.json({ msg: "Sorry you are not of age yet." })
    }

}

app.use(isOldEnoughMiddleware)

app.get("/ride1",(req, res) => {
    res.json({
        msg: "You have succefully riden ride1"
    })
}

)
app.get("/ride2",(req, res) => {
    res.json({
        msg: "You have succefully riden ride2"
    })
}

)
app.listen(3000)