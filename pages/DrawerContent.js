import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";


export default class DrawerContent extends Component{
    render(){
        return<View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.profileIconSection}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../assets/icon.png')}/>
                    </View>
                    <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}>
                        <Text>Invite</Text>
                    </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.profileTextSection}>
                <View style={styles.nameContainer}>
                        <Text style={styles.nameStyle}>Rahul</Text>
                        <View style={styles.rewardContainer}>
                        <Text style={styles.rewardText}>Gold</Text>
                        </View>
                </View>
                    <View style={styles.coinContainer}>
                    <Text style={styles.coinText}>Total Coin</Text>
                    <Text style={styles.coinText}>coin : 20000</Text>
                    </View>
                </View>
            </View>
            <View style={styles.menuItems}>
            <TouchableHighlight style={styles.menuItem}  onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={styles.textStyle}>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuItem} onPress={()=>this.props.navigation.navigate('Profile')}>
            <Text style={styles.textStyle}>Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuItem} onPress={()=>this.props.navigation.navigate('Wallet')}>
            <Text style={styles.textStyle}>Wallet Balance</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuItem} onPress={()=>this.props.navigation.navigate('Records')}>
            <Text style={styles.textStyle}>Records</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuItem} onPress={()=>this.props.navigation.navigate('Refund')}>
            <Text style={styles.textStyle}>Refund & Policies</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuItem} onPress={()=>this.props.navigation.navigate('Settings')}>
            <Text style={styles.textStyle}>Settings</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuItem} onPress={()=>this.props.navigation.navigate('AboutUs')}>
            <Text style={styles.textStyle}>About Us</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.menuItem} onPress={()=>this.props.navigation.navigate('Help')}>
            <Text style={styles.textStyle}>Help</Text>
            </TouchableHighlight>
            </View>
            <TouchableHighlight style={styles.logoutButton}>
            <Text style={styles.LogoutTextStyle}>Logout</Text>
            </TouchableHighlight>
        </View>
    }
}


const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'white'
        
    },
    profileContainer:{
        flexDirection:'row',
        width:'100%',
        height:200,
        backgroundColor:'#171514',
        marginBottom:20,
    },profileIconSection:{
        width:'50%',
        height:'100%',
        padding:10,
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    imageContainer:{
       
    },
    image:{
        width:80,
        height:80,
    },
    buttonContainer:{

    },
    button:{
        marginBottom:15,
        width:80,
        height:22,
        borderWidth:1,
        borderRadius:5,
        borderColor:'gold',
        backgroundColor:'white',
        alignItems:'center'
    },
    profileTextSection:{
        width:'50%',
        height:'100%',
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingRight:10,
    },
    nameContainer:{
        paddingTop:15,
        alignItems:'center'
    },
    nameStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    rewardContainer:{
        width:80,
        height:20,
        borderRadius:5,
        backgroundColor:'#424e57',
        alignItems:'center'
    },
    rewardText:{
        color:'white'
    },
    coinContainer:{
        paddingBottom:10,
        alignItems:'flex-end'
    },
    coinText:{
        color:'white',
    },
    menuItems:{
        paddingLeft:20,
    },
    menuItem:{
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        paddingLeft:10,
        borderBottomWidth:1,
        borderBottomColor:'grey',
    },
    textStyle:{
        fontSize:18,
        fontWeight:'400',
        color:'black'
    },
    logoutButton:{
        height:'60%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:15
    },
    LogoutTextStyle:{
        fontSize:18,
        fontWeight:'400',
        color:'black'
    }

})
