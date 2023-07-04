import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { colors } from '../../utils/colors';
import { RegionCard, regions } from './RegionCard';

const RegionsScreen = () => (
  <View style={styles.container}>
    <Header>
      <Text>Regiões</Text>
    </Header>
    <FlatList
      data={regions}
      keyExtractor={regions => String(regions.name)}
      renderItem={({ item: regions }) => {
        return (
          <RegionCard
            gen={regions.gen}
            image={regions.image}
            name={regions.name}
            starters={regions.starters}
          />
        );
      }}
    />
  </View>
);

export default RegionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    //paddingHorizontal: 16,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
