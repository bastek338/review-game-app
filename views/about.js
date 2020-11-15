import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Widok "o aplikacji"

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Celem tej aplikacji jest możliwość dodawania recenzji i podejrzenia recenzji po kliknięciu :) </Text>
      <Text>Sebastian Domnik</Text>
      <Text>nr albumu: 63088</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});