import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";


export default class Videos extends Component{
    render(){
        return<View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Videos</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
    }
})