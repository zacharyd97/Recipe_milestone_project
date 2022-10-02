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

    await queryInterface.bulkInsert('comments',
      [
        {
          recipe_id: 1,
          author: "Clare",
          comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit.",
          likes: 5
        },
        {
          recipe_id: 2,
          author: "Howard",
          comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam.",
          likes: 1
        },
        {
          recipe_id: 3,
          author: "Paul",
          comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida.",
          likes: -2
        },
        {
          recipe_id: 4,
          author: "Nisha",
          comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere.",
          likes: 10
        },
        {
          recipe_id: 5,
          author: "Anders",
          comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a.",
          likes: -20
        },
        {
          recipe_id: 6,
          author: "Alex",
          comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor.",
          likes: 7
        }
      ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('comments', null, {});
  }
};
