import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'

const CartItem = () => {
  return (
    <View style={{paddingHorizontal:20, backgroundColor:'#fff', paddingTop:10}}>
      <View style={{height:70, marginBottom:5, flexDirection:'row'}}>
        <View style={{justifyContent:'center'}}>

        <Image style={{width:60, height:60,}} source={{uri:'https://png.pngtree.com/png-clipart/20210912/ourlarge/pngtree-special-offer-red-tag-png-image_3925841.jpg'}} />
        </View>
        <View style={{fontSize:15, fontWeight:'bold', width:110, marginLeft:5}}>
        <Text style={{fontSize:15, fontWeight:'bold', height:50, color:'#000'}}>Product Name Expdsfkjd</Text>
        <Text style={{fontSize:12, fontWeight:'bold', color:'#000'}}>1 Pack</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{flexDirection:'row', width:75, height:35, borderRadius:5, backgroundColor:'red', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
                <TouchableHighlight style={{width:29, height:35, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:20, fontWeight:'bold'}}>-</Text></TouchableHighlight>
                <Text style={{marginHorizontal:5, fontSize:14, fontWeight:'bold'}}>1</Text>
                <TouchableHighlight style={{width:29, height:35, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:16, fontWeight:'bold'}}>+</Text></TouchableHighlight>
            </View>
            <View style={{alignItems:'center', marginLeft:5}}>
                <Text style={{ fontSize:14, fontWeight:'bold', color:'#000'}}>RS:2000</Text>
                <Text style={{ fontSize:11, fontWeight:'bold', textDecorationLine:'line-through', color:'red'}}>RS : 200</Text>
                </View>
        </View>
      </View>

    </View>
  )
}

export default CartItem