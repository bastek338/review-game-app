import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const Header = ({text}) => {

    return (
        <View style={styles.header}> 
            <Ionicons name="logo-game-controller-b" size={24} color="white" />
            <Text style={styles.headerText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        paddingLeft: 8
    },
});

export default Header;
