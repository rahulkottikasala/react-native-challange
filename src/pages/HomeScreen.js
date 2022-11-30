import { StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <SearchBar/>
      <Category/>
      <Card/>
      <Card/>
      <Card/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
 
});
