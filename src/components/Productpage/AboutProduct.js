import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AboutProduct = ({details}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.aboutText}>About Product</Text>
        <TouchableHighlight
          style={styles.viewButton}
          underlayColor="lightgrey"
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Icon name={clicked ? "expand-less" : "expand-more"} size={30} color="grey" />
        </TouchableHighlight>
      </View>
      {details && clicked ? (
        <View style={styles.descriptionContainer}>
          <Text style={styles.decsriptionText}>
            {details.shortDescription}.
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default AboutProduct;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20,paddingBottom:10, backgroundColor: '#fff'},
  subContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  aboutText: {fontSize: 16, fontWeight: 'bold', color: '#000'},
  viewButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {paddingVertical: 10, paddingTop: 10, paddingBottom:50},
  decsriptionText: {fontSize: 14, fontWeight: '500', color: '#000'},
});
