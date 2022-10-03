'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: { bulkInsert: (arg0: string, arg1: { firstName: string; lastName: string; email: string; password:string; createdAt: Date; updatedAt: Date; }[], arg2: {}) => any; }, Sequelize: any) {
    
      
     
    
      await queryInterface.bulkInsert('Users', [{
        firstName: 'Demo',
        lastName: "Demo Category",
        email: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        password: "12345",
        createdAt: new Date,
        updatedAt: new Date
      }], {});
    
  },

  async down(queryInterface: { dropTable: (arg0: string) => any; }, Sequelize: any) {
    await queryInterface.dropTable('Users');
  }
};
