const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose")
const { UserModel, AdminModel, CourseModel, PurchaseModel } = require("./db")

app.use(express.json());

app.post("/user/signup", async (req, res) => {
    let requiredbody = z.user({

    })
    let email = req.body.email;
    let password = req.body.password;

    let user = await UserModel.create({
        email: email,
        password: password
    })

    if (user) {
        res.status(200).json({ Message: "Signed up succesfully." })
    }
    else {
        res.status(401).json({ Message: "User already exists" })
    }
})
app.post("/user/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
})
app.post("/course/purchase", (req, res) => {

})
app.get("/user/purchases", (req, res) => {

})
app.get("/courses", (req, res) => {

})
