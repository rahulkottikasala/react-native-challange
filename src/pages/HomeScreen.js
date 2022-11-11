import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {addToCart, cartCount} from '../actions/cart';
import {data} from '../api/data';
import Header from '../components/Header';

const HomeScreen = () => {
  let dispatch = useDispatch();

  const count = useSelector(state => state.cartCount.count);
  const cartList = useSelector(state => state.cartItem.cart);
  let newArray = [];

  useEffect(() => {
    let length = cartList.length;
    dispatch(cartCount(length));
  });
  handleAddToCart = item => {
    cartList.includes(item)
      ? (newArray = [...cartList])
      : (newArray = [...cartList, item]);
    dispatch(addToCart(newArray));
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: 180,
          marginBottom: 10,
          borderBottomColor: 'black',
          borderBottomWidth: 0.2,
          borderBottomColor: 'grey',
        }}
        key={item.id}>
        <View
          style={{
            height: 160,
            backgroundColor: 'white',
            marginHorizontal: 20,
            flexDirection: 'row',
          }}>
          <View style={{width: '40%', height: '100%', backgroundColor: 'blue'}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: item.image}}
            />
          </View>
          <View
            style={{
              width: '60%',
              height: '100%',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 25, color: 'black'}}>{item.name}</Text>
              <Text style={{fontSize: 18, color: 'black'}}>
                by {item.auther}
              </Text>
            </View>

            <TouchableHighlight
              style={{
                width: 80,
                height: 40,
                backgroundColor: '#39a2ed',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handleAddToCart(item)}>
              <Text style={{fontSize: 17, color: 'black'}}>Add +</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header count={count} />

      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;
