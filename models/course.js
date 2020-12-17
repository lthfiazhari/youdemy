'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      Course.belongsToMany(models.User, {through: models.UserCourse}, {
        hooks:true
      })
    }
    static getfreecourse(){
      return Course.findAll({where: {price: 0}})
    }
  };
  Course.init({
    title: DataTypes.STRING,
=======
      Course.belongsToMany(models.User, {
        through: 'UserCourse',
        foreignKey: 'user_id'
      })
    }
  };
  Course.init({
    course_tittle: DataTypes.STRING,
>>>>>>> 53fe0c721988ce8655ef9bb4a71677ae43e6fa97
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};