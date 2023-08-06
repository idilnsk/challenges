import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState(0);
  const nextButton = () => {
    setId(id + 1);
  };
  const prevButton = () => {
    setId(id - 1);
  };

  useEffect(() => {
    async function loadPokemon(id) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${id}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon(id);
  }, [id]);

  //startFetching();
  //}, [id]);

  return (
    <main>
      <button type="button" onClick={prevButton}>
        Previous Page
      </button>
      <button type="button" onClick={nextButton}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
