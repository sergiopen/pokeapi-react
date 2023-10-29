import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export const Pokemon = () => {
  const [pokemons, setpokemons] = useState([])

  useEffect(() => {
    loadPokemons();
  }, []);

	const loadPokemons = async (limit = 100) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=${limit}&offset=0`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);
		setpokemons([...pokemons, ...results]);
	};

  return (
    <main>
      <div className="pokemon-container">
      {pokemons.map((pokemon) =>
        <Link className="pokemon-card" key={pokemon.id} to={pokemon.name}>
          <PokemonCard id={pokemon.id} name={pokemon.name} img={pokemon.sprites.other["official-artwork"].front_default} />
        </Link>
      )}

      </div>
    </main>
  );
};

export default Pokemon;
