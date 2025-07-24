const express = require("express");
const app = express();

let a;
let b;

app.use((req, res, next) => {
    if (req.query.a !== undefined, req.query.b !== undefined) {
        a = parseInt(req.query.a);
        b = parseInt(req.query.b);
        //In order to pass parameters as 20/30 rather than ?a=20&b=30, you just have to add /a:/b: and then just use req.param.a
        next();
    }
    else {
        res.status(400).send("ERROR READING PARAMETERS, PLEASE PROVIDE BOTH VALID PARMATERS")
    }

})
app.get("/multiply", (req, res) => {
    let product = a * b;
    res.status(200).send(product)
})

app.get("/add", (req, res) => {
    let sum = a + b;
    res.status(200).send(sum)
})
app.get("/divide", (req, res) => {
    let quotient = a / b;
    res.status(200).send(quotient)
})
app.get("/substract", (req, res) => {
    let remainder = a - b;
    res.status(200).send(remainder)
})


app.listen(3000)