export const initialState = {
  receipts: [
    {
      recipeId: 1,
      name: "test1",
      time: 60,
      difficulty: 3,
      difficultyName: "difficile",
      category: "dessert",
      imgUrl:
        "https://www.regal.fr/sites/art-de-vivre/files/r70_belle-ile-tarte-pomme-beurre-sale_ss.jpg",
      ingredients: [
        { ingredientId: 1, quantity: 500, unite: "g", name: "sucre" },
        { ingredientId: 2, quantity: 1, unite: "kg", name: "farine" },
        { ingredientId: 2, quantity: 5, unite: null, name: "tomate" },
      ],
      instructions: [
        { instructionId: 1, step: 1, text: "Mélanger la farine et le sucre" },
        { instructionId: 2, step: 2, text: "Former une pâte et l'étaler" },
        { instructionId: 3, step: 3, text: "Ajouter les tomates" },
      ],
    },
    {
      recipeId: 2,
      name: "test2",
      time: 90,
      difficulty: 2,
      difficultyName: "moyen",
      category: "dessert",
      imgUrl:
        "https://www.yumelise.fr/wp-content/uploads/2020/08/tarte-pommes-flamande.jpg",
    },
  ],
};

export function stateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
