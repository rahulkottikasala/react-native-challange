import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Videos from './tab/Videos';
import Chapter from './tab/Chapter';
import Resources from './tab/Resources';
import QnBank from './tab/QnBank';
import {Text} from 'react-native';
import SearchBar from './tab/SearchBar';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        indicatorStyle: {backgroundColor: 'red', height: 2},
      }}>
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Chapter"
        component={Chapter}
        options={{
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Qn bank"
        component={QnBank}
        options={{
          tabBarInactiveTintColor: 'grey',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SearchBar />
      <MyStack />
    </NavigationContainer>
  );
}
