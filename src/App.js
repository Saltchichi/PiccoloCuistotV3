import React from "react";
import Recipes from "./components/Recipes/recipes";
import Recipe from "./components/Recipe/recipe";
import addRecipe from "./components/addRecipe/addRecipe";
import Navbar from "./components/Header/navbar";
import Error from "./components/Error/error";
import SignIn from "./components/SignIn/signIn";

import "./style.css";
import "soft-ui-design-system/assets/css/soft-design-system.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/404" component={Error} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/addRecipe" component={addRecipe} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
