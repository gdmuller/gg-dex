import { ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../utils/colors';
import Container from './Container';
import Item from './Item';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 12, paddingHorizontal: 4 }}
      >
        <Container title="Pokédex">
          <Item text="Mega evoluções" value="switch" />
          <Item text="Outras formas" value="switch" />
        </Container>
        <Container title="Notificações">
          <Item text="Atualizações na pokédex" value="switch" />
          <Item text="Mundo Pokémon" value="switch" />
        </Container>
        <Container title="Idioma">
          <Item text="Idioma da interface" value="Português (pt-BR)" />
          <Item text="Idioma de informações em jogo" value="English (en-US)" />
        </Container>
        <Container title="Geral">
          <Item text="Versão" value="0.1.0-alpha" />
          <Item text="Termos e condições" />
          <Item
            text="Central de ajuda"
            value="Precisa de ajuda? Fale conosco."
          />
          <Item text="Sobre" value="Saiba mais sobre o app." />
        </Container>
        <View style={{ marginVertical: 32 }}>
          <Container title="Outros">
            <Item
              text="Sair"
              value="Você entrou como ${first_name} + ${last_name}"
            />
          </Container>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 64,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
