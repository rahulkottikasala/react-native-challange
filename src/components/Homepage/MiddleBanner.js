import {
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
    FlatList,
  } from 'react-native';
import React from 'react'
import { MEDIA_PATH } from '../../constants/MediaPath';

const {width} = Dimensions.get('window');


const MiddleBanner = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sliderImageContainer}>
    <Image
      source={{
        uri: 'https://c8.alamy.com/comp/H1T1N0/grocery-shopping-banner-with-consumer-holding-a-bag-filled-with-vegetables-H1T1N0.jpg',
      }}
      style={styles.sliderImage}
    />
  </TouchableOpacity>
    </View>
  )
}

export default MiddleBanner


const styles = StyleSheet.create({
    container: {
      width,
      alignItems: 'center',
      paddingTop: 20,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    sliderImageContainer: {
      width: width - 40,
      height: 140,
      backgroundColor: 'red',
      marginBottom: 5,
      backgroundColor: '#fff',
    },
    sliderImage: {
      width: width - 40,
      height: 140,
      resizeMode: 'cover',
      marginHorizontal: 5,
      borderRadius: 15,
    },
  });
  