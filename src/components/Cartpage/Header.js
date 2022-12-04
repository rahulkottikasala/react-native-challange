import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Header = ({ backToScreen, count, emptyCart }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftButtonGroup}>
        <TouchableHighlight
          style={styles.backButton}
          underlayColor="#192f6a"
          onPress={() => backToScreen()}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableHighlight>
        <Text style={styles.text}>Cart ({count})</Text>
      </View>
      <TouchableHighlight
        style={styles.emptyButton}
        underlayColor="#192f6a"
        onPress={() => emptyCart()}>
        <Text style={styles.text}>Empty Cart</Text>
      </TouchableHighlight>
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
    backgroundColor: '#192f6a',
  },
  backButton: { width: 50, justifyContent: 'center' },
  leftButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyButton: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
