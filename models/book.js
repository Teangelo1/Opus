'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey:{ allowNull: false
        },
        onDelete: 'cascade'
      })
      // define association here - we will put passport here, make passport id will be primary key
    }
  };
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING, //may need to drop
    pages: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    img: DataTypes.STRING,
    shelf: DataTypes.STRING,
    // rating: DataTypes.INTEGER,
    // review: DataTypes.TEXT

  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};