'use strict';

module.exports = (sequelize, DataTypes) => {
  const UsersBooks = sequelize.define('UsersBooks', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING,
    shelf: DataTypes.STRING
  }, {});
  UsersBooks.associate = (models) => {
    UsersBooks.belongsTo(models.Users, {foreignKey: 'userId'})
    UsersBooks.belongsTo(models.Books, {foreignKey: 'bookId'})
  }; 
  return UsersBooks; 
};
