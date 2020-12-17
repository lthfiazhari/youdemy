const { Course } = require('../models/index')

class CourseController {
    static seeAll (req, res) {
        Course.findAll()
        .then(function(data){
            res.send(data)
        }).catch(function(err){
            res.send(err)
        })
    }
    
}


module.exports = CourseController