const express = require('express')
const router = express.Router()
const courseRouter = require('./course')


router.use('/courses', courseRouter)


module.exports = router