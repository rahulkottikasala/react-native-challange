import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Homepage/Header';
import Banner from '../components/Homepage/Banner';
import MiddleBanner from '../components/Homepage/MiddleBanner';
import FeaturedProduct from '../components/Homepage/FeaturedProduct';
import { ScrollView } from 'react-native-gesture-handler';
import Product from '../pages/Product';



const HomePage = ({navigation}) => {
  const [data, setData] = useState([]);

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

 const goToProduct = (item) => {
    navigation.navigate('Product',{urlKey: item.urlKey})
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <Banner data={data}/>
      <FeaturedProduct goToProduct={goToProduct}/>
      <MiddleBanner data={data[1]}/>
    </ScrollView>
  );
};

export default HomePage;
