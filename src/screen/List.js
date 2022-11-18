import {View, Text} from 'react-native';
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
            return <Text key={index} style={{margin:5, color:'white'}}>{item.name}</Text>
          })}
        </View>
      ) : (
        <Text style={{color: '#fff', fontSize: 18}}>NO Items</Text>
      )}
    </View>
  );
};

export default List;
