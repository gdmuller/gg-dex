import { StyleSheet, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { getColorByType } from '../../utils/getColorByType';
import { FireBadge, GrassBadge, PoisonBadge } from './icons';

export type TypeList = {
  Normal: 'normal';
  Fighting: 'fighting';
  Flying: 'flying';
  Poison: 'poison';
  Ground: 'ground';
  Rock: 'rock';
  Bug: 'bug';
  Ghost: 'ghost';
  Steel: 'steel';
  Fire: 'fire';
  Water: 'water';
  Grass: 'grass';
  Electric: 'electric';
  Psychic: 'psychic';
  Ice: 'ice';
  Dragon: 'dragon';
  Dark: 'dark';
  Fairy: 'fairy';
};

type BadgeIconType = {
  [key in keyof TypeList]: (props: SvgProps) => JSX.Element;
};

type IconType = {
  name: keyof TypeList;
};

const badgeIcons: BadgeIconType = {
  Normal: (props: SvgProps) => <GrassBadge {...props} />,
  Fighting: (props: SvgProps) => <GrassBadge {...props} />,
  Flying: (props: SvgProps) => <GrassBadge {...props} />,
  Poison: (props: SvgProps) => <PoisonBadge {...props} />,
  Ground: (props: SvgProps) => <GrassBadge {...props} />,
  Rock: (props: SvgProps) => <GrassBadge {...props} />,
  Bug: (props: SvgProps) => <GrassBadge {...props} />,
  Ghost: (props: SvgProps) => <GrassBadge {...props} />,
  Steel: (props: SvgProps) => <GrassBadge {...props} />,
  Fire: (props: SvgProps) => <FireBadge {...props} />,
  Water: (props: SvgProps) => <GrassBadge {...props} />,
  Grass: (props: SvgProps) => <GrassBadge {...props} />,
  Electric: (props: SvgProps) => <GrassBadge {...props} />,
  Psychic: (props: SvgProps) => <GrassBadge {...props} />,
  Ice: (props: SvgProps) => <GrassBadge {...props} />,
  Dragon: (props: SvgProps) => <GrassBadge {...props} />,
  Dark: (props: SvgProps) => <GrassBadge {...props} />,
  Fairy: (props: SvgProps) => <GrassBadge {...props} />,
};

const BadgeIcon = ({ name, ...reset }: IconType) => {
  const Icon = badgeIcons[name];
  return <Icon {...reset} />;
};

const TypeBadge = ({ type }: { type: Array<keyof TypeList> }) => {
  const backgroundColor = getColorByType(type).color;
  const color = getColorByType(type).text;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <BadgeIcon name={type[0]} />
      <Text style={[styles.text, { color }]}>{type}</Text>
    </View>
  );
};

export default TypeBadge;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 4,
  },
  text: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
  },
});
