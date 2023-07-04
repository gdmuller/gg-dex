import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { Pokemon } from '../types/pokemon';

export type RootStackParamList = {
  App: MaterialBottomTabNavigationProp<TabParamList>;
  Pokemon: { pokemon: Pokemon; from: string };
};

export type TabParamList = {
  Pokedex: undefined;
  Regions: undefined;
  Favorites: undefined;
  Account: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
