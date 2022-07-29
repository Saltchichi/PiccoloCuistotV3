import React from "react";

export const InstructionCard = ({ instructions }) => {
  if (!instructions) {
    return;
  }

  return (
    <div className="card d-flex blur justify-content-center p-4 shadow-sm my-sm-0">
      <div className="text-center mb-3">
        <h3 className="text-gradient text-primary">Instruction</h3>
      </div>
      {instructions.map((instruction, index) => (
        <div key={index}>
          <h6 className="mb-0">Etape {instruction.step}</h6>
          <p className="mb-0">{instruction.text}</p>
          <br />
        </div>
      ))}
    </div>
  );
};
