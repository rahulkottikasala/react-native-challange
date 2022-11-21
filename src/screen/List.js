import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

let itemRef = database().ref('/list');

const List = () => {
  const [itemArray, setItemArray] = useState([]);
  const [keys, setKeys] = useState([]);
  const [ifUpdate, setIfUpdate] = useState(false);
  const [updateText,setUpdateText] = useState('');
  const [updateIndex,setUpdateIndex] = useState('');
  useEffect(() => {
    itemRef.on('value', snapShot => {
      let data = snapShot.val();
       let items = Object.values(data);
        setKeys(Object.keys(data))
        console.log(items);
          setItemArray(items);
    });
  }, []);

  handleDelete = (index) => {
    let childKey = keys[index];
    itemRef.child(childKey).remove()
  }
  handleUpdate = (name, index) => {
    setUpdateText(name);
    setUpdateIndex(index)
    setIfUpdate(true)
  }
  submitUpdate = async() => {
    let childKey = keys[updateIndex];
   await itemRef.child(childKey).update({
      name:updateText
    })
    setIfUpdate(false)

  }
  return (
    <View style={{flex: 1, padding:20, backgroundColor: '#000'}}>
      {(itemArray.length > 0) ? 
      ifUpdate ?
      (<View style={{backgroundColor:'black', flex:1, alignItems:'center'}}>
      <Text style={{fontSize:18, marginBottom:20, fontWeight:'bold'}}>Update Text</Text>
      <TextInput style={{backgroundColor:'grey', width:'80%'}} onChangeText={setUpdateText} value={updateText}/>
      <View style={{flexDirection:'row'}}>

      <TouchableHighlight style={{backgroundColor:'grey', width:80, height:40, marginTop:10,marginRight:10, alignItems:'center', justifyContent:'center'}} onPress={() => setIfUpdate(false)} >
        <Text>cancel</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{backgroundColor:'grey', width:80, height:40, marginTop:10, alignItems:'center', justifyContent:'center'}} onPress={() => submitUpdate()}>
        <Text>Submit</Text>
      </TouchableHighlight>
      </View>
    </View>)
      :
          (<View>
            <Text style={{color:'#fff', fontSize:18, marginBottom:20}}>Items</Text>
          {itemArray.map((item, index) => {
            return <View style={{flexDirection:'row', alignItems:'center'}} key={index}>
              <Text  style={{margin:5, color:'white', fontSize:20}}>{item.name}</Text>
              <TouchableHighlight onPress={() => handleUpdate(item.name, index)}><Text style={{margin:5, color:'#0398fc'}}>Update</Text></TouchableHighlight>
              <TouchableHighlight onPress={() => handleDelete(index)}><Text style={{margin:5, color:'red'}}>Delete</Text></TouchableHighlight>
              </View>
          })}
        </View>)
      : (
        <Text style={{color: '#fff', fontSize: 18}}>NO Items</Text>
      )}
    </View>
  );
};

export default List;
