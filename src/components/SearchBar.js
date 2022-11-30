import { View, Text, TextInput } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


const SearchBar = () => {
  return (
    <View style={{width:'100%', height:80,backgroundColor:'#fff', paddingHorizontal:20, justifyContent:'center',}}>
      <View style={{borderWidth:.4,borderRadius:5, height:40, marginTop:20, borderColor:'grey', paddingHorizontal:20,flexDirection:'row',alignItems:'center'}}>
          <Icon name='search' size={30} color='grey' />
          <TextInput style={{color:'grey', marginLeft:20, fontSize:16}} placeholder='Search' placeholderTextColor={'grey'}/>
      </View>
    </View>
  )
}

export default SearchBar