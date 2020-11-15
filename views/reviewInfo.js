import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../card';
import Rating from '../rating';
import globalStyles from '../styles/globalStyles'

export default function ReviewInfo({navigation, route}) {
  
  const goBackHandler = () => navigation.goBack()

    const {title, body, rating} = route.params;

    return (
    <View style={globalStyles.container}>
        <Card>
        <Text style={styles.reviewTitle}>{title}</Text>
        <Text style={styles.reviewBody}>{body}</Text>
        <Rating rating={rating} />
        </Card>
        <View style={styles.reviewButtonContainer}>
            <Button title="Wróć do Strefy Gier" onPress={goBackHandler}  color="#f5ce42"/>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    reviewTitle: {
        fontSize: 19,
        fontFamily: 'lato-bold'
    },
    reviewBody: {
        paddingVertical: 12
    }, 
    reviewButtonContainer: {
        marginTop: 'auto'
    }
})
