import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import globalStyles from './styles/globalStyles';
import { Formik } from 'formik';

// Formularz dzeki ktoremu mozemy sami ocenic grę i dodac ją do ekranu głownego.

export default function ReviewForm({addReview}) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          const submitData = {
              body: values.body,
              rating: parseInt(values.rating),
              title: values.title
          }
          addReview(submitData);
          console.log(submitData)
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Jaką grę chcesz ocenić?'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Twoja recenzja'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput 
              style={globalStyles.input}
              placeholder='Ocena (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            
            <Button color='maroon' title="Wyślij" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}