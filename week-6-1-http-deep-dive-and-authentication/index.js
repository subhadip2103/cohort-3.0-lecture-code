const express = require('express');
const app = express();
const jwt=require('jsonwebtoken');
const JWT_SECRET='randomjwtsecret'
let users = [];


// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = '';

//     for (let i = 0; i < 32; i++) {
//         token += options[Math.floor(Math.random() * options.length)]
//     }

//     return token
// }

app.use(express.json());

app.post("/signup", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (users.find(user => user.username === username)) {
        return res.status(404).json({ Msg: 'User already Signed Up' })
    }

    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up"
    })
})
app.post("/signin", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        let token=jwt.sign({
            username:username
        },JWT_SECRET)
        res.status(200).json({
            token:token
        })
    }
    else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

app.get("/me", (req, res) => {
    let token = req.headers.authorization;
    let decodedinformation=jwt.verify(token,JWT_SECRET);
    const username=decodedinformation.username;
    const user=users.find(user=>user.username===username)

    if (user) {
        res.status(200).json({
            username: username,
            password:user.password
        })
    }
    else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000)