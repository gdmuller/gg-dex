export type Type = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  description: string;
  gen: string;
  dex_number: string;
  types: Type[];
  height: number;
  weigth: number;
  gender_rate: number;
};

export type Gender = {
  gender: 'genderless' | 'male' | 'female';
  rate?: number;
};

export type DefaultEvolution = {
  name: string;
  url: string;
  min_level: number;
  image: string;
};

export type EvolutionChain = {
  base_form: {
    name: string;
    image: string;
  };
  first_evo: DefaultEvolution;
  second_evo: DefaultEvolution;
};
