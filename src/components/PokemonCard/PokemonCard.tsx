import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { ImageProps, SvgProps } from 'react-native-svg';
import { getColorByType } from '../../utils/getColorByType';
import TypeBadge, { TypeList } from './TypeBadge';
import { FireBadge, FirePokemon, GrassBadge, GrassPokemon } from './icons';

export interface PokemonProps {
  id: string;
  name: string;
  type: Array<keyof TypeList>;
  img: ImageSourcePropType;
}

type CardIconType = {
  [key in keyof TypeList]: {
    card: (props: SvgProps & ImageProps) => JSX.Element;
    badge: (props: SvgProps) => JSX.Element;
  };
};

type IconType = ImageProps & {
  name: keyof TypeList;
};

const icons: CardIconType = {
  Normal: {
    badge: (props: SvgProps) => <GrassBadge {...props} />,
    card: (props: SvgProps & ImageProps) => <GrassPokemon {...props} />,
  },
  Fighting: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Flying: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Poison: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Ground: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Rock: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Bug: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Ghost: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Steel: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Fire: {
    badge: (props: SvgProps) => <FireBadge />,
    card: (props: SvgProps) => <FirePokemon />,
  },
  Water: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Grass: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Electric: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Psychic: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Ice: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Dragon: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Dark: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
  Fairy: {
    badge: (props: SvgProps) => <GrassBadge />,
    card: (props: SvgProps) => <GrassPokemon />,
  },
};

const CardIcon = ({ href, name, ...reset }: IconType) => {
  const Icon = icons[name].card;
  return <Icon href={href} {...reset} />;
};

const PokemonCard = ({ id, name, type, img }: PokemonProps) => {
  const backgroundColor = getColorByType(type);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor.background },
      ]}
    >
      <View style={styles.info}>
        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12 }}>
          {`Nº ${id}`}
        </Text>
        <Text
          style={{
            textTransform: 'capitalize',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 21,
          }}
        >
          {name}
        </Text>
        <View style={styles.types}>
          {type.map(typeName => (
            <TypeBadge key={typeName} type={[typeName]} />
          ))}
        </View>
      </View>
      <View
        style={[styles.pokemon, { backgroundColor: backgroundColor.color }]}
      >
        <CardIcon name={type[0]} href={img} />
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    width: 328,
    height: 102,
  },
  info: {
    width: 202,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  types: {
    flexDirection: 'row',
    gap: 8,
  },
  pokemon: {
    width: 126,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
