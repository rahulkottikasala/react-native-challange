import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Header = ({backToScreen, goToCartPage, count}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableHighlight style={styles.backButton} underlayColor="#fff" onPress={() => backToScreen()}>
        <Icon name="arrow-back" size={32} color="#000"/>
      </TouchableHighlight>
      <View style={styles.rightButtonGroup}>
        <TouchableHighlight style={{width: 30, marginRight: 15}}>
          <Icon name="search" size={32} color="#000" />
        </TouchableHighlight>
        <TouchableHighlight style={{width: 30}} underlayColor="#fff" onPress={() => goToCartPage()}>
          <Icon name="shopping-cart" size={32} color="#000" />
        </TouchableHighlight>
      </View>
      <View style={styles.cartCount}>
        <Text style={{fontSize: 10, fontWeight: '700', color:'#fff'}}>{count}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backButton: {width: 50, justifyContent: 'center'},
  rightButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCount: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 10,
  },
});
