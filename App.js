import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './src/pages/Cart';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={Cart}/>
      
    </Stack.Navigator>
  );
}
const App = () => {
  

  
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;


