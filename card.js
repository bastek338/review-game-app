import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#e0e0e0',
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: 10,
    marginVertical: 8,
    height: 'auto'
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 18,
    marginVertical: 20,
  }
});

export default Card; 