<<<<<<< HEAD
const route = require('express').Router()
const CourseController = require('../controller/courseController')

route.get('/', CourseController.list)
route.get('/review/:id', CourseController.listReview)
route.get('/free', CourseController.getfreecourse)

module.exports = route
=======
const express = require('express')
const router = express.Router()
const CourseController = require('../controller/courseController')


router.get('/', CourseController.seeAll)



module.exports = router
>>>>>>> 53fe0c721988ce8655ef9bb4a71677ae43e6fa97
