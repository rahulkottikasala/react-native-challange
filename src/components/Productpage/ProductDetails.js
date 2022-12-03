import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';

const ProductDetails = ({details}) => {
  
  
  return (
    <View style={styles.detailsContainer}>
      {details ?  <View>
        <Text style={styles.productName}>{details.prName}</Text>
      <Text style={styles.quantity}>1 Pack</Text>
      <Text style={styles.price}>
        RS :{' '}
        {details.specialPrice !== 0 ? details.specialPrice : details.unitPrice}
      </Text>
      </View> : null}
      
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: '#fff',
    elevation: 10,
    paddingLeft: 20,
    paddingRight: 30,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    height: 45,
  },
  quantity: {
    fontSize: 12,
    fontWeight: '400',
    color: 'grey',
    marginBottom: 10,
  },
  price: {fontSize: 18, fontWeight: '500', color: '#000'},
});
