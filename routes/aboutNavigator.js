import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../views/about';

const {Navigator, Screen} = createStackNavigator();

const AboutNavigator = () => (
    <Navigator headerMode="none">
        <Screen name="About" component={About}/>
    </Navigator>
)


export default AboutNavigator;
