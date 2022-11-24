import React, {Component, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {COLOR} from '../constants/color';
import auth from '@react-native-firebase/auth';

export default function Register({navigation}) {
  const [number, setNumber] = useState(null);

  const handleMobile = async () => {
    if (number.length === 10) {
        
      //   firebase
      await auth()
        .signInWithPhoneNumber('+91' + number)
        .then(res => {
          console.log('response', res);
          navigation.navigate('Verify', {
            mobileNumber: number,
            confirm: res,
          });
        })
        .catch(err => {
          console.log('response', err);
        });
    } else {
      Alert.alert(
        'WARNING',
        'The mobile number is not in the correct international format, it was too long/short, or it was entered incorrectly.',
      );
    }
  };

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
              value={number}
            />
          </View>
          <TouchableHighlight style={styles.button} onPress={handleMobile}>
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
    color: 'grey',
  },
  contentView: {
    width: '100%',
    height: '22%',
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollView: {
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
    fontWeight: 'bold',
    paddingLeft: 10,
    color: COLOR.buttonColor,
    borderRadius: 5,
    borderColor: COLOR.textFieldColor,
    borderWidth: 1,
  },
  mobileNumber: {
    backgroundColor: 'white',
    width: '83%',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 15,
    color: COLOR.buttonColor,
    borderRadius: 5,
    borderColor: COLOR.textFieldColor,
    borderWidth: 1,
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
    fontWeight: 'bold',
    color: 'white',
  },
});
