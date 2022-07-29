import React, { useRef } from "react";
import { Ratings } from "../rating/rating";
import "./star.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export const AddRecipeCard = () => {
  const ratingRef = useRef();
  const baseRecipeAdd = {
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

  // handleChangeFoodCategory = (e) => {
  //   this.setState({ selectedFoodCategory: e.currentTarget.value });
  // };

  // handleChangeName = (e) => {
  //   this.setState({ selectedName: e.currentTarget.value });
  //   if (e.currentTarget.value !== "") {
  //     this.setState({ isValidName: true });
  //   } else {
  //     this.setState({ isValidName: false });
  //   }
  // };

  const handleChangeTime = (e) => {
    const value = e.target.value;
    const re = /^[0-9\b]+$/;
    console.warn('e.target.value', e.target.value, re.test(e.target.value));
    if (value !== "" || re.test(value)) {
      baseRecipeAdd.selectedTime = e.target.value;
    }
    if (e.target.value !== "") {
      baseRecipeAdd.isValidTime = true;
    } else {
      baseRecipeAdd.isValidTime = false;
    }
    console.warn('baseRecipeAdd', baseRecipeAdd);
  };

  const handleDifficulty = (value) => {
    baseRecipeAdd.selectedDifficulty = value;
    if (value != null) {
      baseRecipeAdd.isValidDifficulty = true;
    } else {
      baseRecipeAdd.isValidDifficulty = false;
    }
  };

  return (
    <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
      <div className="row justify-content-center mb-4">
        <div className="col-6">
          <input
            type="text"
            placeholder="Nom de la recette"
            className="form-control"
            // onChange={this.handleChangeName}
            value={baseRecipeAdd.selectedName}
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
                onChange={handleChangeTime}
                value={baseRecipeAdd.selectedTime}
              />
            </div>
            <h4 className="text-gradient text-primary">Minutes</h4>
          </div>
          <hr className="vertical dark" />
          <hr className="horizontal dark d-md-none" />
        </div>
        <div className="col-md-4 position-relative d-flex justify-content-center text-center">
          <div className="p-4 text-center">
            <Ratings
              name="unique-rating"
              ref={ratingRef}
              handleDifficulty={handleDifficulty}
            />
          </div>
          <hr className="vertical dark" />
          <hr className="horizontal dark d-md-none" />
        </div>
        <div className="col-md-4 d-flex justify-content-center text-center">
          <div className="p-4 text-center">
            <h4 className="text-gradient text-primary" id="state3" countto="4">
              <FontAwesomeIcon icon={faUtensils} />
            </h4>
            <div className="input-group" style={{ width: "150px" }}>
              <select
                className="form-control choices__input"
                // onChange={this.handleChangeFoodCategory}
                value={baseRecipeAdd.selectedFoodCategory}
              >
                {baseRecipeAdd.foodCategory.map((category, index) => (
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
};
