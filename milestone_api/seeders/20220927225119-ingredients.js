'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('ingredients', [
      {
        recipe_id: 1,
        amount: 1,
        unit: 'lbs',
        ingredient_name: "Chicken"
      },
      {
        recipe_id: 1,
        amount: 1,
        unit: 'lbs',
        ingredient_name: "Noodles"
      },
      {
        recipe_id: 2,
        amount: 1,
        unit: 'lbs',
        ingredient_name: "Chicken"
      },
      {
        recipe_id: 2,
        amount: 1,
        unit: 'lbs',
        ingredient_name: "Pork"
      },
      {
        recipe_id: 3,
        amount: 1,
        unit: 'lbs',
        ingredient_name: "Rice"
      },
      {
        recipe_id: 3,
        amount: 3,
        unit: 'cups',
        ingredient_name: "flour"
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('ingredients', null, {})
  }
};
