import {createStackNavigator} from '@react-navigation/stack';
import Product from '../pages/Product';
import Cart from '../screen/Cart';
import {TabNav} from './TabNav';

const Stack = createStackNavigator();

export const StackNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tab"
      component={TabNav}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Product"
      component={Product}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Cart"
      component={Cart}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
