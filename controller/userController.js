const { User, Course, UserCourse } = require("../models")
const getFullName = require("../helpers/getFullName")
const { comparePassword } = require("../helpers/password")
const convert = require('../helpers/formatCurrency')

class UserController {
  static loginForm(req,res) {
    res.render("login")
  }
  static getUser(req,res) {
    User.findAll()
      .then(data => {
        res.render("users", {data,getFullName,convert})
      })
      .catch(err => {
        res.send(err)
      })
  }
  static addUser(req,res) {
    let obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender,
      balance: 0
    }
    User.create(obj)
      .then(data => {
        res.render("registersuccess", {data})
      })
      .catch(err => {
        res.send(err)
      })
  }
  static addBalanceForm(req,res) {
    const id = req.params.id
    User.findByPk(id)
      .then(data => {
        res.render('addbalance', { data })
      })
      .catch(error => {
        res.send(error)
      })
  }
  static addBalance(req,res) {
    const id = Number(req.params.id);
    const inputBalance = Number(req.body.balance)
    User.findByPk(id)
    .then(data => {
      console.log("ini data1")
      console.log(data)
      let newBalance = data.balance += inputBalance
      return User.update({
        balance: newBalance
      },{
        where: { id }
      })
    })
    .then (() => {
      res.redirect("/users")
    })
    .catch(error => {
      res.send(error)
    })
  }
  static editUserForm(req,res) {
    const id = req.params.id
    User.findByPk(id)
      .then(data => {
        res.render("edituser",{data})
      })
  }
  static editUser(req,res) {
    let obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender
    }
    User.update(obj)
      .then(data => {
        res.redirect("/users", {data})
      })
      .catch(err => {
        res.send(err)
      })
  }
  static delete(req,res) {
    const id = req.params.id
    User.destroy({
      where: {
        id:id
      }
    })
      .then(() => {
        res.redirect("/users")
      })
      .catch(err => {
        res.send(err)
      })
  }
  static checkLogin(req,res) {
    const username = req.body.username
    const password = req.body.password
    User.findOne({
      where: {
        username: username
      }
    })
      .then(data => {
        if(data && comparePassword(password, data.password)) {
          req.session.userId = data.id
          res.redirect("/home")
        } else {
          res.send(`invalid username or password`)
        }
      })
      .catch(err => {
        res.send(err)
      })
  }
  static logout(req,res) {
    req.session.destroy((err) => {
      if(err) res.render("error", {err})
      else res.redirect("/")
    })
  }
}

module.exports = UserController