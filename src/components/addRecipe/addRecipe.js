import React from "react";
import { AddRecipeCard } from "./addRecipeCard";
import AddIngredientCard from "./addIngredientCard";
import { AddInstructionCard } from "./addInstructionCard";
import axios from "axios";

export const AddRecipe = () => {
  const temporaryNewRecipe = {
    name: "",
    time: 0,
    difficulty: 1,
    difficultyName: "",
    category: "",
    imgUrl: "",
    ingredients: [],
    instructions: [],
  };

  const getPhoto = () => {
    axios
      .get(
        `http://localhost:3001/recipe/info/photo/${this.props.location.state.id}`
      )
      .then((res) => {
        const recipe_photo_url = res.data[0].recipe_photo_url;
        this.setState({ recipe_photo_url });
      });
  };

  return (
    <div>
      <div>
        <img
          className="position-absolute fixed-top ms-auto w-50 z-index-000 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
          alt="recette"
          src={temporaryNewRecipe.imgUrl}
        />
      </div>
      <div
        className="page-header section-height-85"
        style={{ display: "block" }}
      >
        <div className="container">
          <div className="d-md-none">
            <div className="row">
              <img
                className="w-100 border-radius-xl mt-7 ms-lg-5 position-relative"
                alt="recette responsive"
                src={temporaryNewRecipe.imgUrl}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mt-md-7 mt-2">
              <div className="photoCard">
                <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
                  <button
                    id="add-image"
                    className="btn bg-gradient-light w-auto me-1 mb-0 mt-2"
                  >
                    Ajouter l'image
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-10 mt-4">
              <AddRecipeCard temporaryNewRecipe={temporaryNewRecipe} />
            </div>
            <div className="col-lg-4 mt-4">
              <AddIngredientCard temporaryNewRecipe={temporaryNewRecipe} />
            </div>
            <div className="col-lg-6 mt-4">
              <AddInstructionCard temporaryNewRecipe={temporaryNewRecipe} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-lg bg-gradient-primary mt-3"
            >
              Ajouter la recette
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
