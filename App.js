import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./pages/Home";
import DrawerContent from "./pages/DrawerContent";

import Profile from "./drawer/Profile";
import Settings from "./drawer/Settings";
import WalletBalance from "./drawer/WalletBalence";
import Records from "./drawer/Records";
import Refund from "./drawer/Refund";
import AboutUs from "./drawer/AboutUs";
import Help from "./drawer/Help";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Drawer.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Drawer.Screen name="Wallet" component={WalletBalance} options={{headerShown:false}}/>
      <Drawer.Screen name="Records" component={Records} options={{headerShown:false}}/>
      <Drawer.Screen name="Refund" component={Refund} options={{headerShown:false}}/>
      <Drawer.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
      <Drawer.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}}/>
      <Drawer.Screen name="Help" component={Help} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}

export default function App(){
  return<NavigationContainer>
<MyStack/>
  </NavigationContainer>
}