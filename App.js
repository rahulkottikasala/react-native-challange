import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay'

const App = () => {

  const handlePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://scontent.fcok15-1.fna.fbcdn.net/v/t39.30808-6/220351656_298720492040787_3685689844459451194_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=30GW12f07sUAX9oMaz7&_nc_ht=scontent.fcok15-1.fna&oh=00_AfDErtUl3yt5wv7ueKfOe7MQ8FhotSuzkf0DpZdcVNu7fg&oe=63833672',
      currency: 'USD',
      key: '', //your api key
      amount: '12000',
      name: 'InmakesEdu',
      prefill: {
        email: 'guest@razorpay.com',
        contact: '9191919191',
        name: 'Rahul'
      },
      theme: {color: '#46DD50'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      console.log("data",data);
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={require('./assets/logo.png')}/>
      <View style={styles.courseContainer}>
      <Text style={styles.courseName}>React Native Master Course :</Text>
      <Text style={styles.coursePrice}>$120</Text>
      </View>
      <TouchableHighlight style={styles.buttonContainer} onPress={() => handlePayment()}>
        <Text style={styles.buttonText}>BUY</Text>
      </TouchableHighlight>
    </View>
  ) 
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  imageContainer:{
    width: 280,
    height: 70
  },
  courseContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:40
  },
  courseName:{
    fontSize:15,
    color:'#000',
    fontWeight:'bold'
  },
  coursePrice:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000'
  },
  buttonContainer:{
    marginTop:30,
    width:100,
    height:40,
    backgroundColor:'#28a745',
    alignItems:'center',
    justifyContent: 'center',
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  }

})