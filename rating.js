import React from 'react';
import { View, Image, Text, StyleSheet } from "react-native"

const Rating = ({rating}) => {
    
    let star = undefined;

    switch(rating){
        case 1:
             star = <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
        break;
        case 2:
            star = (
                <>
                <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
                <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
                </>
            )
        case 3: star = (
            <>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            </>
        )
        break;
        case 4: 
            star = (
                <>
                <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
                <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
                <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
                <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
                </>
            )
        break;
        case 5:
        star = (
            <>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            <Image style={{width: 15, height: 15}} source={require('./assets/icon/star.png')}/>
            </>
        )
        break;
        default: 
        break;
         
    }
    
    return <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Ocena gry: </Text>
       {star}
    </View>
}

const styles = StyleSheet.create({
    ratingContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingText: {
        marginRight: 5
    }
})

export default Rating;