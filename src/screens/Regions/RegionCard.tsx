import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../../utils/colors';

type RegionCardProps = {
  name: string;
  gen: string;
  image: ImageSourcePropType;
  starters: {
    grass: ImageSourcePropType;
    fire: ImageSourcePropType;
    water: ImageSourcePropType;
  };
};

export const regions: RegionCardProps[] = [
  {
    name: 'Kanto',
    gen: '1ª Geração',
    image: require('./images/kanto.png'),
    starters: {
      grass: require('./images/starters/01_001.png'),
      fire: require('./images/starters/01_002.png'),
      water: require('./images/starters/01_003.png'),
    },
  },
  {
    name: 'Johto',
    gen: '2ª Geração',
    image: require('./images/johto2.png'),
    starters: {
      grass: require('./images/starters/02_001.png'),
      fire: require('./images/starters/02_002.png'),
      water: require('./images/starters/02_003.png'),
    },
  },
  {
    name: 'Hoenn',
    gen: '3ª Geração',
    image: require('./images/hoenn.png'),
    starters: {
      grass: require('./images/starters/03_001.png'),
      fire: require('./images/starters/03_002.png'),
      water: require('./images/starters/03_003.png'),
    },
  },
];

export const RegionCard = ({ name, gen, image, starters }: RegionCardProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        key={name}
        resizeMode="cover"
        source={image}
      >
        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.region}>{name}</Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: 'Poppins-Regular',
              color: colors.white,
              textTransform: 'uppercase',
            }}
          >
            {gen}
          </Text>
        </View>
        <View style={{ width: '60%', flexDirection: 'row' }}>
          <Image source={starters.grass} />
          <Image source={starters.fire} />
          <Image source={starters.water} />
        </View>
      </ImageBackground>
      );
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
    height: '100%',
    paddingVertical: 16,
  },
  background: {
    //width: '100%',
    height: 102,

    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  region: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
  },
});
