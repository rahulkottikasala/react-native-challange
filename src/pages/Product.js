import {Alert, ScrollView, StatusBar, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackActions} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, cartCount} from '../actions/cart';

import Header from '../components/Productpage/Header';
import ProductImage from '../components/Productpage/ProductImage';
import ProductDetails from '../components/Productpage/ProductDetails';
import PriceTable from '../components/Productpage/PriceTable';
import AboutProduct from '../components/Productpage/AboutProduct';
import Suggestion from '../components/Productpage/Suggestion';

const Product = ({navigation, route}) => {
  const [data, setData] = useState(null);
  const popAction = StackActions.pop();
  const urlKey = route.params.urlKey;
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartList.cart);
  const cartListCount = useSelector(state => state.cartCount.count);
  let newArray = [];

  // fetch product list
  useEffect(() => {
    //Product Details
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
  useEffect(() => {
    let count  = 0; 
    console.log(cartList);

    for(let i = 0; i < cartList.length; i++){
      count+= cartList[i].count 
    }
    
    dispatch(cartCount(count));
  }, [cartList]);

  const backToScreen = () => {
    navigation.dispatch(popAction);
  };

  const goToProduct = item => {
    backToScreen();
    navigation.navigate('Product', {urlKey: item.urlKey});
  };

  const goToCartPage = () => {
    navigation.navigate('Cart');
  };

  const addToCartItem =  () => {
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
    }
    catch(err){
      console.log(err);
    }
   
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'pink'}}>
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
        count={cartListCount}
      />
      <ProductImage image={data?.imageUrl} />
      <ProductDetails details={data} />
      <PriceTable details={data} addToCart={addToCartItem} />
      <AboutProduct details={data} />
      <Suggestion urlKey={data?.urlKey} goToProduct={goToProduct} />
    </ScrollView>
  );
};

export default Product;
