import React, { Component } from "react";
import { Text, View } from "react-native";


export default class Home extends Component{
    render(){
        return <View style={{backgroundColor:'white', height:'100%'}}>
            <Text >This is Home Component</Text>
        </View>
    }
}