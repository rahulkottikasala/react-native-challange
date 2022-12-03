import {View, Text, StyleSheet, StatusBar,TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#192f6a', '#3b5998', '#4c669f']}
      style={styles.headerContainer}>
      <StatusBar
        animated={true}
        backgroundColor="#192f6a"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />

      {/* ---------------------Location Container start--------------------- */}
      <View style={styles.locatonContainer}>
        <View style={styles.locationSubContainer}>
          <Icon name="pin-drop" size={20} color="#fff" />
          <View style={styles.locationDropdown}>
            <Text style={styles.locationDropdownText}>Choose Location</Text>
            <Icon name="expand-more" size={30} color="#4c669f" />
          </View>
        </View>
        <View style={styles.favoriteButton}>
          <Icon name="favorite" size={20} color="#fff" />
        </View>
      </View>
      {/* ----------END---------- */}

      {/* ---------------------search bar Container start--------------------- */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarBorder}>
          <Icon name="search" size={28} color="#4c669f" />
          <TextInput
            style={styles.searchBarInput}
            placeholderTextColor="#4c669f"
            placeholder="Search for over 5000 products"
          />
        </View>
      </View>
      {/* ----------END---------- */}
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchBarInput: {fontSize: 17, fontWeight: '500', width: '80%',color:'#4c669f',marginLeft:10},
  searchBarBorder: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchBarContainer: {
    height: 75,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  favoriteButton: {
    alignItems: 'flex-end',
    width: '40%',
    justifyContent: 'center',
    paddingRight: 20,
  },
  locationDropdownText: {fontSize: 16, color: '#fff', marginRight: 10},
  locationDropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  locationSubContainer: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  locatonContainer: {height: 75, flexDirection: 'row'},
  headerContainer: {width: '100%', height: 150},
});
