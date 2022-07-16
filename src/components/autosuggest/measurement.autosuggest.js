// basic.autosuggest.js
import React from "react";
import Autosuggest from "react-autosuggest";

class MeasurementAutoSuggest extends React.Component {
  constructor() {
    super();

    //Define state for value and suggestion collection
    this.state = {
      value: "",
      suggestions: [],
      measurements: [],
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
      : this.state.measurements.filter(
          (lang) =>
            lang.measurement_abbreviation
              .toLowerCase()
              .slice(0, inputLength) === inputValue
        );
  };

  // Trigger suggestions
  getSuggestionValue = (suggestion) => suggestion.measurement_abbreviation;

  // Render Each Option
  renderSuggestion = (suggestion) => (
    <div>
      {suggestion.measurement_abbreviation} {suggestion.measurement_name}
    </div>
  );

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

    // Option props
    const inputProps = {
      id: "measurement",
      placeholder: "Unité",
      value,
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

export default MeasurementAutoSuggest;
