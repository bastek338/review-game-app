import {StyleSheet} from 'react-native';

//Aplikacja stylów do róznych komponentów. Łatwiejsze do zarządzania wyglądem komponentow, elementow, itd.

const globalStyles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#03befc',
        padding: 24
    },
    title: {
        fontFamily: 'lato-regular',
        fontSize: 18,
        color: '#444'
    },
    paragraph: {
        marginVertical: 10,
        lineHeight: 22
    },
    cardTitle: {
        fontFamily: 'lato-bold',
        fontSize: 16.5,
        color: '#000'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        fontSize: 18,
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: "#fff"
    },
})

export default globalStyles;