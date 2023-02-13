import { POKEMON_LIST_SCHEMA, POKEMON_SCHEMA } from "../data/pokemonList.types";

export const getPokemon = async (id: string | number) => {
  return (await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  ).json()) as POKEMON_SCHEMA;
};

export const getAllPokemon = async () => {
  return (await (
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1279`)
  ).json()) as POKEMON_LIST_SCHEMA;
};
