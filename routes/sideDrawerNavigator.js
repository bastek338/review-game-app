import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../header'
import Home from './homeNavigator';
import About from './aboutNavigator';

const { Navigator, Screen } = createDrawerNavigator();

// Widok sidebara, ktory otwieramy za pomocą ikonki hamburgera. Widzimy tam liste odnosnikow do strony glownej lub ekranu O aplikacji

export const DrawerNavigator = ({navigation}) => (
  <Navigator initialRouteName='Home'>
    <Screen
      name='Home'
      component={Home}
      options={{title: 'Strefa Gier', headerStyle: {backgroundColor: '#0388fc'}, headerTitle: () => <Header navigation={navigation} text="STREFA GIER"/>}}
    />
    <Screen
      name='About'
      component={About}
      options={{title: 'O aplikacji', headerStyle: {backgroundColor: '#0388fc'}, headerTitle: () => <Header navigation={navigation} text="O APLIKACJI"/>}}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;