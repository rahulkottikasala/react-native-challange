import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

import { useNavigation } from '@react-navigation/native';
const Header = (props) => {
  
  const navigation = useNavigation();
  return (
    <View>

    <View
    style={{
        width: '100%',
      height: 60,
      backgroundColor: 'white',
      elevation: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      alignItems: 'center',
      marginBottom: 20,
    }}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
      Books
    </Text>
    <TouchableHighlight onPress={() => navigation.navigate('Cart')} >

    <Icon name="shopping-cart" size={25} color="black" />
    </TouchableHighlight>
  </View>
  <View
    style={{
        width: 20,
        height: 20,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        top: 10,
        right: 10,
    }}>
    <Text style={{fontSize: 10, color: 'white'}}>{props.count}</Text>
  </View>
        </View>
  )
}

export default Header