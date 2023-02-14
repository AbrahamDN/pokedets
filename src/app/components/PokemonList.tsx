"use client";
import { useEffect, useState } from "react";
import { usePokemon } from "../store/pokemon.store";
import getIdFromUrl from "../utils/getIdFromUrl";
import PokemonEntry from "./PokemonEntry";
import SearchInput from "./SearchInput";
import InfiniteScroll from "react-infinite-scroll-component";
import { POKEMON_LIST_RESULTS_SCHEMA } from "../data/pokemonList.types";
import useFetch from "../hooks/useFetch";

const PokemonList = () => {
  const { allPokemon } = usePokemon();

  const [url, setUrl] = useState<URL | string>("");
  const [pokemons, setPokemons] = useState<
    POKEMON_LIST_RESULTS_SCHEMA[] | null
  >(null);

  const data = useFetch(
    (!url ? "https://pokeapi.co/api/v2/pokemon?limit=15" : url) as string
  );

  const loadMore = () => {
    if (data.next) setUrl(data.next);
  };

  useEffect(() => {
    if (!url && data) setPokemons(data.results);
    if (url && data && pokemons) setPokemons(pokemons.concat(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className="max-w-screen-xl w-full flex flex-col items-center flex-grow h-inherit">
      <SearchInput />

      <p className="w-full mb-6 ">
        Results:{" "}
        <mark className="font-medium bg-transparent">
          {allPokemon?.results.length}
        </mark>
      </p>

      <hr />

      <div
        id="scrollableDiv"
        className="w-full grid grid-cols-1 divide-y-2 flex-grow overflow-y-auto  px-1"
      >
        {pokemons ? (
          <InfiniteScroll
            dataLength={pokemons.length}
            next={loadMore}
            hasMore={Boolean(data.next)}
            loader={<span>Loading...</span>}
            scrollableTarget="scrollableDiv"
          >
            {pokemons?.map((pokemon, idx) => (
              <PokemonEntry
                key={pokemon.name + idx}
                id={getIdFromUrl(pokemon.url) as number}
                name={pokemon.name}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </section>
  );
};

export default PokemonList;
