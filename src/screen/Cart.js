import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../components/Cartpage/Header';
import {StackActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeaturedProduct from '../components/Homepage/FeaturedProduct';
import CartItem from '../components/Cartpage/CartItem';
import Checkout from '../components/Cartpage/Checkout';
const {width} = Dimensions.get('window');

const Cart = ({navigation}) => {
  const popAction = StackActions.pop();

  const backToSrceen = () => {
    navigation.dispatch(popAction);
  };

  const goToProduct = item => {
    navigation.navigate('Product', {urlKey: item.urlKey});
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        animated={true}
        backgroundColor="#192f6a"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <Header backToScreen={backToSrceen} />
      <CartItem/>
      <Divider />
      <OfferBadge />
      <Divider />
      <FeaturedProduct
        name={'You Might Also Like'}
        goToProduct={goToProduct}
        suggestion={false}
      />
      <Checkout/>
      

    </ScrollView>
  );
};

export default Cart;

const Divider = () => (
  <View style={{width: width, height: 5, backgroundColor: '#4c669f'}}></View>
);

const OfferBadge = () => (
  <View
    style={{
      width: width,
      height: 50,
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Icon name="verified" size={18} color="green" />
      <Text
        style={{
          color: '#000',
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 10,
        }}>
        Avail offers / Coupons
      </Text>
    </View>
    <Icon name="chevron-right" size={25} color="#192f6a" />
  </View>
);
