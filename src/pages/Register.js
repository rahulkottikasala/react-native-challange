import React, {Component, useState} from 'react';
import {
  Image,
  ScrollView,  
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { COLOR } from '../constants/color';

export default function Register ({navigation}){
const [number, setNumber] = useState(null)

  handleMobile = (value)=> {
  console.log(value.length);
    this.setState({
      mobileNumber: value,
    });
    
  }
    return (
      <View style={StyleSheet.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.subTitle}>We will send you a OTP to verify.</Text>
        </View>
        <ScrollView style={styles.contentView}>
          <View style={styles.scrollView}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.countryCode} value={'+91'} />
              <TextInput
                style={styles.mobileNumber}
                maxLength={10}
                keyboardType={'numeric'}
                placeholder={'Mobile number'}
                placeholderTextColor={'lighblue'}
                onChangeText={setNumber}
              />
            </View>
            <TouchableHighlight
              style={styles.button}
              onPress={() =>
                navigation.navigate('Verify', {
                  mobileNumber: number
                })
                
              }
              >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    width: '100%',
    height: '78%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  titleView: {
    width: '100%',
    height: '15%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color:'grey'
  },
  contentView: {
    width: '100%',
    height: '22%',
    backgroundColor: '#fff',
    padding: 20,
   
  },
  scrollView:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 52,
  },
  countryCode: {
    backgroundColor: 'white',
    width: '15%',
    marginRight: 5,
    fontSize: 16,
    fontWeight:'bold',
    paddingLeft: 10,
    color: COLOR.buttonColor,
    borderRadius: 5,
    borderColor:COLOR.textFieldColor,
    borderWidth:1
  },
  mobileNumber: {
    backgroundColor: 'white',
    width: '83%',
    fontSize: 16,
    fontWeight:'bold',
    paddingLeft: 15,
    color: COLOR.buttonColor,
    borderRadius: 5,
    borderColor:COLOR.textFieldColor,
    borderWidth:1
  },
  button: {
    width: '93%',
    marginTop: 15,
    height: 52,
    backgroundColor: COLOR.buttonColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'bold',
    color: 'white',
  },
});