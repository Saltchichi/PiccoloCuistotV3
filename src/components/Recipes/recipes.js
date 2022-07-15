// Import statements comes here.
import React, { Component } from "react";
import Header from "../Header/header";
import InformationCard from "./informationCard";
import axios from "axios";
class Recipes extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    };
  }

  callAPI() {
    axios.get(`http://localhost:3001/recipes`).then((res) => {
      const recipes = res.data;
      this.setState({ recipes });
      console.log(recipes);
    });
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="py-4">
          <div className="container">
            <div className="row justify-space-between py-2">
              {this.state.recipes.map((recipe, index) => (
                <InformationCard
                  key={index}
                  id={recipe.recipe_id}
                  name={recipe.recipe_name}
                  time={recipe.recipe_time}
                  difficulty={recipe.recipe_difficulty}
                  difficultyName={recipe.difficulty_name}
                  category={recipe.food_category_name}
                  photo={recipe.recipe_photo_url}
                ></InformationCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Recipes;
