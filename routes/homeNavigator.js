import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../views/home';
import Review from '../views/reviewInfo';

const {Navigator, Screen} = createStackNavigator();

//Nawigacja po ekranie głownym oraz ekranie recenzji

const HomeNavigator = () => (
    <Navigator headerMode="none">
        <Screen name="Home" component={Home}/>
        <Screen name="Review" component={Review} options={{title: 'Review Details', headerStyle: {backgroundColor: '#0388fc'}}}/>
    </Navigator>
)

export default HomeNavigator;
