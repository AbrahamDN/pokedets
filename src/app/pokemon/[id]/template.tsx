"use client";

import {
  POKEMON_LIST_SCHEMA,
  POKEMON_SCHEMA,
} from "@/app/data/pokemonList.types";
import { usePokemon } from "@/app/store/pokemon.store";
import { useEffect } from "react";

type TemplateProps = {
  children: React.ReactNode;
  allPokemon?: POKEMON_LIST_SCHEMA;
  pokemon?: POKEMON_SCHEMA;
};

const Template = ({ children, allPokemon, pokemon }: TemplateProps) => {
  const { setAllPokemon, setPokemon } = usePokemon();

  useEffect(() => {
    if (allPokemon) setAllPokemon(allPokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPokemon]);

  useEffect(() => {
    if (pokemon) setPokemon(pokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  return <>{children}</>;
};
export default Template;
