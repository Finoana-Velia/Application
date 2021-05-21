import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigator/GetStarted.js';
import Menu from './Component/Menu.js';




export default function App() {
  
  return (
    
    
      <NavigationContainer>
         <Navigation/>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon : {
    width:30,
    height:30,
  }
});
