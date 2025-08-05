const express = require("express");
require('dotenv').config();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const app = express();
const { UserModel, TodoModel } = require("./db");
const { auth } = require('./auth.js');
const mongoose = require("mongoose");
const { z } = require("zod")


mongoose.connect(`${process.env.MONGODB_URL}todos-db`);

app.use(express.json());


app.post("/signup", async (req, res) => {
    const requiredBody = z.object({
        email: z.string().min(10).max(50).email(),
        password: z.string().min(6).max(30),
        name: z.string().min(2).max(100)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.status(404).json({ 
            message: "incorrect format",
            error:parsedDataWithSuccess.error.format()
         })
    }

    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;

    let errorthrown = false;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })

    } catch (error) {
        res.status(401).json({ msg: "User already exists" })
        errorthrown = true;
    }

    if (!errorthrown) {
        res.status(200).json({
            msg: "you are logged in"
        })
    }

})
app.post("/signin", async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if (!user) {
        res.status(403).json({ msg: "user not found in our database" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (passwordMatch) {
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
app.post("/todo", auth, async (req, res) => {
    let description = req.body.description;
    let done = req.body.done;


    await TodoModel.create({
        description: description,
        done: done,
        userid: req.userid
    })

    res.status(200).json({
        msg: "Task added successfully"
    })

})
app.get("/todos", auth, async (req, res) => {
    try {
        let todos = await TodoModel.find({ userid: req.userid });

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