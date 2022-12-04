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
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../actions/cart';
import {useEffect} from 'react';

const Cart = ({navigation},props) => {
  const popAction = StackActions.pop();
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartList.cart);
  const cartCount = useSelector(state => state.cartCount.count);
  let newArray = [];
  useEffect(() => {}, [newArray]);

  const backToSrceen = () => {
    navigation.dispatch(popAction);
  };

  const goToProduct = item => {
    navigation.navigate('Product', {urlKey: item.urlKey});
  };

  const addToCartItem = data => {
    let newData = {
      data: data,
      count: 1,
    };
    try {
      cartList.find(key => key.data.urlKey === data.urlKey)
        ? (newArray = [...cartList])
        : (newArray = [...cartList, newData]);
      dispatch(addToCart(newArray));
      cartList.map(key =>
        key.data.urlKey === data.urlKey ? key.count++ : key.count,
      );
      Alert.alert('Cart', `Added to cart${data.prName}`);
    } catch (err) {
      console.log(err);
    }
  };
  const removeItem = data => {
    newArray = [...cartList];
    dispatch(addToCart(newArray));
    cartList.find(key => key.count === 1)
      ? dispatch(removeFromCart(data))
      : cartList.map(key =>
          key.data.urlKey === data.urlKey ? key.count-- : key.count,
        );
    // dispatch(addToCart(...cartList));

    Alert.alert('Cart', `Remove from cart${data.prName}`);
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
      <Header backToScreen={backToSrceen} count={cartCount} />
      <CartItem
        data={cartList}
        removeItem={removeItem}
        addToCart={addToCartItem}
      />
      <Divider />
      <OfferBadge />
      <Text style={{color: '#000'}}></Text>
      <Divider />
      <FeaturedProduct
        name={'You Might Also Like'}
        goToProduct={goToProduct}
        suggestion={false}
        addToCart={addToCartItem}
      />
      <Checkout data={cartList} count={cartCount}/>
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
