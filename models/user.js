'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {}); 
  User.associate = function(models) {
    User.belongsToMany(models.Books, {through: 'UsersBooks', foreignKey: 'id', as: 'userId'})
  };
  return User;
};
   



