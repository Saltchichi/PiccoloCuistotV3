import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class ingredientCard extends Component {
  constructor() {
    super();
    this.quantityRef = React.createRef();
    this.state = {
      ingredient_quantity: "",
      measurement_abbreviation: "",
      ingredient_name: "",
      ingredients: [],
      idIngredient: 0,
      isValid: false,
    };
  }


  handleChangeQuantity = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ ingredient_quantity: e.target.value });
    }
  };

  handleChangeMeasurement = (e) => {
    this.setState({ measurement_abbreviation: e.target.value });
  };

  handleChangeIngredient = (e) => {
    this.setState({ ingredient_name: e.target.value });
  };

  handleDelete = (id) => {
    const ingredients = this.state.ingredients.slice();
    const index = ingredients.findIndex((ingredient) => ingredient.id === id);

    ingredients.splice(index, 1);

    this.setState({ ingredients: ingredients });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const ingredients = this.state.ingredients.slice();

    ingredients.push({
      id: this.state.idIngredient,
      ingredient_quantity: this.state.ingredient_quantity,
      measurement_abbreviation: this.state.measurement_abbreviation,
      ingredient_name: this.state.ingredient_name,
    });

    this.setState({
      ingredients: ingredients,
      idIngredient: this.state.idIngredient + 1,
      isValid: true,
    });

    //On reset la valeur des inputs
    this.setState({
      ingredient_quantity: "",
      measurement_abbreviation: "",
      ingredient_name: "",
    });

    this.quantityRef.current.focus();
  };

  componentWillMount() {
    if (this.props.id !== "") {
      this.getData();
    }
  }

  getData() {
    axios
      .get(`http://localhost:3001/recipe/info/ingredients/${this.props.id}`)
      .then((response) => {
        const ingredients = response.data;
        this.setState({ ingredients, isValid: true });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
        <div className="text-center mb-3">
          <h3 className="text-gradient text-primary">Ingrédients</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row g-1 mb-2">
            <div className="col-2">
              <input
                type="text"
                id="quantity"
                className="form-control"
                placeholder="Qtité"
                value={this.state.ingredient_quantity}
                onChange={this.handleChangeQuantity}
                ref={this.quantityRef}
                required
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                id="measurement"
                className="form-control"
                placeholder="Unité"
                value={this.state.measurement_abbreviation}
                onChange={this.handleChangeMeasurement}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                id="ingredient"
                className="form-control"
                placeholder="Ingrédient"
                value={this.state.ingredient_name}
                onChange={this.handleChangeIngredient}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            id="add-ingredient"
            className="btn bg-gradient-light w-auto mt-2 mb-0"
          >
            Ajouter
          </button>
        </form>
        <ul id="ingredient-list" className="mt-4">
          {this.state.ingredients.map((ingredient) => (
            <li key={ingredient.quantity_id} className="mb-2">
              <div className="d-flex align-items-center justify-content-between">
                <div id="ingredient_quantity">
                  <b>
                    {ingredient.ingredient_quantity}{" "}
                    {ingredient.measurement_abbreviation}
                  </b>{" "}
                  {ingredient.ingredient_name}
                </div>
                <FontAwesomeIcon icon="times" className="text-danger hover-danger" onClick={() => this.handleDelete(ingredient.id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ingredientCard;
