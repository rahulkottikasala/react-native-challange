import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Cartpage/Header';
import { StackActions, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeaturedProduct from '../components/Homepage/FeaturedProduct';
import CartItem from '../components/Cartpage/CartItem';
import Checkout from '../components/Cartpage/Checkout';
import {
  addToCartData,
  emptyCartList,
  getAllCartItems,
  removeFromCart,
  updateCartData,
} from '../../realm';

const { width } = Dimensions.get('window');

const Cart = ({ navigation }) => {
  const [cartData, setCartData] = useState(getAllCartItems());
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(false);

  const popAction = StackActions.pop();

  //find count of Product
  useFocusEffect(() => {
    let count = 0;
    for (let i = 0; i < cartData.length; i++) {
      count += cartData[i].count;
    }
    setCount(count);
  });

  const backToSrceen = () => {
    navigation.dispatch(popAction);
  };

  const goToProduct = item => {
    navigation.navigate('Product', { urlKey: item.urlKey });
  };

  const addToCart = data => {
    setLoad(!load);
    let count = 1;
    let cartItem = cartData.filter(key => key.recordId === data.urlKey);
    let newCount = cartItem[0]?.count + 1;

    // setCount(cartItem.count++);
    cartData.find(key => key.recordId === data.urlKey)
      ? updateCartData(
          data.urlKey,
          data.prName,
          data.imageUrl,
          data.unitPrice,
          data.specialPrice,
          newCount,
        )
      : addToCartData(
          data.urlKey,
          data.prName,
          data.imageUrl,
          data.unitPrice,
          data.specialPrice,
          count,
        );
    Alert.alert('Item added to cart');
  };

  const incrementItem = data => {
    setLoad(!load);
    let cartItem = cartData.filter(key => key.recordId === data.recordId);
    let newCount = cartItem[0]?.count + 1;

    updateCartData(
      data.recordId,
      data.prName,
      data.imageUrl,
      data.unitPrice,
      data.specialPrice,
      newCount,
    );
  };

  const decrementItem = data => {
    setLoad(!load);
    let cartItem = cartData.filter(key => key.recordId === data.recordId);
    let newCount = cartItem[0]?.count - 1;
    data.count == 1
      ? removeFromCart(data.recordId)
      : updateCartData(
          data.recordId,
          data.prName,
          data.imageUrl,
          data.unitPrice,
          data.specialPrice,
          newCount,
        );
  };

  const emptyCart = () => {
    setLoad(!load);
    Alert.alert('Remove All Items');
    emptyCartList();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        animated={true}
        backgroundColor="#192f6a"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <Header backToScreen={backToSrceen} count={count} emptyCart={emptyCart} />
      <CartItem
        data={cartData}
        increment={incrementItem}
        decrement={decrementItem}
      />
      <Divider />
      <OfferBadge />
      <Divider />
      <FeaturedProduct
        addToCart={addToCart}
        name={'You Might Also Like'}
        goToProduct={goToProduct}
        suggestion={false}
      />
      <Checkout data={cartData} />
    </ScrollView>
  );
};

export default Cart;

const Divider = () => (
  <View style={{ width: width, height: 5, backgroundColor: '#4c669f' }}></View>
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
