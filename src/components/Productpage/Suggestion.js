import { View, Text } from 'react-native'
import React from 'react'
import FeaturedProduct from '../Homepage/FeaturedProduct';

const Suggestion = ({navigation, urlKey, goToProduct}) => {

  return (
   <FeaturedProduct name={"You Might Also Like"} goToProduct={goToProduct} suggestion={true} />
  )
}

export default Suggestion