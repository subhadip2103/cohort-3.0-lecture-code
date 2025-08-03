const express = require("express");
import dotenv from "dotenv";
dotenv.config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "dbadlndasjlh@30459e00ijfqoai"
const app = express();
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());


app.post("/signup", async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        msg: "you are logged in"
    })
})
app.post("/signin", async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET)
        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            msg: 'Incorrect credentials'
        })
    }
})
app.post("/todo", async (req, res) => {
    const token = req.headers.authorization;
    let credentials; 

    try {
        credentials = jwt.verify(token, JWT_SECRET);
    }
    catch (error) {
        console.log(error);
        return res.status(401).json("Invalid token")
    }

    if (credentials) {
        let description = req.body.description;
        let done = req.body.done;


        await TodoModel.create({
            description: description,
            done: done,
            userid: credentials.id
        })

        res.status(200).json({
            msg: "Task added successfully"
        })
    }
    else {
        res.status(500).json({
            msg: "unauthorized request"
        })
    }

})
app.get("/todos", async (req, res) => {
    const token = req.headers.authorization;

    try {
        let credentials = jwt.verify(token, JWT_SECRET);
        let todos = await TodoModel.find({ userid: credentials.id });

        res.status(200).json({
            Todos: todos
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "uauthorized response"
        })
    }

})

app.listen(3000, () => {
    console.log("running on port 3000")
})