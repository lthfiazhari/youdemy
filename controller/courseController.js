const {Course, UserCourse, User} = require('../models')
const convert = require('../helpers/formatCurrency')
const {Op} = require('sequelize')
class CourseController {
  static list(req, res){
    Course.findAll({
      where: {
        price: {
          [Op.gt]: 1
        }
      }
    })
      .then(data => res.render('courses', {data, convert}))
      .catch(err => res.send(err))
  }
  static listReview(req, res){
    const id = req.params.id
    UserCourse.findAll({
      where: {
        CourseId: id
      },
      include: User
    })
      .then(data => res.render('listReview', {data}))
      .catch(err => res.send(err))
  }
  static getfreecourse(req, res){
    Course.getfreecourse()
      .then(data => res.render('freecourses', {data, convert}))
      .catch(err => res.send(err))
  }
}

module.exports = CourseController