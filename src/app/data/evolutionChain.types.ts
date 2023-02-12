interface NamedAPIResource {
  name: string;
  url: string;
}

export interface EVOLUTION_CHAIN_SCHEMA {
  baby_trigger_item: NamedAPIResource;
  chain: {
    evolution_details: false[];
    evolves_to: {
      evolution_details: {
        gender: number;
        held_item: NamedAPIResource;
        item: NamedAPIResource;
        known_move: NamedAPIResource;
        known_move_type: NamedAPIResource;
        location: NamedAPIResource;
        min_affection: number;
        min_beauty: number;
        min_happiness: number;
        min_level: number;
        needs_overworld_rain: boolean;
        party_species: NamedAPIResource;
        party_type: NamedAPIResource;
        relative_physical_stats: number;
        time_of_day: string;
        trade_species: NamedAPIResource;
        trigger: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        turn_upside_down: boolean;
        [k: string]: unknown;
      }[];
      evolves_to: {
        evolution_details: {
          gender: NamedAPIResource;
          held_item: NamedAPIResource;
          item: NamedAPIResource;
          known_move: NamedAPIResource;
          known_move_type: NamedAPIResource;
          location: NamedAPIResource;
          min_affection: number;
          min_beauty: number;
          min_happiness: number;
          min_level: number;
          needs_overworld_rain: boolean;
          party_species: NamedAPIResource;
          party_type: NamedAPIResource;
          relative_physical_stats: number;
          time_of_day: string;
          trade_species: NamedAPIResource;
          trigger: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          turn_upside_down: boolean;
          [k: string]: unknown;
        }[];
        evolves_to: false[];
        is_baby: boolean;
        species: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      is_baby: boolean;
      species: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  id: number;
  [k: string]: unknown;
}
