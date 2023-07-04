import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { ComponentType } from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import { Account, Favorites, Pokedex, Regions } from '../screens';
import { colors } from '../utils/colors';
import {
  AccountActive,
  AccountInactive,
  FavoritesActive,
  FavoritesInactive,
  PokedexActive,
  PokedexInactive,
  RegionsActive,
  RegionsInactive,
} from './icons';
import { TabParamList } from './types';

export type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

export type TabIconsType = {
  [key in keyof TabParamList]: {
    active: (props: SvgProps) => JSX.Element;
    inactive: (props: SvgProps) => JSX.Element;
  };
};

export type TabList<T extends keyof TabParamList> = {
  route: RouteProp<TabParamList, T>;
};

export type BarIconType = {
  name: keyof TabParamList;
  color: string;
  focused: boolean;
};

const Tab = createMaterialBottomTabNavigator<TabParamList>();

const tabsIcons: TabIconsType = {
  Pokedex: {
    active: (props: SvgProps) => <PokedexActive {...props} />,
    inactive: (props: SvgProps) => <PokedexInactive {...props} />,
  },
  Regions: {
    active: (props: SvgProps) => <RegionsActive {...props} />,
    inactive: (props: SvgProps) => <RegionsInactive {...props} />,
  },
  Favorites: {
    active: (props: SvgProps) => <FavoritesActive {...props} />,
    inactive: (props: SvgProps) => <FavoritesInactive {...props} />,
  },
  Account: {
    active: (props: SvgProps) => <AccountActive {...props} />,
    inactive: (props: SvgProps) => <AccountInactive {...props} />,
  },
};

const tabs: TabType[] = [
  {
    name: 'Pokedex',
    component: Pokedex,
    label: 'Pokédex',
  },
  {
    name: 'Regions',
    component: Regions,
    label: 'Regiões',
  },
  {
    name: 'Favorites',
    component: Favorites,
    label: 'Favoritos',
  },
  {
    name: 'Account',
    component: Account,
    label: 'Perfil',
  },
];

const BarIcon = ({ color, name, focused, ...reset }: BarIconType) => {
  const Icon = focused ? tabsIcons[name].active : tabsIcons[name].inactive;
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => (
  <Tab.Navigator
    shifting={true}
    activeColor={colors.blue}
    barStyle={{
      backgroundColor: colors.white,
      borderTopColor: colors.neutral[100],
      borderTopWidth: 1,
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, focused }) => (
        <BarIcon name={route.name} color={color} focused={focused} />
      ),
      title: 'title',
    })}
  >
    <Tab.Group>
      {tabs.map(({ name, component, label }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{ title: label }}
        />
      ))}
    </Tab.Group>
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
});
