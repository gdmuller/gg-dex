import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Container({ children, title }: Props) {
  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      {<View style={styles.container}>{children}</View>}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 24,
    paddingTop: 16,
    paddingBottom: 4,
    color: colors.text.dark,
  },
  container: {
    //borderWidth: 1,
    //borderRadius: 6,
    //borderColor: colors.neutral[300],
    //backgroundColor: colors.white,
  },
});
