import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Category = () => {
    const List =() => (
<View style={styles.CategoryListBorder}>
        <Image style={styles.CategoryListImage} source={require('../../assets/category.jpg')} />
        <Text style={styles.CategoryListText}>Industrial Land</Text>
      </View>
    )
  return (
    <View style={styles.CategoryContainer}>
      <View style={styles.CategoryTitle}>
        <View style={styles.CategoryTitleBorder}>
            <Text style={styles.CategoryTitleText}>Property</Text>
        </View>
        <View style={styles.CategoryTitleBorderDisabled}>
            <Text style={styles.CategoryTitleText}>Service</Text>
        </View>
      </View>
      <View style={styles.CategoryList}>
      <List/>
      <List/>
      <List/>
      <List/>
      </View>
    </View>
  )
}

export default Category;


const styles = StyleSheet.create({
    CategoryContainer: {
        height:150,
        width:'100%',
        backgroundColor:'#fff'
    },
    CategoryTitle:{
        height:50,
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row'
    },
    CategoryTitleBorder:{
        width:100,
        borderRadius:10,
        borderWidth:.4,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center',

    },
    CategoryTitleBorderDisabled:{
        width:100,
        borderRadius:10,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'center',
    },
    CategoryTitleText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#000'
    },
    CategoryList:{
        flexDirection:'row',
        height:100,
        paddingHorizontal:20,
        paddingVertical:10
    },
    CategoryListBorder:{
        width:70,
        height:70,
        borderColor:'grey',
        borderWidth:.4,
        borderRadius:5,
        marginRight:10,
        alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal:5
    },
    CategoryListImage:{
        height:30,
        width:30,
    },
    CategoryListText:{
        fontSize:10,
        color:'grey'
    }
})
