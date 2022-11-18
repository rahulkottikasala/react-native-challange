import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { requestUserPermission, NotificationListener } from './src/helper/pushnotification_helper'
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {

  useEffect(() => {
    requestUserPermission()
    NotificationListener()
  },[])




   useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})