import React, { Component } from "react";
import Header from "../Header/header";
import InformationCard from "./informationCard";

class Recipes extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    };
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
