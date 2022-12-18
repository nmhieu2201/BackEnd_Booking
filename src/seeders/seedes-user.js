'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Users', [{
      email:'minhhieudevjs@gmail.com',
      password:'123456',
      firstName: 'Minh',
      lastName: 'Hieu',
      address:'HCM',
      gender:1,
      roleId:'R1',
      phoneNumber: '123456',
      positionId:'Bác sĩ',
      image:'https://i.picsum.photos/id/1060/200/300.jpg?hmac=xYtFmeYcfydIF3-Qybnra-tMwklX69T52EtGd-bacBI',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
