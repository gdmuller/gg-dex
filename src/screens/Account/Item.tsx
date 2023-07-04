import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../utils/colors';
import { ExitIcon, LinkIcon } from './icons';

type ItemProps = {
  text: string;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  switch?: React.ReactElement;
};

export default function Item({ text, value, icon, onPress }: ItemProps) {
  const isPressable = onPress !== undefined;
  return isPressable ? (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon && <View style={{ paddingRight: 8 }}>{icon}</View>}
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>{value}</Text>
        <View style={{ paddingLeft: 8 }}>
          {text === 'Sair' ? <ExitIcon /> : <LinkIcon />}
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon && <View style={{ paddingRight: 8 }}>{icon}</View>}
        <Text
          style={[
            styles.text,
            text === 'Sair' && { color: colors.red },
            { fontFamily: 'Poppins-SemiBold' },
          ]}
        >
          {text}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[styles.text, { fontFamily: 'Poppins-Regular' }]}>
          {value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
    color: colors.neutral[700],
  },
});
