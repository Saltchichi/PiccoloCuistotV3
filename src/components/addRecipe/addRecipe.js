import React, { Component } from "react";
import RecipeCard from "./addRecipeCard";
import IngredientCard from "./addIngredientCard";
import InstructionCard from "./addInstructionCard";
import axios from "axios";

class addRecipe extends Component {
  constructor() {
    super();
    this.photoRef = React.createRef();
    this.recipeRef = React.createRef();
    this.ingredientRef = React.createRef();
    this.stepRef = React.createRef();
    this.state = {
      id: "",
      recipe_photo_url:
        "http://rent-my-boat-nice.fr/wp-content/uploads/2020/08/placeholder.png",
      error_message: "",
      addOrModify: "Ajouter",
    };
  }

  openConfirm = () => {
    let url = prompt("Entrer l'url de votre image");
    if (url) {
      this.setState({ recipe_photo_url: url });
    }
  };

  handleClick = () => {
    if (this.checkData()) {
      const data = {
        photo: {
          recipe_photo_url: this.state.recipe_photo_url,
        },
        recipe: {
          recipe_name: this.recipeRef.current.state.selectedName,
          recipe_time: this.recipeRef.current.state.selectedTime,
          recipe_difficulty: this.recipeRef.current.state.selectedDifficulty,
          food_category_id: this.recipeRef.current.state.selectedFoodCategory,
        },
        ingredients: this.ingredientRef.current.state.ingredients,
        steps: this.stepRef.current.state.steps,
        id: this.state.id,
      };
      if (this.state.id === "") {
        this.sendData(data);
      } else {
        this.modifyData(data);
      }
    } else {
      this.setState({
        error_message: "Merci de remplir les champs nécessaires",
      });
    }
  };

  checkData() {
    if (
      this.recipeRef.current.state.isValidName &&
      this.recipeRef.current.state.isValidTime &&
      this.recipeRef.current.state.isValidDifficulty &&
      this.ingredientRef.current.state.isValid &&
      this.stepRef.current.state.isValid
    ) {
      return true;
    } else {
      return false;
    }
  }

  sendData(data) {
    axios({
      method: "post",
      url: "http://localhost:3001/recipe/insert",
      data: data,
    })
      .then((response) => {
        this.props.history.push({
          pathname: "/recipe",
          state: { id: response.data.insertId },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  modifyData(data) {
    axios({
      method: "post",
      url: "http://localhost:3001/recipe/modify",
      data: data,
    })
      .then((response) => {
        this.props.history.push({
          pathname: "/recipe",
          state: { id: this.state.id },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentWillMount() {
    //Si l'utilisateur modifie
    if (this.props.location.state) {
      this.getPhoto();
      const { id } = this.props.location.state;
      this.setState({
        id: id,
        addOrModify: "Modifier",
      });
    }
  }

  getPhoto() {
    axios
      .get(
        `http://localhost:3001/recipe/info/photo/${this.props.location.state.id}`
      )
      .then((res) => {
        const recipe_photo_url = res.data[0].recipe_photo_url;
        this.setState({ recipe_photo_url });
      });
  }

  render() {
    return (
      <div>
        <div>
          <img
            className="position-absolute fixed-top ms-auto w-50 z-index-000 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
            alt="recette"
            src={this.state.recipe_photo_url}
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
                  src={this.state.recipe_photo_url}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mt-md-7 mt-2">
                <div className="photoCard">
                  <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
                    <button
                      type="submit"
                      id="add-image"
                      className="btn bg-gradient-light w-auto me-1 mb-0 mt-2"
                      onClick={this.openConfirm}
                    >
                      {this.state.addOrModify} l'image
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 mt-4">
                <RecipeCard ref={this.recipeRef} id={this.state.id} />
              </div>
              <div className="col-lg-4 mt-4">
                <IngredientCard ref={this.ingredientRef} id={this.state.id} />
              </div>
              <div className="col-lg-6 mt-4">
                <InstructionCard ref={this.stepRef} id={this.state.id} />
              </div>
            </div>
            <div className="text-danger">{this.state.error_message}</div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-lg bg-gradient-primary mt-3"
                onClick={this.handleClick}
              >
                {this.state.addOrModify} la recette
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addRecipe;
