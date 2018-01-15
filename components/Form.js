import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, CheckBox, Icon } from 'react-native-elements' // 0.19.0

import "@expo/vector-icons"; // 6.2.2

export default class Form extends Component {
  state = { 
    checked: false
  }
  
  handleCheckbox = () =>{
    if (this.state.checked === true){
      this.setState({checked: false});
    }
    else if (this.state.checked === false){
      this.setState({checked: true});
    }
  }
  render() {
    return (
      <View style={styles.container}>
       
        <FormLabel>Recipe Name</FormLabel>
        <FormInput />
        <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        
         <FormLabel>Ingredients</FormLabel>
        <FormInput />
        <Icon
          name='add-circle'
          color='#00aced' />
          
          <FormLabel>Steps</FormLabel>
        <FormInput />
        <Icon
          name='add-circle'
          color='#00aced' />
        
        <FormLabel>Serving Size</FormLabel>
        <FormInput />
        
        <FormLabel>Prep Time</FormLabel>
        <FormInput />
        
        <FormLabel>Cook Time</FormLabel>
        <FormInput />
        
        <FormLabel>Nutrition Information</FormLabel>
        <FormLabel>Calories</FormLabel>
        <FormInput />
         <FormLabel>Carbs</FormLabel>
        <FormInput />
         <FormLabel>Protein</FormLabel>
        <FormInput />
         <FormLabel>Fat</FormLabel>
        <FormInput />
        
        <FormLabel>Dietary Info</FormLabel>
        <CheckBox
            title='Vegan' onPress={this.handleCheckbox}
            checked={this.state.checked}
        />
        
        <FormLabel>Notes</FormLabel>
        <FormInput />
          
       <Button
        raised
        title='SUBMIT RECIPE' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }


});