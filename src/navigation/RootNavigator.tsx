import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { LeftButton } from '../components/Header';
import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        options={{
          headerLeft: () => <LeftButton icon="back" />,
        }}
        name="App"
        component={TabNavigator}
      />
    </RootStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
