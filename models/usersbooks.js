'use strict';

const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const UsersBooks = sequelize.define('UsersBooks', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    review: DataTypes.STRING,
    shelf: DataTypes.STRING
  }, {});
  UsersBooks.associate = (models) => {
    UsersBooks.belongsTo(models.User, {foreignKey: 'userId'})
    UsersBooks.belongsTo(models.Book, {foreignKey: 'bookId'})
 
}; 
return UsersBooks; 
};