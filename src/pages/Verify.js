import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from '../constants/color';

export default function Otp(props) {
  const mobileNumber = props.route.params.mobileNumber !== null
        ? props.route.params.mobileNumber
        : '0000000000';

        const handleOtp = () => {
            console.log('clicked');
        }

  return (
    <View style={StyleSheet.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Verification code</Text>
        <Text style={styles.subTitle}>
          Please type the verification code send to
        </Text>
        <Text style={styles.verifiedNumber}>+91 {mobileNumber} </Text>
      </View>
      <View style={styles.contentView}>
        <View style={styles.inputContainer}>
          <OTPInputView
            pinCount={6}
            codeInputFieldStyle={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderWidth:1,
              borderColor: COLOR.textFieldColor,
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 'bold',
              marginLeft:4,
              color: COLOR.buttonColor,
            }}
            keyboardType={'phone-pad'}
            //   onCodeFilled={() => this.props.navigation.navigate('StudentDetails')}

            //   onCodeFilled = {(code => {
            //     console.log(`Code is ${code}, you are good to go!`)
            // })}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={() => handleOtp()}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableHighlight>
        <View style={styles.contactUsContainer}>
          <Icon name="call" size={17} color={COLOR.buttonColor} />
          <TouchableHighlight style={styles.contactUs}>
            <Text style={styles.contactUsText}>Contact Us</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleView: {
    width: '100%',
    height: '67%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:80
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color:'#000',
    marginTop:15
  },
  verifiedNumber: {
    marginTop: 5,
    marginBottom: 15,
    fontWeight: '500',
    color: 'black',
  },
  contentView: {
    width: '100%',
    height: '33%',
    backgroundColor: '#FFF',
    padding: 20,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    marginLeft: -16,
    height: 52,
    width: '88%',
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
  disabledButton: {
    width: '93%',
    marginTop: 15,
    height: 52,
    backgroundColor: COLOR.textFieldColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'bold',
    color: 'white',
  },

  contactUsContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactUs: {},
  contactUsText: {
    color: COLOR.buttonColor,
    fontWeight: '500',
    marginLeft: 5,
    fontSize: 16,
  },
});
