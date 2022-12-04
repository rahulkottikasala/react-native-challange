import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Homepage/Header';
import Banner from '../components/Homepage/Banner';
import MiddleBanner from '../components/Homepage/MiddleBanner';
import FeaturedProduct from '../components/Homepage/FeaturedProduct';
import { ScrollView } from 'react-native-gesture-handler';
import Product from '../pages/Product';
import { addToCartData, getAllCartItems, updateCartData } from '../../realm';

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState(getAllCartItems());

  useEffect(() => {
    // fetch api (Homepage banners & Categories)
    fetch('https://wpr.intertoons.net/kmshoppyapi/api/v2/Products/HomeProducts')
      .then(res => res.json())
      .then(res => {
        let data = res.Data.MobileMainBanners;
        setData(data);
      })
      .catch(err => console.log(err));
  }, []);

  const goToProduct = item => {
    navigation.navigate('Product', { urlKey: item.urlKey });
  };

  const addToCart = data => {
    let count = 1;

    //find cart item
    let cartItem = cartData.filter(key => key.recordId === data.urlKey);
    let newCount = cartItem[0]?.count + 1;

    cartData.find(key => key.recordId === data.urlKey)
      ? updateCartData(
          data.urlKey,
          data.prName,
          data.imageUrl,
          data.unitPrice,
          data.specialPrice,
          newCount,
        )
      : addToCartData(
          data.urlKey,
          data.prName,
          data.imageUrl,
          data.unitPrice,
          data.specialPrice,
          count,
        );
    Alert.alert('Item added to cart');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header />
      <Banner data={data} />
      <FeaturedProduct addToCart={addToCart} goToProduct={goToProduct} />
      <MiddleBanner data={data[1]} />
    </ScrollView>
  );
};

export default HomePage;
