import React, { Component } from "react";
import RecipeCard from "./recipeCard";
import IngredientCard from "./ingredientCard";
import InstructionCard from "./instructionCard";
import axios from "axios";
class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      foodCategory: [],
      recipe_photo_url: "",
    };
  }

  callAPI() {
    axios
      .get(
        `http://localhost:3001/recipe/info/photo/${this.props.location.state.id}`
      )
      .then((res) => {
        const recipe_photo_url = res.data[0].recipe_photo_url;
        this.setState({ recipe_photo_url });
      });
  }

  componentWillMount() {
    const { id } = this.props.location.state;
    this.setState({
      id: id,
    });
    this.callAPI();
  }

  handleDelete = () => {
    if (window.confirm("Etes-vous sûr de vouloir supprimer cette recette ?")) {
      axios
        .delete(`http://localhost:3001/recipe/delete`, {
          data: {
            id: this.state.id,
          },
        })
        .then((response) => {
          this.props.history.push({
            pathname: "/",
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  handleModify = () => {
    this.props.history.push({
      pathname: "/addRecipe",
      state: {
        id: this.state.id,
      },
    });
  };

  render() {
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
              src={this.state.recipe_photo_url}
            />
          </div>
          <div className="container">
            <div className="d-md-none">
              <div className="row">
                <img
                  className="w-100 border-radius-xl mt-7 ms-lg-5 position-relative"
                  alt="recette responsive"
                  src={this.state.recipe_photo_url}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <RecipeCard id={this.state.id} />
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4 mt-4">
                <IngredientCard id={this.state.id} />
              </div>
              <div className="col-lg-6 mt-4">
                <InstructionCard id={this.state.id} />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-lg bg-gradient-warning mt-3 mx-2"
                onClick={this.handleModify}
              >
                Modifier la recette
              </button>
              <button
                type="button"
                className="btn btn-lg bg-gradient-danger mt-3 mx-2"
                onClick={this.handleDelete}
              >
                Supprimer la recette
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Recipe;
