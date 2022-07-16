import React from "react";
import RecipeCard from "./recipeCard";
import IngredientCard from "./ingredientCard";
import InstructionCard from "./instructionCard";

const Recipe = (data) => {
  const receip = data.location.params.props;

  const handleDelete = () => {};

  const handleModify = () => {};

  return (
    <header>
      <div
        className="page-header section-height-85"
        style={{ display: "block" }}
      >
        <div>
          <img
            className="position-absolute fixed-top ms-auto w-50 z-index-000 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
            alt="recette"
            src={receip.photo}
          />
        </div>
        <div className="container">
          <div className="d-md-none">
            <div className="row">
              <img
                className="w-100 border-radius-xl mt-7 ms-lg-5 position-relative"
                alt="recette responsive"
                src={receip.photo}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10">
              <RecipeCard id={receip.id} />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 mt-4">
              <IngredientCard id={receip.id} />
            </div>
            <div className="col-lg-6 mt-4">
              <InstructionCard id={receip.id} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-lg bg-gradient-warning mt-3 mx-2"
              onClick={handleModify}
            >
              Modifier la recette
            </button>
            <button
              type="button"
              className="btn btn-lg bg-gradient-danger mt-3 mx-2"
              onClick={handleDelete}
            >
              Supprimer la recette
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Recipe;
