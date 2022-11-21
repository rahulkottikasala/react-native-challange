import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import VerifyOtp from './VerifyOtp';
import MobileNumber from './MobileNumber';
import auth from '@react-native-firebase/auth';
import {log, set} from 'react-native-reanimated';

const MobileLogin = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const mobileNumber = async phoneNumber => {
    auth()
      .signInWithPhoneNumber('+91' + phoneNumber)
      .then(res => {
        console.log('response', res);
        setConfirm(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const confirmVerification = async code => {
    try {
      await confirm.confirm(code);
      auth().onAuthStateChanged(user => {
        if (user) {
          setConfirm(null);
          navigation.navigate('Home');
        } else {
          if (confirm) {
            Alert.alert('Authentication failed');
          }
        }
      });
    } catch (err) {
      console.log(err);
      Alert.alert('Invalid code');
    }
  };

  

  if (confirm) {
    return <VerifyOtp onSubmit={confirmVerification} />;
  }
  return <MobileNumber onSubmit={mobileNumber} />;
};

export default MobileLogin;
