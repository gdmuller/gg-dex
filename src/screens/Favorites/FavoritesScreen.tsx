import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../../components/Header';
import { colors } from '../../utils/colors';

const FavoritesScreen = () => (
  <View style={styles.container}>
    <Header>
      <Text>Favoritos</Text>
    </Header>
    <View style={{ gap: 16 }}>
      <Image source={require('./images/favorites_01.png')} />
      <View style={{ gap: 8 }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: colors.neutral[800],
            textAlign: 'center',
          }}
        >
          Você precisa entrar em uma conta para fazer isso.
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
            color: colors.neutral[700],
            textAlign: 'center',
          }}
        >
          Para acessar essa funcionalidade é necessário fazer login ou criar uma
          conta.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>Entre ou Cadastre-se</Text>
      </TouchableOpacity>
      H
    </View>
  </View>
);

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 32,
    gap: 24,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    height: 58,
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 24,
    justifyContent: 'center',
    borderColor: colors.blue,
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.blue,
    textAlign: 'center',
  },
});
