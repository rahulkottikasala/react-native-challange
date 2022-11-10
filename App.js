import React from 'react'
import { Text, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'lightblue'}}>
      <View style={{width:'100%', height:60, backgroundColor:'white',elevation:20, flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20, alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>Books</Text>
        <Icon name="shopping-cart" size={25} color="black" />
      </View>
      <View style={{width:20, height:20, backgroundColor:'pink', alignItems:'center', justifyContent:'center', borderRadius:20, position:'absolute', top:10, right:10}}><Text style={{fontSize:10, color:'white'}}>1</Text></View>
    </View>
  )
}

export default App