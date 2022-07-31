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
        "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/house.jpg",
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
    {
      recipeId: 3,
      name: "test3",
      time: 90,
      difficulty: 3,
      difficultyName: "difficile",
      category: "dessert",
      imgUrl:
        "https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.jpg",
    },
  ],
};

export function stateReducer(state = initialState, action) {
  switch (action.type) {
    case "userLoggedIn":
      return { ...state, user: action.user };
    default:
      return state;
  }
}
