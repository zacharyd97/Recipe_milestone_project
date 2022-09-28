'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cuisines',
      [
        {
          cuisine_name: 'Chinese',
          image_url: 'https://placeimg.com/640/480/any'
        },
        {
          cuisine_name: 'Mexican',
          image_url: 'https://placeimg.com/640/480/any'
        },
        {
          cuisine_name: 'Italian',
          image_url: 'https://placeimg.com/640/480/any'
        }
      ],
      {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('cuisines', null, {});
  }
};
