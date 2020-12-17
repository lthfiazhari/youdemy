const express = require("express")
const router = express.Router()
const UserController = require("../controller/userController")

const checkLogin = function (req,res,next) {
  if(req.session.userId) {
    next();
  } else {
    res.redirect("/")
  }
}

const coursesRouter = require('./course')
const userRouter = require("./user")

router.get("/", UserController.loginForm)
router.post("/", UserController.checkLogin)

router.get("/register", (req,res) => {
  res.render("register")
})
router.post("/register", UserController.addUser)

router.use(checkLogin) // Need auth from this point

router.get("/home", (req,res) => {
  res.render("home")
})

router.get("/logout", UserController.logout)

router.use("/users", userRouter)
router.use('/courses', coursesRouter)

module.exports = router
