const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId
const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String, unique: true },
    password: stringify,
    name: string
})

const Todo = new Schema({
    description: String,
    done: Boolean,
    userid: ObjectId
})

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}