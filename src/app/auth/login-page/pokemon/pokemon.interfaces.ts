export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;

  sprites: {
    front_default: string;
  };

  types: {
    slot: number;
    type: { name: string }
  }[];

  base_experience: number;
  moves: { move: { name: string } }[];
  order: number;
}
