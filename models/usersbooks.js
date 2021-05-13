'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsersBooks.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING,
    shelf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsersBooks',
  });
  return UsersBooks;
};