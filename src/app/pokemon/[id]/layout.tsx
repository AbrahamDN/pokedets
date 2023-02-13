import { Suspense } from "react";
import Template from "./template";
import PokemonPage from "./page";
import { getAllPokemon, getPokemon } from "@/app/utils/getPokemon";
import { theme } from "../../../../tailwind.config";

export default async function PokemonLayout({
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const allPokemon = await getAllPokemon();
  const pokemon = await getPokemon(id);
  const colors = theme.extend.colors;

  return (
    <section className="relative">
      <Template allPokemon={allPokemon} pokemon={pokemon}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <PokemonPage />
        </Suspense>
      </Template>

      {pokemon && (
        <span
          className="w-full h-full fixed inset-0 -z-10 opacity-[.13]"
          style={{
            background: `linear-gradient(143.33deg, ${
              colors[pokemon.types[0].type.name]
            } -28.36%, rgba(115, 87, 151, 0) 78.66%), #FFFFFF`,
          }}
        />
      )}
    </section>
  );
}
