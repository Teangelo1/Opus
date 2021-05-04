module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        genre: Sequelize.STRING,
        pages: Sequelize.INTEGER,
        shelf: Sequelize.STRING
        // rating: Sequelize.INTEGER
      });
      
  
    // Book.associate = (models) => {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   Book.hasMany(models.Post, {
    //     onDelete: 'cascade',
    //   });
    // };
  
    return Book;
  };
  