import React, { Component } from "react";
import Rating from "../rating/rating";
import "./star.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class recipeCard extends Component {
  constructor() {
    super();
    this.ratingRef = React.createRef();

    this.state = {
      foodCategory: [],
      selectedFoodCategory: 1,
      selectedTime: "",
      isValidTime: false,
      selectedDifficulty: 1,
      isValidDifficulty: true,
      selectedName: "",
      isValidName: false,
      recipeInfo: "",
    };
  }

  callAPI() {
    axios.get(`http://localhost:3001/food_category`).then((res) => {
      const foodCategory = res.data;
      this.setState({ foodCategory });
    });
  }

  getData() {
    axios
      .get(`http://localhost:3001/recipe/info/${this.props.id}`)
      .then((response) => {
        const recipeInfo = response.data[0];
        this.setState({
          selectedName: recipeInfo.recipe_name,
          isValidName: true,
          selectedTime: recipeInfo.recipe_time,
          isValidTime: true,
          selectedDifficulty: recipeInfo.recipe_difficulty,
          isValidDifficulty: true,
          selectedFoodCategory: recipeInfo.food_category_id,
        });
        this.ratingRef.current.setState({
          value: recipeInfo.recipe_difficulty,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentWillMount() {
    this.callAPI();
    if (this.props.id !== "") {
      this.getData();
    }
  }

  handleChangeFoodCategory = (e) => {
    this.setState({ selectedFoodCategory: e.currentTarget.value });
  };

  handleChangeName = (e) => {
    this.setState({ selectedName: e.currentTarget.value });
    if (e.currentTarget.value !== "") {
      this.setState({ isValidName: true });
    } else {
      this.setState({ isValidName: false });
    }
  };

  handleChangeTime = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ selectedTime: e.currentTarget.value });
    }
    if (e.currentTarget.value !== "") {
      this.setState({ isValidTime: true });
    } else {
      this.setState({ isValidTime: false });
    }
  };

  handleDifficulty = (value) => {
    this.setState({ selectedDifficulty: value });
    if (value != null) {
      this.setState({ isValidDifficulty: true });
    } else {
      this.setState({ isValidDifficulty: false });
    }
  };

  render() {
    return (
      <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
        <div className="row justify-content-center mb-4">
          <div className="col-6">
            <input
              type="text"
              placeholder="Nom de la recette"
              className="form-control"
              onChange={this.handleChangeName}
              value={this.state.selectedName}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 position-relative d-flex justify-content-center text-center">
            <div className="p-4 text-center">
              <div className="input-group" style={{ width: "100px" }}>
                <span className="input-group-text text-gradient text-primary">
                  {" "}
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChangeTime}
                  value={this.state.selectedTime}
                />
              </div>
              <h4 className="text-gradient text-primary">Minutes</h4>
            </div>
            <hr className="vertical dark" />
            <hr className="horizontal dark d-md-none" />
          </div>
          <div className="col-md-4 position-relative d-flex justify-content-center text-center">
            <div className="p-4 text-center">
              <Rating
                name="unique-rating"
                ref={this.ratingRef}
                handleDifficulty={this.handleDifficulty}
              />
            </div>
            <hr className="vertical dark" />
            <hr className="horizontal dark d-md-none" />
          </div>
          <div className="col-md-4 d-flex justify-content-center text-center">
            <div className="p-4 text-center">
              <h4
                className="text-gradient text-primary"
                id="state3"
                countto="4"
              >
                <FontAwesomeIcon icon={faUtensils} />
              </h4>
              <div className="input-group" style={{ width: "150px" }}>
                <select
                  className="form-control choices__input"
                  onChange={this.handleChangeFoodCategory}
                  value={this.state.selectedFoodCategory}
                >
                  {this.state.foodCategory.map((category, index) => (
                    <option
                      key={category.food_category_id}
                      value={category.food_category_id}
                    >
                      {category.food_category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default recipeCard;
