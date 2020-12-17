const express = require('express')
const router = express.Router()
const CourseController = require('../controller/courseController')


router.get('/', CourseController.seeAll)



module.exports = router