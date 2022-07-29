import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddInstructionCard = ({
  temporaryNewRecipeData,
  setTemporaryNewRecipeData,
}) => {
  const { instructions } = temporaryNewRecipeData;
  const [step, setStep] = useState(1);

  const addInstructions = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const newInstruction = { step: step, text: text };

    setTemporaryNewRecipeData({
      instructions: [...temporaryNewRecipeData.instructions, newInstruction],
    });
    setStep(step + 1);
  };

  const deleteInstruction = (step) => {
    console.warn('step', step);
  }

  return (
    <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
      <div className="text-center mb-3">
        <h3 className="text-gradient text-primary">Instructions</h3>
      </div>
      <div id="all-step">
        <div className="form-group">
          {instructions.map((instruction) => (
            <div key={instruction.step}>
              <h6>
                <div className="d-flex align-items-center justify-content-between">
                  <div>Étape {instruction.step}</div>
                  <div>
                    <FontAwesomeIcon
                      icon="times"
                      className="text-danger hover-danger"
                      onClick={() => deleteInstruction(instruction.step)}
                    />
                  </div>
                </div>
              </h6>
              <div>
                <p id="step-1">{instruction.text}</p>
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
