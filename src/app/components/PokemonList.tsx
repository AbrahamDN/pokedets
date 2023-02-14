"use client";
import { useEffect, useState } from "react";
import { usePokemon } from "../store/pokemon.store";
import getIdFromUrl from "../utils/getIdFromUrl";
import PokemonEntry from "./PokemonEntry";
import SearchInput from "./SearchInput";
import InfiniteScroll from "react-infinite-scroll-component";
import { POKEMON_LIST_RESULTS_SCHEMA } from "../data/pokemonList.types";
import useFetch from "../hooks/useFetch";
import { useSearch } from "../store/search.store";

const PokemonList = () => {
  const { allPokemon } = usePokemon();
  const { value } = useSearch();

  const [url, setUrl] = useState<URL | string>("");
  const [pokemons, setPokemons] = useState<
    POKEMON_LIST_RESULTS_SCHEMA[] | null
  >(null);
  const [searchPokemons, setSearchPokemons] = useState<
    POKEMON_LIST_RESULTS_SCHEMA[] | null
  >(null);

  const data = useFetch(
    (!url ? "https://pokeapi.co/api/v2/pokemon?limit=15" : url) as string
  );

  const pokemonList = searchPokemons || pokemons;
  const hasMore = searchPokemons
    ? Boolean(!searchPokemons)
    : Boolean(data?.next);

  const filterPokemon = () => {
    if (!value || !pokemons) return;
    const filtered = pokemons.filter((pokemon) => {
      const nameMatch = pokemon.name.includes(value);
      const idMatch = `${getIdFromUrl(pokemon.url)}`.includes(value);
      return nameMatch || idMatch;
    });

    setSearchPokemons(filtered);
  };

  const loadMore = () => {
    if (data?.next) setUrl(data.next);
  };

  useEffect(() => {
    if (!url && data) setPokemons(data.results);
    if (url && data && pokemons) setPokemons(pokemons.concat(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (value.length > 0) filterPokemon();
    if (!value) setSearchPokemons(null);
  }, [value]);
  return (
    <section className="max-w-screen-xl w-full flex flex-col items-center flex-grow h-inherit">
      <SearchInput />

      <p className="w-full mb-6 ">
        Results:{" "}
        <mark className="font-medium bg-transparent">
          {value ? searchPokemons?.length : data?.count}
        </mark>
      </p>

      <hr />

      <div id="scrollableDiv" className="w-full flex-grow overflow-y-auto ">
        {pokemonList && pokemonList.length > 0 ? (
          <InfiniteScroll
            dataLength={pokemonList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<span>Loading...</span>}
            scrollableTarget="scrollableDiv"
            className="w-full grid grid-cols-1 divide-y-2 px-1"
          >
            {pokemonList?.map((pokemon, idx) => (
              <PokemonEntry
                key={pokemon.name + idx}
                id={getIdFromUrl(pokemon.url) as number}
                name={pokemon.name}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <span>No Pokemon found</span>
        )}
      </div>
    </section>
  );
};

export default PokemonList;
