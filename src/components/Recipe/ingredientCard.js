import React from "react";

export const IngredientCard = ({ ingredients }) => {
  if (!ingredients) {
    return;
  }

  return (
    <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
      <div className="text-center mb-3">
        <h3 className="text-gradient text-primary">Ingrédients</h3>
      </div>
      {ingredients.map((ingredient, index) => (
        <li className="mb-0" key={index}>
          <b>
            {ingredient.quantity} {ingredient.unite}
          </b>{" "}
          {ingredient.name}
        </li>
      ))}
    </div>
  );
};
