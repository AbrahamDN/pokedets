import { Suspense } from "react";
import Template from "./template";
import PokemonPage from "./page";
import { getAllPokemon, getPokemon } from "@/app/utils/getPokemon";

export default async function PokemonLayout({
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const allPokemon = await getAllPokemon();
  const pokemon = await getPokemon(id);

  return (
    <section>
      <Template allPokemon={allPokemon} pokemon={pokemon}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <PokemonPage />
        </Suspense>
      </Template>
    </section>
  );
}
