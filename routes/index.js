const express = require("express")
const router = express.Router()
const UserController = require("../controller/userController")
const CourseController = require("../controller/courseController")

const checkLogin = function (req,res,next) {
  if(req.session.userId) {
    next();
  } else {
    res.redirect("/")
  }
}

<<<<<<< HEAD
const courseRouter = require('./course')
=======
const coursesRouter = require('./course')
>>>>>>> 53fe0c721988ce8655ef9bb4a71677ae43e6fa97
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
<<<<<<< HEAD
router.use('/courses', courseRouter)
=======
router.use('/courses', coursesRouter)
>>>>>>> 53fe0c721988ce8655ef9bb4a71677ae43e6fa97

module.exports = router
