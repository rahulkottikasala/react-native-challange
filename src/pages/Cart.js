import React, { useEffect } from 'react'
import { FlatList, Image, Text, TouchableHighlight, View } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import { cartItem } from '../actions/cart';


const Cart = () => {
    let dispatch = useDispatch();
    const count = useSelector(state => state.cartCount.count)
    const cartList = useSelector(state => state.cartItem.cart);
    
    handleRemoveToCart =(item) => {
      
       dispatch(cartItem(cartList.filter((x) => x.id !== item.id)))
       
    }

  return (
    
        cartList &&count ?   <FlatList style={{ marginTop:10}} data={cartList} renderItem={renderItem} /> : <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:26, color:'black'}}> Your cart is empty :(</Text>
       </View>
    
  
  )
}

export default Cart





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
              <Text style={{fontSize: 18, color: 'black'}}>by {item.auther}</Text>
            </View>
            <TouchableHighlight
              style={{
                width: 80,
                height: 40,
                backgroundColor: '#f55b40',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => handleRemoveToCart(item)}>
              <Text style={{fontSize: 17, color: 'black'}}>Remove</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  };
  
  