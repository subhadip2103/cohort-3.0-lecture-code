const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "this-is-myjwt-secret-which-is-a-secret";


let users = []

app.use(express.json());
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.post("/signup", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (users.find(user => user.username === username)) {
        return res.status(404).send("User already Signed up")
    }

    users.push({
        username,
        password
    })
    res.json({
        Msg: "User Signed Up successfully."
    })
})

app.post("/signin", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        let token = jwt.sign({
            username: username
        }, JWT_SECRET)

        res.status(200).json({
            token: token
        })
    }
    else {
        res.status(404).json({
            Msg: 'Credentials incorrect'
        })
    }
})

function auth(req, res, next) {
    let token = req.headers.authorization;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, deocoded) => {
            if (err) {
                return res.status(401).json({
                    Msg: 'Unauthorized token'
                })
            }
            else {
                req.userinfo = deocoded;
                next()
            }
        })
    }
    else {
        res.status(401).send('Unauthorized')
    }

}

app.get("/me", auth, (req, res) => {
    let user = req.userinfo;
    let { username } = user;

    res.status(200).json({
        username: username
    })
})

app.listen(3000, () => {
    console.log('Currently running on port 3000.')
})