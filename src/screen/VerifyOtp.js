import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

const VerifyOtp = (props) => {
    const [code, setCode] = useState(null)
  return (
    <View style={{backgroundColor:'black', flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:20, marginBottom:20, fontWeight:'bold'}}>Enter OTP</Text>
      <TextInput style={{backgroundColor:'grey', width:'80%'}} autoFocus  maxLength={6} keyboardType="phone-pad" value={code} onChangeText={setCode} />
      <TouchableHighlight  style={{backgroundColor:'grey', width:150, height:40, marginTop:10, alignItems:'center', justifyContent:'center'}} onPress={() => props.onSubmit(code)}>
        <Text>Confirm OTP</Text>
      </TouchableHighlight>
    </View>
  )
}

export default VerifyOtp