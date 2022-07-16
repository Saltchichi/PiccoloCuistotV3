import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  1: "Facile",
  2: "Moyen",
  3: "Difficile",
};

class rating extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      hover: -1,
    };
  }

  render() {
    return (
      <div>
        <Rating
          name="hover-feedback"
          value={this.state.value}
          precision={1}
          min={1}
          max={3}
          onChange={(event, newValue) => {
            this.setState({ value: newValue });
            this.props.handleDifficulty(newValue);
          }}
          onChangeActive={(event, newHover) => {
            this.setState({ hover: newHover });
          }}
        />
        {this.state.value !== null && (
          <Box ml={2}>
            <h4 className="text-gradient text-primary">
              {
                labels[
                  this.state.hover !== -1 ? this.state.hover : this.state.value
                ]
              }
            </h4>
          </Box>
        )}
      </div>
    );
  }
}

export default rating;
