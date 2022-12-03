import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StackNav } from './src/navigation/StackNav';


const App = () => {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
};

export default App;
