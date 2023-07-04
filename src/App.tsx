// import {
//   MD3LightTheme as DefaultTheme,
//   PaperProvider,
//   useTheme,
// } from 'react-native-paper';
// import { RootNavigator } from './navigation/RootNavigator';

import { FlatList, View } from 'react-native';
import PokemonCard, {
  PokemonProps,
} from './components/PokemonCard/PokemonCard';
import { colors } from './utils/colors';

//const pokemon: PokemonProps[] = data as PokemonProps[];

const pokemon: PokemonProps[] = [
  {
    id: '001',
    name: 'bulbasaur',
    type: ['Grass', 'Poison'],
    img: require('./api/data/images/gen_01/001.png'),
  },
  {
    id: '002',
    name: 'ivysaur',
    type: ['Grass'],
    img: require('./api/data/images/gen_01/002.png'),
  },
  {
    id: '003',
    name: 'venusaur',
    type: ['Grass'],
    img: require('./api/data/images/gen_01/003.png'),
  },
  {
    id: '004',
    name: 'Charmander',
    type: ['Fire'],
    img: require('./api/data/images/gen_01/004.png'),
  },
];

// const theme = {
//   ...DefaultTheme,
//   secondaryContainer: true,
//   colors: {
//     ...DefaultTheme.colors,
//     secondaryContainer: 'rgba(255,255,255,0)',
//   },
//   fonts: {
//     ...DefaultTheme.fonts,
//     labelSmall: {
//       fontFamily: 'Poppins-Regular',
//       fontSize: 11,
//     },
//     labelMedium: {
//       fontFamily: 'Poppins-SemiBold',
//       fontSize: 12,
//     },
//     labelLarge: {
//       fontFamily: 'Poppins-SemiBold',
//       fontSize: 14,
//     },
//   },
// };

// export type AppTheme = typeof theme;

// export const useAppTheme = () => useTheme<AppTheme>();

// export default function App() {
//   return (
//     <PaperProvider theme={theme} settings={{ rippleEffectEnabled: false }}>
//       <RootNavigator />
//     </PaperProvider>
//   );
// }

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.neutral[900],
        paddingTop: 48,
      }}
    >
      <FlatList
        data={pokemon}
        keyExtractor={item => item.id}
        contentContainerStyle={{ gap: 16 }}
        renderItem={({ item }) => (
          <PokemonCard
            id={item.id}
            name={item.name}
            type={item.type}
            img={item.img}
          />
        )}
      />
    </View>
  );
}
