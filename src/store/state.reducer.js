export const initialState = {
  receipts: [
    {
      id: 1,
      name: 'test',
      time: 90,
      difficulty: 1,
      difficultyName: "facile",
      category: "dessert",
      imgUrl: "https://www.regal.fr/sites/art-de-vivre/files/r70_belle-ile-tarte-pomme-beurre-sale_ss.jpg",
    },
    {
      id: 1,
      name: 'test',
      time: 90,
      difficulty: 1,
      difficultyName: "facile",
      category: "dessert",
      imgUrl: "https://www.yumelise.fr/wp-content/uploads/2020/08/tarte-pommes-flamande.jpg",
    },
  ],
};

export function stateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
