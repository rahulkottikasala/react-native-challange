import {ScrollView, StatusBar, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Productpage/Header';
import ProductImage from '../components/Productpage/ProductImage';
import ProductDetails from '../components/Productpage/ProductDetails';
import PriceTable from '../components/Productpage/PriceTable';
import {StackActions} from '@react-navigation/native';
import AboutProduct from '../components/Productpage/AboutProduct';
import Suggestion from '../components/Productpage/Suggestion';

const Product = ({navigation, route}) => {
  const [data, setData] = useState(null);
  const popAction = StackActions.pop();

  const backToScreen = () => {
    navigation.dispatch(popAction);
  };
  const urlKey = route.params.urlKey;
  useEffect(()=> {

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
    
  },[])
  const goToProduct = (item) => {
    backToScreen()
    navigation.navigate('Product',{urlKey: item.urlKey})
}
const goToCartPage = () => {
  navigation.navigate('Cart') 

}
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'pink'}}>
      <StatusBar
        animated={true}
        backgroundColor="#192f6a"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <Header backToScreen={backToScreen} goToCartPage={goToCartPage} />
      <ProductImage image={data?.imageUrl} />
      <ProductDetails details={data} />
      <PriceTable details={data} />
      <AboutProduct details={data}/>
      <Suggestion urlKey ={data?.urlKey} goToProduct={goToProduct}/>
    </ScrollView>
  );
};

export default Product;
