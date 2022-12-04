import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import {MEDIA_PATH} from '../../constants/MediaPath';

const CartItem = ({data, addToCart, removeItem}) => {
  return (
    <View
      style={{paddingHorizontal: 20, backgroundColor: '#fff', paddingTop: 10}}>
      {data.map((item, index) => (
          <View key={index} style={{height: 70, marginBottom: 5, flexDirection: 'row'}}>
          <View style={{justifyContent: 'center'}}>
            <Image
              style={{width: 60, height: 60}}
              source={{uri: MEDIA_PATH + item.data.imageUrl}}
            />
          </View>
          <View
          style={{
            fontSize: 15,
              fontWeight: 'bold',
              width: 110,
              marginLeft: 5,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                height: 50,
                color: '#000',
              }}>
              {item.data.prName}
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>
              1 Pack
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                width: 75,
                height: 35,
                borderRadius: 5,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              <TouchableHighlight
                style={{
                  width: 29,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => removeItem(item.data)}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>-</Text>
              </TouchableHighlight>
              <Text
                style={{marginHorizontal: 5, fontSize: 14, fontWeight: 'bold'}}>
                {item.count}
              </Text>
              <TouchableHighlight
                style={{
                  width: 29,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => addToCart(item.data)}
                >
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>+</Text>
              </TouchableHighlight>
            </View>
            <View style={{alignItems: 'center', marginLeft: 5}}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
                RS:{' '}
                {item.data.specialPrice === 0 ? item.data.unitPrice : item.data.specialPrice}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textDecorationLine: 'line-through',
                  color: 'red',
                }}>
                RS :
                {item.data.specialPrice === 0 ? item.data.unitPrice + 10 : +item.data.unitPrice}
              </Text>
            </View>
          </View>
        </View>
        
        
        ))}
    </View>
  );
};

export default CartItem;
