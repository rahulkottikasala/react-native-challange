import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screen/Home';
import List from './src/screen/List';
import AddItem from './src/screen/AddItem';
import Login from './src/screen/Login';
import MobileLogin from './src/screen/MobileLogin';

const Stack = createStackNavigator();

const MyStack = () => (
    <Stack.Navigator>
   
    {/* <Stack.Screen name="Login" component={Login} /> */}
    <Stack.Screen name="MobileLogin" component={MobileLogin} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="List" component={List} />
    <Stack.Screen name="AddItem" component={AddItem} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
     <MyStack/>
    </NavigationContainer>
  );
};

export default App;
const sytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
