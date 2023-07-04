import { colors } from './colors';

export const TYPE_COLORS: {
  [key: string]: {
    color: string;
    background: string;
    text: string;
  };
} = {
  normal: {
    color: colors.type.normal,
    background: colors.background.normal,
    text: colors.black,
  },
  fighting: {
    color: colors.type.fighting,
    background: colors.background.fighting,
    text: colors.white,
  },
  flying: {
    color: colors.type.flying,
    background: colors.background.flying,
    text: colors.black,
  },
  poison: {
    color: colors.type.poison,
    background: colors.background.poison,
    text: colors.black,
  },
  ground: {
    color: colors.type.ground,
    background: colors.type.ground,
    text: colors.black,
  },
  rock: {
    color: colors.type.rock,
    background: colors.background.rock,
    text: colors.black,
  },
  bug: {
    color: colors.type.bug,
    background: colors.background.bug,
    text: colors.black,
  },
  ghost: {
    color: colors.type.ghost,
    background: colors.background.ghost,
    text: colors.white,
  },
  steel: {
    color: colors.type.steel,
    background: colors.background.steel,
    text: colors.black,
  },
  fire: {
    color: colors.type.fire,
    background: colors.background.fire,
    text: colors.black,
  },
  water: {
    color: colors.type.water,
    background: colors.type.water,
    text: colors.black,
  },
  grass: {
    color: colors.type.grass,
    background: colors.background.grass,
    text: colors.black,
  },
  electric: {
    color: colors.type.electric,
    background: colors.background.electric,
    text: colors.black,
  },
  psychic: {
    color: colors.type.psychic,
    background: colors.background.psychic,
    text: colors.black,
  },
  ice: {
    color: colors.type.ice,
    background: colors.background.ice,
    text: colors.black,
  },
  dragon: {
    color: colors.type.dragon,
    background: colors.background.dragon,
    text: colors.white,
  },
  dark: {
    color: colors.type.dark,
    background: colors.background.dark,
    text: colors.white,
  },
  fairy: {
    color: colors.type.fairy,
    background: colors.background.fairy,
    text: colors.black,
  },
} as const;

export const getColorByType = (type: Array<keyof typeof TYPE_COLORS>) => {
  const firstType = type[0] as string;
  return TYPE_COLORS[firstType.toLowerCase()];
};
