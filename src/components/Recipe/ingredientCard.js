import React, { Component } from "react";
import axios from "axios";

class recipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
  }

  callAPI() {
    axios
      .get(`http://localhost:3001/recipe/info/ingredients/${this.props.id}`)
      .then((response) => {
        const ingredients = response.data;
        this.setState({ ingredients });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
        <div className="text-center mb-3">
          <h3 className="text-gradient text-primary">Ingrédients</h3>
        </div>
        {this.state.ingredients.map((ingredient, index) => (
          <li className="mb-0" key={index}>
            <b>
              {ingredient.ingredient_quantity}{" "}
              {ingredient.measurement_abbreviation}
            </b>{" "}
            {ingredient.ingredient_name}
          </li>
        ))}
      </div>
    );
  }
}

export default recipeCard;
