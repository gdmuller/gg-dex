import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BackButtonProps = {
  icon: string;
};

export const BackButton = (props: BackButtonProps) => {
  if (props.icon === 'leftArrow') {
    return <Ionicons name="ios-arrow-back" size={20} color="#000" />;
  } else if (props.icon === 'menu') {
    return <MaterialIcons name="menu" size={20} color="#000" />;
  }
};

type LeftButtonProps = {
  icon?: string;
};

export const LeftButton = (props: LeftButtonProps) => {
  const navigation = useNavigation();

  if (props.icon === 'back') {
    return (
      <HeaderBackButton
        backImage={() => BackButton({ icon: 'leftArrow' })}
        onPress={() => navigation.goBack()}
      />
    );
  } else {
    return <HeaderBackButton backImage={() => BackButton({ icon: 'menu' })} />;
  }
};

export const Header = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <SafeAreaView>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
