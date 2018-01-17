import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, CheckBox} from 'react-native-elements' // 0.19.0
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput'; // 5.0.0
import "@expo/vector-icons"; // 6.2.2


export default class Form extends Component {
  state = { 
    checked: false,
    vegchecked: false,
    glutchecked: false,
    dachecked: false,
    textValue: 'Enter ingredients here',
    textStepValue: 'Enter steps here'
  }
  //   constructor(props) {
  //   super(props);
  //   this.state = {textValue: 'Enter ingredients here'};
  //   this.state = {textStepValue: 'Enter steps here'};
  // }

 
  
  handleCheckbox = () =>{
    if (this.state.checked === true){
      this.setState({checked:false});
    }
    else if (this.state.checked === false){
      this.setState({checked: true});
    }
  }
    handlevegCheckbox = () =>{
    if (this.state.vegchecked === true){
      this.setState({vegchecked:false});
    }
    else if (this.state.vegchecked === false){
      this.setState({vegchecked: true});
    }
  }
    handleglutCheckbox = () =>{
    if (this.state.glutchecked === true){
      this.setState({glutchecked:false});
    }
    else if (this.state.glutchecked === false){
      this.setState({glutchecked: true});
    }
  }
    handledaCheckbox = () =>{
    if (this.state.dachecked === true){
      this.setState({dachecked:false});
    }
    else if (this.state.dachecked === false){
      this.setState({dachecked: true});
    }
  }
  
  
  
     onChange = (event) => {
    this.setState({ textValue: event.nativeEvent.text || '' });
  }
      onStepChange = (event) => {
    this.setState({ textStepValue: event.nativeEvent.text || '' });
  }
  
  handleSubmit = () =>{
    Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
  }
  
  
  
  render() {
    return (
    
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled>
        <View style={styles.container}>
         
          <FormLabel>Recipe Name</FormLabel>
          <FormInput style = {styles.formInput} />
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
          
           <FormLabel>Ingredients</FormLabel>
             <AutoGrowingTextInput
              value={this.state.textValue}
              onChange={this.onChange}
              style={styles.textInput}
              placeholder={'Your Message'}
              placeholderTextColor='#66737C'
              maxHeight={200}
              minHeight={45}
              enableScrollToCaret
              ref={(r) => { this._textInput = r; }}
            />

            
            <FormLabel>Steps</FormLabel>
            <AutoGrowingTextInput
              value={this.state.textStepValue}
              onChange={this.onStepChange}
              style={styles.textInput}
              placeholder={'Your Message'}
              placeholderTextColor='#66737C'
              maxHeight={200}
              minHeight={45}
              enableScrollToCaret
              ref={(r) => { this._textInput = r; }}
            />

          
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
            <CheckBox
              title='Vegetarian' onPress={this.handlevegCheckbox}
              checked={this.state.vegchecked}
          />
           <CheckBox
              title='Gluten Free' onPress={this.handleglutCheckbox}
              checked={this.state.glutchecked}
          />
           <CheckBox
              title='Dairy Free'  onPress={this.handledaCheckbox}
              checked={this.state.dachecked}
          />
          
          <FormLabel>Notes</FormLabel>
          <FormInput />
            
         <Button 
          raised
          style= {styles.button}
          onPress = {this.handleSubmit}
          title='SUBMIT RECIPE' />
        </View>
      </ScrollView>
     
    );
  }
}

  
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
  },
  
  formInput:{
    padding: 15
  },
  button:{
    marginTop:50,
    paddingBottom: 100
  },
  textInput:{
    width: 300,
    backgroundColor: '#F8F8F8'
  }


});