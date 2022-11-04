import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class extends Component{
    render(){
        return<View style={styles.container}>
            <View style={styles.subContainer}>
                <Icon name="search" size={22} color="grey" />
                <TextInput style={styles.inputText} placeholder='Search For a Service'/>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50, 
        padding:8,

    },
    subContainer:{
        height:'100%',
        backgroundColor:'white',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#7a7a7a',
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
    },
    
    inputText:{
        width:300,
        height:50,
        marginLeft:10,
    },
})