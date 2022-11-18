import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native';
import React, {useState} from 'react';
import database from '@react-native-firebase/database';

let addItem = item => {
  database().ref('/list').push({
    name:item,
  });
};

const AddItem = () => {
  const [name, setName] = useState('');

  handleSubmit = () => {
    addItem(name);
    Alert.alert('Item saved successfully')
    setName('');
  };

  return (
    <View style={{backgroundColor:'black', flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:20, marginBottom:20, fontWeight:'bold'}}>ADD ITEMS</Text>
      <TextInput style={{backgroundColor:'grey', width:'80%'}} onChangeText={text => setName(text)} value={name}/>
      <TouchableHighlight onPress={handleSubmit} style={{backgroundColor:'grey', width:80, height:40, marginTop:10, alignItems:'center', justifyContent:'center'}}>
        <Text>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

export default AddItem;
