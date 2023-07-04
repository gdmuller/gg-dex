import { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import pokeAPI from '../../api';
import { Header } from '../../components/Header';
import { Pokemon } from '../../types/pokemon';

const PokedexScreen = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const loadPokemon = useCallback(
    async (offsetValue = offset) => {
      try {
        setLoading(true);

        const response = await pokeAPI.get<Pokemon[]>('pokemon', {
          params: {
            offset: offsetValue,
          },
        });
        const { data } = response;
      } catch (err) {
        console.log(err);
      }
    },
    [pokemon]
  );
  return (
    <View style={styles.container}>
      <Header>
        <Text>Pokédex</Text>
      </Header>
    </View>
  );
};

export default PokedexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
