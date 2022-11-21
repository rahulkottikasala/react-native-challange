import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {log} from 'react-native-reanimated';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  signup = () => {
    if (userName != '' && password != '') {
      auth()
        .createUserWithEmailAndPassword(userName, password)
        .then(res => {
          console.log(res);
          Alert.alert('User created successfully, You can login now');
        })
        .catch(err => {
          console.log(err);
          Alert.alert(err.message);
        });
    } else {
      Alert.alert('Both fields are required');
    }
  };
  login = () => {
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then(res => {
        console.log(res);
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        Alert.alert(err.message);
      });
  };
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 20, marginBottom: 20, fontWeight: 'bold'}}>
        Login/Sign up
      </Text>
      <TextInput
        style={{
          backgroundColor: 'grey',
          width: '80%',
          marginBottom: 10,
          paddingLeft: 10,
        }}
        keyboardType="email-address"
        onChangeText={setUserName}
        value={userName}
        placeholder="Email"
      />
      <TextInput
        style={{
          backgroundColor: 'grey',
          width: '80%',
          marginBottom: 20,
          paddingLeft: 10,
        }}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          onPress={signup}
          style={{
            backgroundColor: 'grey',
            width: 80,
            height: 40,
            marginTop: 10,
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={login}
          style={{
            backgroundColor: 'grey',
            width: 80,
            height: 40,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;
