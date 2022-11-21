import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

const MobileNumber = (props) => {
    const [mobileNumber, setMobileNumber] = useState(null)
  return (
    <View style={{backgroundColor:'black', flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:20, marginBottom:20, fontWeight:'bold'}}>Enter Mobile number</Text>
      <TextInput style={{backgroundColor:'grey', width:'80%'}} autoFocus  maxLength={10} keyboardType="phone-pad" value={mobileNumber} onChangeText={setMobileNumber} />
      <TouchableHighlight  style={{backgroundColor:'grey', width:150, height:40, marginTop:10, alignItems:'center', justifyContent:'center'}} onPress={() => props.onSubmit(mobileNumber)}>
        <Text>Sign in With OTP</Text>
      </TouchableHighlight>
    </View>
  )
}

export default MobileNumber