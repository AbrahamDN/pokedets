"use client";

import { POKEMON_LIST_SCHEMA } from "@/app/data/pokemonList.types";
import { usePokemon } from "@/app/store/pokemon.store";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Template = ({
  children,
  allPokemon,
}: {
  children: React.ReactNode;
  allPokemon?: POKEMON_LIST_SCHEMA;
}) => {
  const pathName = usePathname();
  const { setAllPokemon, setPokemon } = usePokemon();

  useEffect(() => {
    if (allPokemon) setAllPokemon(allPokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPokemon]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2${pathName}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  console.info(pathName);
  return <>{children}</>;
};
export default Template;
