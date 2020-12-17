const route = require('express').Router()
const CourseController = require('../controller/courseController')

route.get('/', CourseController.list)
route.get('/review/:id', CourseController.listReview)
route.get('/free', CourseController.getfreecourse)

module.exports = route