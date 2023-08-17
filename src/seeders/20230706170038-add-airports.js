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
    await queryInterface.bulkInsert('airports',[
      {
        name:'Chhatrapati Shivaji Maharaj International Airport',
        address:'water park near',
        cityId:48,
        createdAt: new Date(),
        updatedAt:new Date()

      },
      {
        name:'Juhu Aerodrome',
        address:'water park near',
        cityId:48,
        createdAt: new Date(),
        updatedAt:new Date()

      },
      {
        name:'Indira Gandhi International Airport',
        address:'water park near',
        cityId:48,
        createdAt: new Date(),
        updatedAt:new Date()

      },
      {
        name:'doiwala international airport',
        address:'water park near',
        cityId:54,
        createdAt: new Date(),
        updatedAt:new Date()

      },
      {
        name:'dehraudn internation airport',
        address:'water park near',
        cityId:54,
        createdAt: new Date(),
        updatedAt:new Date()

      }



    ],{});
   

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
