import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo'
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';
import GlobalNavigator from './routes/homeNavigator';
import SideDrawerNavigator from './routes/sideDrawerNavigator';

const loadCustomFonts = () => (
  Font.loadAsync({
    'lato-regular': require('./assets/customFonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/customFonts/Lato-Bold.ttf')
  })
)

export default function App() {

  const [isFontsLoaded, setIsFontsLoaded] = React.useState(false);

  if(isFontsLoaded) {
    return <SideDrawerNavigator/>
  } else {
    return <AppLoading
      startAsync={loadCustomFonts}
      onFinish={() => setIsFontsLoaded(true)}
    />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03befc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
