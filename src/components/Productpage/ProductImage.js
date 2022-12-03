import {
  ImageBackground,
  TouchableHighlight,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MEDIA_PATH } from '../../constants/MediaPath';

const ProductImage = ({image}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          // uri: 'https://worldbranddesign.com/wp-content/uploads/2019/08/SadafFadaeian-1261HoneyPackaging3.jpg',
          uri:MEDIA_PATH + image
        }}
      />
      <TouchableHighlight
        style={styles.favoriteButton}
        underlayColor="lightgrey"
        onPress={() => {}}>
        <Icon name="favorite" size={26} color="lightgrey" />
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.fullScreenButton}
        underlayColor="lightgray"
        onPress={() => {}}>
        <Icon name="fullscreen" size={30} color="black" />
      </TouchableHighlight>
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 200, width: 250,},
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  fullScreenButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
