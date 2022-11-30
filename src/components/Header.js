import { View, Text , StyleSheet,Image, } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <View
          style={styles.headerTitleContainer}>
          <Image style={{width: 40, height: 30}} source={require('../../assets/drawer.png')}/>
          <Text style={styles.headerText}>xentice</Text>
        </View>
        <View
          style={styles.headerPofileContainer}>
          <View style={styles.headerProfileImage}>
            <Image
              style={{width: 40, height: 40}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
              }}
            />
          </View>
        </View>
      </View>
  )
}

export default Header

const styles=StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:20
      },
      headerTitleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        marginLeft:-6
      },
      headerText: {
        fontSize: 28,
        marginBottom:5,
        color:'blue'
      },
      headerPofileContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%',
      },
      headerProfileImage: {
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent:'flex-end',
      },
})