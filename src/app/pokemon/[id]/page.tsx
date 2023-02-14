import { getAllPokemon } from "@/app/utils/getPokemon";
import PokemonContent from "./PokemonContent";
import getIdFromUrl from "@/app/utils/getIdFromUrl";

const PokemonPage = async () => {
  return (
    <main className="max-w-screen-xl">
      <PokemonContent />
    </main>
  );
};
export default PokemonPage;

export async function generateStaticParams() {
  const allPokemon = await getAllPokemon();

  return allPokemon.results.map((pokemon) => ({
    id: getIdFromUrl(pokemon.url),
  }));
}
