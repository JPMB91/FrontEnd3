import { useEffect, useState } from "react";
import { getPokemon } from "../utils/getPokemon";
import {pokemonClass} from '../styles/Pokemon.module.css'

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const pokemon = await getPokemon();
        setPokemon(pokemon);
        setLoading(false);
      };
      getData();
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <h1>cargando.....</h1>
      ) : (
        <div className={pokemonClass}>
          <h2>{pokemon?.name}</h2>
          <img src={pokemon?.img} alt={pokemon?.name} />
        </div>
      )}
    </>
  );
};
