import React from "react";
import { useSelector } from "react-redux";
import { getReceipts } from "../../store/state.selector";
import Header from "../Header/header";
import { InformationCard } from "./informationCard";

export const Recipes = () => {
  const receipts = useSelector(getReceipts());

  return (
    <div>
      <Header />
      <section className="py-4">
        <div className="container">
          <div className="row justify-space-between py-2">
            {receipts.map((recipe, index) => (
              <InformationCard
                key={index}
                id={recipe.id}
                name={recipe.name}
                time={recipe.time}
                difficulty={recipe.difficulty}
                difficultyName={recipe.difficultyName}
                category={recipe.category}
                photo={recipe.imgUrl}
              ></InformationCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
