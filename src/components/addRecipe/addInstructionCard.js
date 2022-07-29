import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddInstructionCard = ({ temporaryNewRecipe }) => {
  const { instructions } = temporaryNewRecipe;
  console.warn("instructions", instructions);
  const addInstructions = (e) => {
    e.preventDefault();
    console.warn(e.target[0].value)
  };

  return (
    <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
      <div className="text-center mb-3">
        <h3 className="text-gradient text-primary">Instructions</h3>
      </div>
      <div id="all-step">
        <div className="form-group">
          {instructions &&
            instructions.map((instruction) => (
              <div>
                <h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>Étape 1</div>
                    <div>
                      <FontAwesomeIcon
                        icon="times"
                        className="text-danger hover-danger"
                      />
                    </div>
                  </div>
                </h6>
                <div>
                  <p id="step-1"> test</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <form onSubmit={addInstructions}>
        <textarea id="step" className="form-control" required></textarea>
        <button
          type="submit"
          id="add-step"
          className="btn bg-gradient-light w-auto me-1 mb-0 mt-2"
        >
          Ajouter étape
        </button>
      </form>
    </div>
  );
};
