import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { MEDIA_PATH } from '../../constants/MediaPath';

const FeaturedProduct = ({ goToProduct, addToCart, suggestion, name }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://wpr.intertoons.net/kmshoppyapi/api/v2/FeaturedProduct?custId=''&guestId='",
      {
        mode: 'cors',
        headers: {
          vendorUrlKey: 'kmshoppy',
        },
      },
    )
      .then(res => res.json())
      .then(res => {
        setData(res.Data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {name ? name : 'Featured Products'}
        </Text>
        {!name ? (
          <View style={styles.expandContainer}>
            <Text style={styles.expandText}>See More</Text>
            <Icon name="chevron-right" size={20} color="red" />
          </View>
        ) : null}
      </View>
      <ScrollView
        style={styles.productsContainerOutline}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <LinearGradient
          style={styles.productsContainer}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#fff', '#fff', '#f9bbe6']}>
          {data.map((item, index) => (
            <TouchableHighlight
              key={index.toString()}
              style={
                suggestion
                  ? styles.productContainerSmall
                  : styles.productContainer
              }
              onPress={() => goToProduct(item)}
              underlayColor="white">
              <View>
                <View style={styles.imageContainer}>
                  <Image
                    style={{ width: '60%', height: '100%' }}
                    source={{
                      // uri: 'https://rukminim1.flixcart.com/image/832/832/xif0q/chocolate/a/d/5/-original-imagjyghu2tqxvcq.jpeg?q=70',
                      uri: MEDIA_PATH + item.imageUrl,
                    }}
                  />
                </View>
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{item.prName}</Text>
                  <Text style={styles.originalPrice}>
                    Rs :
                    {item.specialPrice === 0
                      ? item.unitPrice + 10
                      : +item.unitPrice}
                  </Text>
                  <Text style={styles.offerPrice}>
                    Rs :{' '}
                    {item.specialPrice === 0
                      ? item.unitPrice
                      : item.specialPrice}
                  </Text>
                  {!suggestion ? (
                    <View style={styles.toCartContainer}>
                      <Text style={styles.itemQuantity}>1 Pack</Text>
                      <TouchableHighlight
                        style={styles.addToCartButton}
                        underlayColor="#fff"
                        onPress={() => {
                          addToCart(item);
                          Alert.alert('Added to cart');
                        }}>
                        <Icon name="add" size={25} color="red" />
                      </TouchableHighlight>
                    </View>
                  ) : null}
                </View>

                <ImageBackground
                  source={require('../../../assets/images/offer.png')}
                  style={styles.offer}>
                  <Text style={styles.offerText}>
                    {item.specialPrice !== 0
                      ? Math.ceil(
                          (100 / item.unitPrice) *
                            (item.unitPrice - item.specialPrice),
                        )
                      : Math.ceil(
                          (100 / item.unitPrice) *
                            (item.unitPrice + 10 - item.unitPrice),
                        )}
                    %
                  </Text>
                  <Text style={styles.offerText}>Off</Text>
                </ImageBackground>
                {/* ) : null} */}
              </View>
            </TouchableHighlight>
          ))}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default FeaturedProduct;

const styles = StyleSheet.create({
  container: { width: width, height: 280, backgroundColor: '#fff' },
  headerContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  headerText: { fontSize: 19, fontWeight: 'bold', color: '#000' },
  expandContainer: { flexDirection: 'row' },
  expandText: { color: 'red', fontWeight: 'bold', fontSize: 14 },
  productsContainerOutline: { backgroundColor: 'pink' },
  productsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    width: 150,
    height: 220,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    // marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'visible',
    elevation: 10,
  },
  productContainerSmall: {
    width: 150,
    height: 180,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    // marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'visible',
    elevation: 10,
  },
  imageContainer: {
    height: '45%',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productDetails: { paddingHorizontal: 8, paddingVertical: 5 },
  productName: { color: '#000', fontSize: 16, fontWeight: 'bold', height: 40 },
  originalPrice: {
    color: 'grey',
    fontSize: 10,
    marginTop: 2,
    textDecorationLine: 'line-through',
  },
  offerPrice: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  toCartContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  itemQuantity: { fontSize: 14, fontWeight: '600', color: '#000' },
  addToCartButton: {
    width: 25,
    height: 25,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  offer: {
    height: 60,
    width: 60,
    position: 'absolute',
    right: -4,
    top: -4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerText: { fontSize: 10, fontWeight: 'bold', color: 'white' },
});
