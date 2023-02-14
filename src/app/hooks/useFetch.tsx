import { useEffect, useState } from "react";
import { POKEMON_LIST_SCHEMA } from "../data/pokemonList.types";

const useFetch = (url: string) => {
  const [data, setData] = useState<POKEMON_LIST_SCHEMA | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [url]);

  return data as POKEMON_LIST_SCHEMA;
};
export default useFetch;
