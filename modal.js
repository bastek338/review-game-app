import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './form';

const CustomModal = ({modalOpen, setModalOpen, addReview}) => {
    return (
        <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons 
            name='close'
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          
          <ReviewForm addReview={addReview}/>
        </View>
      </Modal>
    )
}

export default CustomModal;

const styles = StyleSheet.create({
    modalToggle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#03befc',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,
    },
    modalContent: {
      flex: 1,
      backgroundColor:'#03befc'
    }
  });