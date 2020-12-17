'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require("../helpers/password");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    balance: DataTypes.INTEGER
  },{
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hashPassword(instance.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};