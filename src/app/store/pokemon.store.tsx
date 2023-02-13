import { create } from "zustand";
import { POKEMON_LIST_SCHEMA, POKEMON_SCHEMA } from "../data/pokemonList.types";

interface UsePokemonState {
  pokemon: POKEMON_SCHEMA | null;
  allPokemon: POKEMON_LIST_SCHEMA | null;
  setPokemon: (pokemon: POKEMON_SCHEMA) => void;
  setAllPokemon: (allPokemon: POKEMON_LIST_SCHEMA) => void;
}

export const usePokemon = create<UsePokemonState>()((set) => ({
  pokemon: null,
  allPokemon: null,
  setPokemon: (newPokemon) => set(() => ({ pokemon: newPokemon })),
  setAllPokemon: (newAllPokemon) => set(() => ({ allPokemon: newAllPokemon })),
}));
