import { Alert, ScrollView, StatusBar, TouchableHighlight } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Productpage/Header';
import ProductImage from '../components/Productpage/ProductImage';
import ProductDetails from '../components/Productpage/ProductDetails';
import PriceTable from '../components/Productpage/PriceTable';
import { StackActions, useFocusEffect } from '@react-navigation/native';
import AboutProduct from '../components/Productpage/AboutProduct';
import Suggestion from '../components/Productpage/Suggestion';
import { addToCartData, getAllCartItems, updateCartData } from '../../realm';

const Product = ({ navigation, route }) => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [cartData, setCartData] = useState(getAllCartItems());
  const popAction = StackActions.pop();
  const [load, setLoad] = useState(false);

  const backToScreen = () => {
    navigation.dispatch(popAction);
  };
  const urlKey = route.params.urlKey;
  useEffect(() => {
    fetch(
      `https://wpr.intertoons.net/kmshoppyapi/api/v2/ProductDetails?&custId=''&guestId=4653631114&pincode='kmshoppy'&${new URLSearchParams(
        {
          urlKey: urlKey,
        },
      )}`,
      {
        mode: 'cors',
        headers: {
          vendorUrlKey: 'kmshoppy',
        },
      },
    )
      .then(res => res.json())
      .then(res => {
        setData(res.Data.ProdDetails);
      })
      .catch(err => console.log(err));
  }, []);

  //find count of Product

  useFocusEffect(() => {
    let count = 0;
    for (let i = 0; i < cartData.length; i++) {
      count += cartData[i].count;
    }
    setCount(count);
  });

  const goToProduct = item => {
    backToScreen();
    navigation.navigate('Product', { urlKey: item.urlKey });
  };

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  const addToCart = data => {
    let count = 1;

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
    setLoad(!load);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'pink' }}>
      <StatusBar
        animated={true}
        backgroundColor="#192f6a"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <Header
        backToScreen={backToScreen}
        goToCartPage={goToCartPage}
        count={count}
      />
      <ProductImage image={data?.imageUrl} />
      <ProductDetails details={data} />
      <PriceTable details={data} addToCart={addToCart} />
      <AboutProduct details={data} />
      <Suggestion urlKey={data?.urlKey} goToProduct={goToProduct} />
    </ScrollView>
  );
};

export default Product;
