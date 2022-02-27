module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Recipes',
      [
        {
          title: 'Apple pie',
          img: 'http://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/07/salted-caramel-apple-pie-recipe-7.jpg',
          servings: 8,
          energy: 605,
          ingredients: '1 package Betty Crocker™ pie crust mix. 1/3 cup cold water. 1/2 cup sugar. 1/2 cup Gold Medal™ all- purpose flour. 1 / 2 tsp ground cinnamon. 1 / 4 tsp ground nutmeg. 5 cups thinly sliced peeled apples(3 large). 1 tablespoon butter or margarine Milk(to brush on, not much needed) Additional sugar(to taste)',
          fat: 211,
          prot: 50,
          carb: 706,
          description: '1. Heat oven to 425°F. Make pie crust mix as directed for 9-Inch Two-Crust Pie, using 1/3 cup cold water--except trim overhanging edge of bottom pastry 1 inch from rim of plate. Stir together 1/2 cup sugar, the flour, cinnamon and nutmeg in large bowl. Add apples; toss. Spoon into pastry-lined pie plate. Dot with butter. Roll remaining pastry; cut into 10 strips, each about 1/2 inch wide. Place 5 strips across filling in pie plate. Weave a cross-strip through by first folding back every other strip of the first 5 strips. Continue weaving, folding back alternate strips before adding each cross-strip, until lattice is complete. Trim ends. Fold trimmed edge of bottom crust over ends of strips, building up a high edge. Seal and flute. Brush lightly with milk; sprinkle lightly with additional sugar. Bake 30 to 35 minutes or until crust is golden brown and juice is bubbly. Add vanilla, caramel, or cinammon ice cream to send this one over the top.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
