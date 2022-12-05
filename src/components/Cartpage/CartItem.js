import { View, Text, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import { MEDIA_PATH } from '../../constants/MediaPath';

const CartItem = ({ data, increment, decrement }) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingTop: 10,
      }}>
      {data.map((item, index) => (
        <View
          key={index.toString()}
          style={{ height: 80, marginBottom: 5, flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center' }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: MEDIA_PATH + item.imageUrl }}
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
                fontSize: 14,
                fontWeight: 'bold',
                height: 50,
                color: '#000',
                marginBottom: 5,
              }}>
              {item.prName}
            </Text>
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#000' }}>
              1 Pack
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                onPress={() => decrement(item)}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>-</Text>
              </TouchableHighlight>
              <Text
                style={{
                  marginHorizontal: 5,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {item.count}
              </Text>
              <TouchableHighlight
                style={{
                  width: 29,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => increment(item)}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>+</Text>
              </TouchableHighlight>
            </View>
            <View style={{ alignItems: 'center', marginLeft: 5 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                RS :{' '}
                {item.specialPrice === 0 ? item.unitPrice : item.specialPrice}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textDecorationLine: 'line-through',
                  color: 'red',
                }}>
                RS :
                {item.specialPrice !== 0 ? item.unitPrice : item.unitPrice + 10}
              </Text>
            </View>
          </View>
        </View>
      ))}
      {data[0] == null ? (
        <View
          style={{
            width: '100%',
            height: 85,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Your cart is empty !{' '}
          </Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default CartItem;
