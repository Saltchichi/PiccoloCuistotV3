import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export const labels = {
  1: "Facile",
  2: "Moyen",
  3: "Difficile",
};

export const Ratings = ({ handleDifficulty }) => {
  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);

  return (
    <div>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        min={1}
        max={3}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleDifficulty(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value && (
        <Box ml={2}>
          <h4 className="text-gradient text-primary">
            {labels[hover !== -1 ? hover : value]}
          </h4>
        </Box>
      )}
    </div>
  );
};
