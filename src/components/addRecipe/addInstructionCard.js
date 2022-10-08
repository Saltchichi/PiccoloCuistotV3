import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddInstructionCard = ({
  temporaryNewRecipeData,
  setTemporaryNewRecipeData,
}) => {
  const { instructions } = temporaryNewRecipeData;
  const [step, setStep] = useState(1);
  const stepRef = useRef();

  const addInstructions = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const newInstruction = { step: step, text: text };

    setTemporaryNewRecipeData({
      ...temporaryNewRecipeData,
      instructions: [...temporaryNewRecipeData.instructions, newInstruction],
    });

    setStep(step + 1);
    stepRef.current.value = "";
  };

  const deleteInstruction = (step) => {
    const index = instructions.findIndex((instruction) => {
      return instruction.step === step.step;
    });

    let filteredInstructions = instructions.filter(
      (instruction) => instruction.step !== index + 1
    );

    filteredInstructions.forEach((instruction) => {
      instruction.step = filteredInstructions.indexOf(instruction) + 1
    })

    const lastInstruction = filteredInstructions[filteredInstructions.length - 1];
    if(lastInstruction) {
      setStep(lastInstruction.step + 1);
    } else {
      setStep(1);
    }

    setTemporaryNewRecipeData({
      ...temporaryNewRecipeData,
      instructions: filteredInstructions,
    });

  };

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
                      onClick={() => deleteInstruction(instruction)}
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
        <textarea
          id="step"
          className="form-control"
          ref={stepRef}
          required
        ></textarea>
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
