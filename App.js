import React, {useState} from 'react';
import {AsyncStorage, Button, Text, TextInput, View} from 'react-native';

const App = () => {
  const [inpuValue, setInputValue] = useState(""); 
  const [fetchValue, setFetchValue] = useState(""); 


  const handleInputValue = (value) => {
    if(value != null){
      setInputValue(value);
    }
  };

  const add = async () => {
    try{
      await AsyncStorage.setItem('note',inpuValue )
      setInputValue("")
    }catch(e){
      console.error(e);
    }
  };

  const get = async () => {
    try{
    const value = await AsyncStorage.getItem('note')
    if(value!= null){
      setFetchValue(value)
    }
    }catch(e){
      console.error(e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        padding: 50,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20,
          borderColor: '#009ff5',
          borderWidth: 1,
        }}>
        <TextInput
          style={{width: 200, height: 40, marginRight: 15, color:'black'}}
          onChangeText={value => handleInputValue(value)}
          value={inpuValue}
        />
        <Button title="Add" onPress={add} />
      </View>
      <View style={{width: 100, borderColor: '#009ff5', borderWidth: 1}}>
        <Button title="get" onPress={get} />
      </View>
      <Text style={{fontSize:20, marginTop:30 ,marginBottom:20,   textDecorationLine: 'underline', color:'black'}}>Notes</Text>
      <Text style={{ color:'black'}} >{fetchValue}</Text>
    </View>
  );
};

export default App;
