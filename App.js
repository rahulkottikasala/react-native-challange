import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/pages/HomeScreen'

const App = () => {
  return (
    <View style={{backgroundColor:'white', flex:1}}> 
     <HomeScreen/>
    </View>
  )
}

export default App