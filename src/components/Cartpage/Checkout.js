import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const Checkout = ({ data }) => {
  const [itemTotal, setItemTotal] = useState(0);
  const [itemDiscount, setItemDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  let total = 0;
  let discount = 0;
  let sub = 0;

  useEffect(() => {
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      let count = data[i].count;
      total += (data[i].unitPrice + 10) * count;

      if (data[i].specialPrice !== 0) {
        discount +=
          data[i].unitPrice -
          data[i].specialPrice +
          (data[i].length - 1) * 10 * count;
      } else {
        discount += data.length * 10 * count;
      }
      sub = total - discount;
      setItemTotal(total);
      setItemDiscount(discount);
      setSubTotal(sub);
    }
  }, [data]);

  return (
    <View style={styles.billContainer}>
      <Text style={styles.headerText}>Bill Details</Text>
      <View style={styles.billListContainer}>
        <Text style={styles.billingText}>Item total</Text>
        <Text style={styles.billingText}>RS : {itemTotal} </Text>
      </View>
      <View style={styles.billListContainer}>
        <Text style={styles.billingText}>Product discount</Text>
        <Text style={styles.billingText}>RS : {itemDiscount} </Text>
      </View>
      <Divider />
      <View style={styles.billListContainer}>
        <Text style={styles.billingTextBold}>Sub Total</Text>
        <Text style={styles.billingTextBold}>RS : {subTotal} </Text>
      </View>
      <Divider />
      <TouchableHighlight style={styles.continueButton}>
        <Text style={styles.continueButtonText}>SELECT DELIVERY OPTIONS</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Checkout;

const Divider = () => (
  <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }}></View>
);

const styles = StyleSheet.create({
  billContainer: {
    height: 250,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  billListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  billingText: { fontSize: 14, fontWeight: '400', color: 'grey' },
  billingTextBold: { fontSize: 14, fontWeight: '600', color: '#000' },
  continueButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#192f6a',
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  continueButtonText: { fontSize: 14, fontWeight: '600', color: '#fff' },
});
