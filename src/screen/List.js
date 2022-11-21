import {View, Text, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

let itemRef = database().ref('/list');

const List = () => {
  const [itemArray, setItemArray] = useState([]);
  useEffect(() => {
    itemRef.on('value', snapShot => {
      let data = snapShot.val();
      let items = Object.values(data);
      console.log(items);
      setItemArray(items);
    });
  }, []);

  return (
    <View style={{flex: 1, padding:20, backgroundColor: '#000'}}>
      {itemArray.length > 0 ? (
          <View>
            <Text style={{color:'#fff', fontSize:18, marginBottom:20}}>Items</Text>
          {itemArray.map((item, index) => {
            return <View style={{flexDirection:'row', alignItems:'center'}} key={index}>
              <Text  style={{margin:5, color:'white', fontSize:20}}>{item.name}</Text>
              <TouchableHighlight><Text style={{margin:5, color:'#0398fc'}}>Update</Text></TouchableHighlight>
              <TouchableHighlight><Text style={{margin:5, color:'red'}}>Delete</Text></TouchableHighlight>
              </View>
          })}
        </View>
      ) : (
        <Text style={{color: '#fff', fontSize: 18}}>NO Items</Text>
      )}
    </View>
  );
};

export default List;
