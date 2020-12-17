const express = require("express")
const router = express.Router();
const UserController = require("../controller/userController")

router.get("/", UserController.getUser)

router.get("/addbalance/:id", UserController.addBalanceForm)
router.post("/addbalance/:id", UserController.addBalance)

router.get("/edit/:id", UserController.editUserForm)
router.post("/edit/:id", UserController.editUser)

router.get("/delete/:id", UserController.delete)

router.get("/seecourse/:id", UserController.seeCourse)

router.get("/menucourse/:id", UserController.menuCourse)
router.post("/menucourse/:id", UserController.buyCourse)

router.get("/review/:courseid/:userid", UserController.reviewForm)
router.post("/review/:courseid/:userid", UserController.reviewPost)

module.exports = router;