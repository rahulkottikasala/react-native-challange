import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const PriceTable = ({details, addToCart}) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#f9bbe6', '#fff', '#fff']}
      //   style={{backgroundColor: 'lightgrey'}}
    >
      {details ? <View>

      <View style={styles.container}>
        <Text style={styles.headerText}>Please select a varient.</Text>
      </View>
      <View style={styles.pricesContainer}>
        <View style={styles.priceListContainer}>
          <View style={styles.priceList}>
            <Text style={styles.productName}>{details.prName}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.specialPrice}>
                RS :{' '}
                {details.specialPrice === 0
                  ? details.unitPrice
                  : details.specialPrice}
              </Text>
              <Text style={styles.unitPrice}>
                RS :{' '}
                {details.specialPrice === 0
                  ? details.unitPrice + 10
                  : details.unitPrice}
              </Text>
              <View style={styles.offerTextContainer}>
                <Text style={styles.offerText}>
                  {details.specialPrice !== 0
                    ? Math.ceil(
                      (100 / details.unitPrice) *
                      (details.unitPrice - details.specialPrice),
                      )
                    : Math.ceil(
                      (100 / details.unitPrice) *
                      (details.unitPrice + 10 - details.unitPrice),
                      )}{' '}
                  % Off
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.addToCartButtonContainer}>
            <TouchableHighlight style={styles.addToCartButton} onPress={() => addToCart(details)}>
              <Text style={styles.addToCartButtonText}>Add</Text>
            </TouchableHighlight>
          </View>
        </View>
        {/* <View style={{height:90,width:'100%',marginBottom:10, borderRadius:10, borderColor:'#7304bd', borderWidth:2}}></View> */}
      </View>
                      </View> : null}
    </LinearGradient>
  );
};

export default PriceTable;

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 2,
  },
  headerText: {fontSize: 16, fontWeight: '600', color: '#000'},
  pricesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  priceListContainer: {
    height: 90,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#7304bd',
    borderWidth: 2,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  priceList: {width: '70%', paddingHorizontal: 10},
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    height: 45,
  },
  specialPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  unitPrice: {
    fontSize: 11,
    fontWeight: '400',
    color: 'grey',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  offerTextContainer: {
    width: 60,
    height: 27,
    backgroundColor: '#7304bd',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerText: {fontSize: 12, fontWeight: '600'},
  
  addToCartButtonContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    width: 75,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  addToCartButtonText: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
});
