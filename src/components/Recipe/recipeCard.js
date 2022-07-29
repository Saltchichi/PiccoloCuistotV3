import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export const RecipeCard = ({ informationProps }) => {
  console.warn("recipeInfos", informationProps);

  return (
    <div className="card d-flex blur justify-content-center p-3 shadow-sm my-sm-0 mb-sm-3 mt-sm-7 mt-4 mb-2">
      <div className="text-center mb-3">
        <h3 className="text-gradient text-primary">{informationProps.name}</h3>
      </div>
      <div className="row">
        <div className="col-md-4 position-relative">
          <div className="p-4 text-center">
            <h4 className="text-gradient text-primary">
              <FontAwesomeIcon icon={faClock} />{" "}
              {informationProps.time}
            </h4>
            <h4 className="text-gradient text-primary">Minutes</h4>
          </div>
          <hr className="vertical dark" />
          <hr className="horizontal dark d-md-none" />
        </div>
        <div className="col-md-4 position-relative">
          <div className="p-4 text-center">
            <h4 className="text-gradient text-primary">
              {[...Array(informationProps.difficulty)].map((e, i) => {
                return <FontAwesomeIcon icon={faStarSolid} key={i} />;
              })}
              {[...Array(3 - informationProps.difficulty)].map((e, i) => {
                return <FontAwesomeIcon icon={faStar} key={i} />;
              })}
            </h4>
            <h4 className="text-gradient text-primary">
              {informationProps.difficultyName}
            </h4>
          </div>
          <hr className="vertical dark" />
          <hr className="horizontal dark d-md-none" />
        </div>
        <div className="col-md-4">
          <div className="p-4 text-center">
            <h4 className="text-gradient text-primary" id="state3" countto="4">
              <FontAwesomeIcon icon={faUtensils} />
            </h4>
            <h4 className="text-gradient text-primary">
              {informationProps.category}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
