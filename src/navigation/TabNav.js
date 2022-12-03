import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Cart from '../screen/Cart';
import Category from '../screen/Category';
import HomePage from '../screen/HomePage';
import Profile from '../screen/Profile';
import Search from '../screen/Search';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Tab = createBottomTabNavigator();

export const TabNav = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomePage"
      component={HomePage}
      options={{
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({focused}) =>
          focused ? (
            <View style={{width: 50, paddingLeft: 10, paddingTop: 5}}>
              <Icon name="home" size={35} color="#192f6a" />
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 15,
              }}>
              <Icon name="home" size={25} color={'#4c669f'} />
              <Text style={{color: '#4c669f', fontSize: 10}}>Home</Text>
            </View>
          ),
      }}
    />
    <Tab.Screen
      name="Category"
      component={Category}
      options={{
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({focused}) =>
          focused ? (
            <View style={{width: 50, paddingLeft: 10, paddingTop: 5}}>
              <Icon name="category" size={35} color="#192f6a" />
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 15,
              }}>
              <Icon name="category" size={25} color={'#4c669f'} />
              <Text style={{color: '#4c669f', fontSize: 10}}>Category</Text>
            </View>
          ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({focused}) =>
          focused ? (
            <View style={{width: 50,height:40, paddingLeft: 10, paddingTop: 5}}>
              <Icon name="shopping-cart" size={35} color="#192f6a" />
            </View>
          ) : (
            <View style={{width: 50,height:40, paddingLeft: 10, paddingTop: 5}}>
              <Icon name="shopping-cart" size={35} color="#4c669f" />
            </View>
          ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({focused}) =>
          focused ? (
            <View style={{width: 50, paddingLeft: 10, paddingTop: 5}}>
              <Icon name="search" size={35} color="#192f6a" />
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 15,
              }}>
              <Icon name="search" size={25} color={'#4c669f'} />
              <Text style={{color: '#4c669f', fontSize: 10}}>Search</Text>
            </View>
          ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({focused}) =>
          focused ? (
            <View style={{width: 50, paddingLeft: 10, paddingTop: 5}}>
              <Icon name="person" size={35} color="#192f6a" />
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 15,
              }}>
              <Icon name="person" size={25} color={'#4c669f'} />
              <Text style={{color: '#4c669f', fontSize: 10}}>Profile</Text>
            </View>
          ),
      }}
    />
  </Tab.Navigator>
);
