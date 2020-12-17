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
<<<<<<< HEAD
        hooks:true
      })
      UserCourse.belongsTo(models.Course, {
        hooks:true
=======
        foreignKey: 'course_id'
      })
      UserCourse.belongsTo(models.Course, {
        foreignKey: 'user_id'
>>>>>>> 53fe0c721988ce8655ef9bb4a71677ae43e6fa97
      })
    }
  };
  UserCourse.init({
<<<<<<< HEAD
    UserId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
=======
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
>>>>>>> 53fe0c721988ce8655ef9bb4a71677ae43e6fa97
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};