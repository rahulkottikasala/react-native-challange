import {View, Text, StyleSheet, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Homepage/Header';
import Banner from '../components/Homepage/Banner';
import MiddleBanner from '../components/Homepage/MiddleBanner';
import FeaturedProduct from '../components/Homepage/FeaturedProduct';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../actions/cart';




const HomePage = ({navigation}) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartList.cart);
  let newArray = [];

  useEffect(() => {
    fetch('https://wpr.intertoons.net/kmshoppyapi/api/v2/Products/HomeProducts')
      .then(res => res.json())
      .then(res => {
        let data = res.Data.MobileMainBanners;
        setData(data);
      })
      .catch(err => console.log(err));
  }, []);


  const addToCartItem =  (data) => {
    let newData = {
      data: data,
      count:1
    };
    try{
      cartList.find(key => key.data.urlKey === data.urlKey)
      ? (newArray = [...cartList])
      : (newArray = [...cartList, newData]);
    dispatch(addToCart(newArray));
    cartList.map(key => key.data.urlKey === data.urlKey ? key.count++ : key.count )
    Alert.alert("Cart",`Added to cart${data.prName}`)
    }catch(err){
      console.log(err) ;
    }
   
  };


 const goToProduct = (item) => {
    navigation.navigate('Product',{urlKey: item.urlKey})
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <Banner data={data}/>
      <FeaturedProduct goToProduct={goToProduct} addToCart={addToCartItem}/>
      <MiddleBanner data={data[1]}/>
    </ScrollView>
  );
};

export default HomePage;
