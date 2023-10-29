import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PokemonInfo.css";

export const PokemonInfo = () => {
  const [data, setdata] = useState("");
  const [img, setimg] = useState("");
  const [description, setdescription] = useState("");
  const [type, settype] = useState([]);
  const [error, seterror] = useState(false);
  const { pokemons } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons}/`)
      .then((res) => {
        if(res.ok) return res.json();
        throw new Error("Error");
      })
      .then((data) => {
        setdata(data);
        setimg(data.sprites.other["official-artwork"].front_default);
        loadDescription(data.species.url);
        settype(data.types);
      })
      .catch((error) =>{
        seterror(true)
      })
  }, []);

  const loadDescription = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdescription(data.flavor_text_entries[79].flavor_text));
  };

  if(error) return <h1>Error: Pokemon no encontrado</h1>

  return (
    <main>
      <h2 className="pokemon-title">
        {data.name} <span>Nº. 000{data.id}</span>
      </h2>
      <div className="pokemon-info">
        <img className="pokemon-img" src={img} alt={data.name} />
        <section className="section-info">
          <p className="pokemon-description">{description}</p>
          <div className="stats-info">
            <div className="stat">
              <p>Altura</p>
              <p>{data.height / 10} m</p>
            </div>
            <div className="stat">
              <p>Peso</p>
              <p>{data.weight / 10} kg</p>
            </div>
          </div>
          <div className="pokemon-types-container">
            <p>Tipo</p>
            <ul>
              {type.map((types) => (
                <li key={Math.random()}><Link className={types.type.name} to={types.type.name} key={Math.random()}>{types.type.name}</Link></li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PokemonInfo;
