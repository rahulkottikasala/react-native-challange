import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

const Checkout = () => {
  return (
    <View style={{height:250, backgroundColor:'#fff', paddingHorizontal:20, paddingVertical:10, marginTop:10}}>
        <Text style={{color:'#000', fontSize:16, fontWeight:'bold',marginBottom:20}}>Bill Details</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10, marginBottom: 10}}>
        <Text style={{fontSize:14, fontWeight:'400', color:'grey'}}>Item total</Text>
        <Text style={{fontSize:14, fontWeight:'400', color:'grey'}}>RS : 1900 </Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10, marginBottom: 10}}>
        <Text style={{fontSize:14, fontWeight:'400', color:'grey'}}>Product discount</Text>
        <Text style={{fontSize:14, fontWeight:'400', color:'grey'}}>RS : 19 </Text>
        </View>
        <Divider/>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10, marginVertical: 10}}>
        <Text style={{fontSize:14, fontWeight:'600', color:'#000'}}>Product discount</Text>
        <Text style={{fontSize:14, fontWeight:'600', color:'#000'}}>RS : 19 </Text>
        </View>
        <Divider/>
        <TouchableHighlight style={{alignItems:'center', justifyContent:'center', backgroundColor:'#192f6a', width:'100%', height:50, borderRadius:5, marginTop:20}}>
            <Text style={{fontSize:14, fontWeight:'600', color:'#fff'}}>SELECT DELIVERY OPTIONS</Text>
        </TouchableHighlight>

        
    </View>
  )
}

export default Checkout

const Divider = () => (
    <View style={{height:.5,width:'100%', backgroundColor:'#000'}}></View>
)