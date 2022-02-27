module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'User_recipes',
      [
        {
          user_id: 4,
          recipe_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_recipes', null, {});
  },
};
