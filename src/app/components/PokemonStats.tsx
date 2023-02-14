import React from "react";
import { POKEMON_STATS_SCHEMA } from "../data/pokemonList.types";
import Text from "./Text";
import Progress from "./Progress";

type PokemonStatsProps = {
  stats: POKEMON_STATS_SCHEMA[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  const percentage = (stat: number) =>
    (Array.from({ length: 15 }, (i, x) => (i = stat / 15 >= x)).filter(Boolean)
      .length /
      15) *
    100;

  return (
    <div className="">
      <Text as="h2" level={2} className="mb-7">
        Stats
      </Text>

      <ul className="w-full sm:px-7 grid gap-6">
        {stats.map(({ stat, base_stat }) => (
          <Progress
            key={stat.name}
            label={`${stat.name.replace(/special/i, "sp")} : ${base_stat}`}
            percent={percentage(base_stat)}
          />
        ))}
      </ul>
    </div>
  );
};

export default PokemonStats;
