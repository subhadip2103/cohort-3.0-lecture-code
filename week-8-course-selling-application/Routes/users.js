const { Router } = require("express");
const UserRouter = Router();


UserRouter.post("/signup", (req, res) => {
  res.json({ msg: "signup endpoint" })
})
UserRouter.post("/login", (req,res) => {
  res.json({ msg: "login endpoint" })
})
UserRouter.get("/purchase", (req,res) => {
  res.json({ msg: "purchase endpoint" })
})

module.exports = {
  UserRouter: UserRouter
};