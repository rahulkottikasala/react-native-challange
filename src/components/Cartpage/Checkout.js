import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const Checkout = ({data, count}) => {
  const [itemTotal, setItemTotal] = useState(0);
  const [itemDiscount, setItemDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  let total = 0;
  let discount = 0;
  let sub = 0;
  useEffect(() => {
    for (let i = 0; i < data.length; i += 1) {
      total += data[i].data.unitPrice + 10;
      discount = data.length * 10;
      if(data[i].data.specialPrice !== 0){
        discount = (data[i].data.unitPrice - data[i].data.specialPrice) + ((data.length-1) * 10);
      }
      sub= total - discount;
      setItemTotal(total);
      setItemDiscount(discount);
      setSubTotal(sub)
    }
  }, [data]);
  return (
    <View
      style={{
        height: 250,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Bill Details
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 14, fontWeight: '400', color: 'grey'}}>
          Item total
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: 'grey'}}>
          RS : {itemTotal}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 14, fontWeight: '400', color: 'grey'}}>
          Product discount
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: 'grey'}}>
          RS : {itemDiscount}
        </Text>
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#000'}}>
          Sub Total
        </Text>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#000'}}>
          RS : {subTotal}
        </Text>
      </View>
      <Divider />
      <TouchableHighlight
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#192f6a',
          width: '100%',
          height: 50,
          borderRadius: 5,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#fff'}}>
          SELECT DELIVERY OPTIONS
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Checkout;

const Divider = () => (
  <View style={{height: 0.5, width: '100%', backgroundColor: '#000'}}></View>
);
