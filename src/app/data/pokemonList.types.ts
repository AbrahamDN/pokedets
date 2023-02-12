import { COLOR } from "./colours.types";

export interface POKEMON_LIST_RESULTS_SCHEMA {
  name: string;
  url: URL;
}

export interface POKEMON_LIST_SCHEMA {
  count: number;
  next: URL;
  previous: URL;
  results: POKEMON_LIST_RESULTS_SCHEMA[];
}

export interface POKEMON_SCHEMA {
  abilities: {
    ability: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    is_hidden: boolean;
    slot: number;
    [k: string]: unknown;
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
    [k: string]: unknown;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  height: number;
  held_items: false[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      version_group: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }[];
  name: string;
  order: number;
  past_types: false[];
  species: {
    name: string;
    url: string;
    [k: string]: unknown;
  };
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: {
      dream_world: {
        front_default: string;
        front_female: null;
        [k: string]: unknown;
      };
      home: {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
        [k: string]: unknown;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
          [k: string]: unknown;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      "generation-ii": {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
          [k: string]: unknown;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
          [k: string]: unknown;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      "generation-iii": {
        emerald: {
          front_default: string;
          front_shiny: string;
          [k: string]: unknown;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          [k: string]: unknown;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
          [k: string]: unknown;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
          [k: string]: unknown;
        };
        platinum: {
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string;
            back_female: null;
            back_shiny: string;
            back_shiny_female: null;
            front_default: string;
            front_female: null;
            front_shiny: string;
            front_shiny_female: null;
            [k: string]: unknown;
          };
          back_default: string;
          back_female: null;
          back_shiny: string;
          back_shiny_female: null;
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
          [k: string]: unknown;
        };
        "x-y": {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      "generation-vii": {
        icons: {
          front_default: string;
          front_female: null;
          [k: string]: unknown;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: null;
          front_shiny: string;
          front_shiny_female: null;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      "generation-viii": {
        icons: {
          front_default: string;
          front_female: null;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  stats: POKEMON_STATS_SCHEMA[];
  types: POKEMON_TYPES_SCHEMA[];
  weight: number;
  [k: string]: unknown;
}

export interface POKEMON_TYPES_SCHEMA {
  slot: number;
  type: {
    name: COLOR;
    url: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface POKEMON_STATS_SCHEMA {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface POKEMON_SPECIES_SCHEMA {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
    [k: string]: unknown;
  };
  egg_groups: {
    name: string;
    url: string;
    [k: string]: unknown;
  }[];
  evolution_chain: {
    url: string;
    [k: string]: unknown;
  };
  evolves_from_species: null;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    version: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  form_descriptions: false[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  generation: {
    name: string;
    url: string;
    [k: string]: unknown;
  };
  growth_rate: {
    name: string;
    url: string;
    [k: string]: unknown;
  };
  habitat: {
    name: string;
    url: string;
    [k: string]: unknown;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    name: string;
    [k: string]: unknown;
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    base_score: number;
    rate: number;
    [k: string]: unknown;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  shape: {
    name: string;
    url: string;
    [k: string]: unknown;
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
