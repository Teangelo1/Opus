'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    img: DataTypes.STRING,
    shelf: DataTypes.STRING,
    // rating: DataTypes.INTEGER,
    // review: DataTypes.TEXT
  }, {});
  Book.associate = function(models) { 
    Book.belongsToMany(models.User, { through: 'UsersBooks', foreignKey: 'isbn', as: 'bookId' }) };
    return Book;
};
