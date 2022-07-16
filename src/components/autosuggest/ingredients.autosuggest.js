// basic.autosuggest.js
import React from "react";
import Autosuggest from "react-autosuggest";

class IngredientAutoSuggest extends React.Component {
  constructor() {
    super();

    //Define state for value and suggestion collection
    this.state = {
      value: "",
      suggestions: [],
      ingredients: [],
    };
  }

  resetState = () => {
    this.setState({
      value: "",
    });
  };

  // Filter logic
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.ingredients.filter(
          (lang) =>
            lang.ingredient_name.toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  // Trigger suggestions
  getSuggestionValue = (suggestion) => suggestion.ingredient_name;

  // Render Each Option
  renderSuggestion = (suggestion) => <div>{suggestion.ingredient_name}</div>;

  // OnChange event handler
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Suggestion rerender when user types
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  // Triggered on clear
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const trueRequire = "true";
    // Option props
    const inputProps = {
      id: "ingredient",
      placeholder: "Ingrédient",
      value,
      required: { trueRequire },
      onChange: this.onChange,
    };

    // Adding AutoSuggest component
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default IngredientAutoSuggest;
