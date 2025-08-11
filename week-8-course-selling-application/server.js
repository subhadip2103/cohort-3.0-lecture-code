const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose")
const { UserRouter } = require("./Routes/users");
const { CourseRouter } = require("./Routes/courses");
const { adminRouter } = require("./Routes/admin");

app.use(express.json())

app.use("/api/v1/users", UserRouter)
app.use("/api/v1/courses", CourseRouter)

app.listen(3000, () => {
    console.log("Running on port 3000")
});