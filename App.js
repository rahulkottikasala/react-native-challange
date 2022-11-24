import { View, Text } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import Register from './src/pages/Register';
import Verify from './src/pages/Verify';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createStackNavigator();


const MyStack = () => (
    <Stack.Navigator>
    <Stack.Screen name='Register' component={Register} options={{headerShown:false}} />
    <Stack.Screen name='Verify' component={Verify} options={{headerShown:false}} />
    <Stack.Screen name='HomePage' component={HomePage} options={{headerShown:false}} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App