import React from "react";
import { Recipes } from "./components/Recipes/recipes";
import Recipe from "./components/Recipe/recipe";
import { AddRecipe } from "./components/addRecipe/addRecipe";
import { Navbar } from "./components/Header/navbar";
import { Error } from "./components/Error/error";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import "soft-ui-design-system/assets/css/soft-design-system.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

library.add(fas);

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/404" component={Error} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/addRecipe" component={AddRecipe} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
