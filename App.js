import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import Form from './components/Form';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5

import "@expo/vector-icons"; // 6.2.2

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Card title="Add Recipes Form">
          <Form />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  
});