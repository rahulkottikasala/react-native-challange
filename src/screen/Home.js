import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
    <Button
    title='Add Items'
    onPress={() => {
        navigation.navigate('AddItem')
    }}
    />
    <Button
    title='List Items'
    onPress={() => {
        navigation.navigate('List')
    }}
    />
    </View>
  )
}

export default Home;