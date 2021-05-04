'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        first_name: 'John',
        last_name: 'Doe',
        email: 'example@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Vickee',
        last_name: 'Doe',
        email: 'example@example.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  // to add more, have to put additional users into array 

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
