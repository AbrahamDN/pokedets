import { Suspense } from "react";
import Template from "./template";
import PokemonPage from "./page";
import { getAllPokemon } from "@/app/utils/getPokemon";

export default async function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPokemon = await getAllPokemon();
  return (
    <section>
      <Template allPokemon={allPokemon}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <PokemonPage />
        </Suspense>
      </Template>
    </section>
  );
}
