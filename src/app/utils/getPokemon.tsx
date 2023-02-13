import { EVOLUTION_CHAIN_SCHEMA } from "../data/evolutionChain.types";
import {
  POKEMON_LIST_SCHEMA,
  POKEMON_SCHEMA,
  POKEMON_SPECIES_SCHEMA,
} from "../data/pokemonList.types";

async function fetchData<Type>(url: URL | string) {
  const data = await fetch(url);
  return data.json() as Type;
}

export const getPokemon = async (id: string | number) => {
  const pokemon = (await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  ).json()) as POKEMON_SCHEMA;

  const species = await fetchData<POKEMON_SPECIES_SCHEMA>(pokemon.species?.url);
  const evolutions = await fetchData<EVOLUTION_CHAIN_SCHEMA>(
    species.evolution_chain?.url
  );
  const newPokemon = {
    ...pokemon,
    evolutions,
    about: species.flavor_text_entries.filter(
      (entries) => entries.language.name === "en"
    )[0].flavor_text,
  };

  return newPokemon;
};

export const getAllPokemon = async () => {
  return (await (
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1279`)
  ).json()) as POKEMON_LIST_SCHEMA;
};
