import React from "react";
import "../styles/PokemonCard.css";

export const PokemonCard = ({ id, name, img }) => {
  return (
    <>
      <img src={img} alt="" />
      <p className="pokemon-id">{id >= 10 ? "N.º 00" + id : "Nº. 000" + id}</p>
      <strong className="pokemon-name">{name}</strong>
    </>
  );
};

export default PokemonCard;
