'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCourse.belongsTo(models.User, {
        hooks:true
      })
      UserCourse.belongsTo(models.Course, {
        hooks:true
      })
    }
  };
  UserCourse.init({
    UserId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};