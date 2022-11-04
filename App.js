import axios from "axios";
import React, { Component } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";


export default class App extends Component{

  constructor(){
    super()
    this.state = {
      DATA:[],
      loader:false,
    }
  }

  fetchData(){
    this.setState({loader:true})
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((response) => {
    this.setState({loader:false})
      if(response.length > 0){
        this.setState({
          DATA:response
        })
      }
    })
    .catch((err) =>{
    this.setState({loader:false})
     console.log(err)
    }
    )
  }

  myData(){
    this.setState({loader:true})
    axios.get('https://fakestoreapi.com/products')
    .then((response) =>{
    this.setState({loader:false})
      if(response.data.length > 0){
        this.setState({
          DATA:response.data
        })
      }
      // console.log('data is',response.data);
    })
    .catch((err) => {
    this.setState({loader:false})
      console.log(err);
    })
  }

  componentDidMount(){
    this.myData()
    // this.fetchData()
  }
  render(){
    const renderItem = ({item}) => (
      <View style={styles.itemContainer}>
        <Image style={styles.imageStyle} source={{uri:item.image}}/>
        <Text style={styles.titileStyle}>{item.title}</Text>
        <Text style={styles.decsStyle}>{item.description}</Text>
        <Text style={styles.priceStyle}>$ {item.price}</Text>
      </View>
    )
    return<View style={styles.container}>

      <Text style={styles.headingText}>Products</Text>
      <ActivityIndicator size={50} animating={this.state.loader} />
      <FlatList style={{width:'90%', marginTop:10,}} data={this.state.DATA} renderItem={renderItem} />
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightblue',
    alignItems:"center",
    justifyContent:'center',
  },
  headingText:{
    fontSize:30,
    marginTop:10,
    fontWeight:'bold',
    color: 'black'
  },
  itemContainer:{
    backgroundColor:'white',
    padding:20,
    marginTop:10,
    borderRadius:10,
  },
  imageStyle:{
    height:200,
  },
  titileStyle:{
    fontSize:18,
    color:'black'
  },
  decsStyle:{
    marginTop:10,
    fontSize:12,
  },
  priceStyle:{
    marginTop:10,
    fontSize:20,
    color:'green'
  },
})