"use client";
import { useLoading } from "@/app/store/loading.store";
import { useScreenStore } from "@/app/store/screenSize.store";
import { useSidebar } from "@/app/store/sidebar.store";
import Text from "../../components/Text";
import Image from "next/image";
import { useEffect } from "react";
import { usePokemon } from "@/app/store/pokemon.store";
import Type from "@/app/components/Type";
import PokemonStats from "@/app/components/PokemonStats";

const PokemonContent = () => {
  const { pokemon } = usePokemon();
  const { lgScreen } = useScreenStore();
  const { sidebar } = useSidebar();
  const { loading, setLoading } = useLoading();
  const breakpoint = lgScreen && sidebar;

  useEffect(() => {
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div></div>;

  return (
    <div
      className={`h-auto w-full grid ${
        lgScreen && !sidebar ? "grid-cols-3" : "text-center max-lg:max-w-md"
      } gap-5 ${!sidebar ? "lg:place-content-center" : "max-w-md"} my-auto`}
    >
      <div className="max-lg:mt-6 lg:mb-6 lg:self-center">
        <Text as="span" level={3}>
          #{pokemon?.id}
        </Text>

        <Text as="h1" level={1} className="mb-4 lg:mb-6 capitalize">
          {pokemon?.name}
        </Text>

        <Text>{pokemon?.about}</Text>
      </div>

      <div
        className={`relative w-full h-full lg:aspect-square ${
          breakpoint || !lgScreen ? "row-start-1" : "items-center"
        } flex justify-center `}
      >
        {!loading && (
          <Image
            className="lg:absolute"
            src={`/img/pokemon/${pokemon?.id}.png`}
            alt="Pokemon"
            width={lgScreen ? (sidebar ? 359 : 409) : 217}
            height={lgScreen ? (sidebar ? 359 : 409) : 217}
            priority
          />
        )}
      </div>

      <div className="w-full text-left max-lg:mt-10">
        <div className="mb-10">
          <Text as="h2" level={2} className="mb-7">
            Type
          </Text>

          <ul className="w-full flex flex-wrap gap-2.5 lg:gap-4">
            {pokemon?.types.map((type) => (
              <li key={`type-${type.slot}`}>
                <Type name={type.type.name} />
              </li>
            ))}
          </ul>
        </div>

        {pokemon && <PokemonStats stats={pokemon.stats} />}
      </div>
    </div>
  );
};
export default PokemonContent;
