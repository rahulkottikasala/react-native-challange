import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  PermissionsAndroid,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import COLOR from '../constants/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');
const GOOGLE_PLACES_API_KEY = 'AIzaSyDRKyUzBNnGeLdKXfL0xZmkHmQueJs5z5A';

const LocationInfo = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentAddress, setCurrentAddress] = useState('Loading........');

  Geocoder.init(GOOGLE_PLACES_API_KEY, { language: 'en' });

  const getPermission = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  };

  const findCurrentLocation = () => {
    if (getPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    }
  };

  useEffect(() => {
    getPermission().then(() => {
      Geolocation.getCurrentPosition(
        position => {
          //   console.log(position);
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    });
  }, []);

  useEffect(() => {
    Geocoder.from(currentLocation.latitude, currentLocation.longitude)
      .then(json => {
        // console.log(json.results[0].formatted_address);
        setCurrentAddress(json.results[0].formatted_address);
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentLocation]);

  return (
    <View style={styles.container}>
      {/* ------Header------- */}
      <View style={styles.headerContainerWrap}>
        <View style={styles.headerContainer}>
          <View style={styles.iconContainer}>
            <Icon name="arrow-back" size={25} color={COLOR.dark} />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Location</Text>
            <Text style={styles.headerText}>Information</Text>
          </View>
        </View>
      </View>
      {/* ------end------- */}

      {/* -----MapView------ */}
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0115,
          longitudeDelta: 0.005,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
        />
      </MapView>
      {/* ------end------- */}

      {/* -------Confirm Button--------- */}
      <View style={styles.addressContainerWrap}>
        <View style={styles.addressConatiner}>
          <Text style={styles.addressText}>{currentAddress}</Text>
          <TouchableHighlight style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Confirm & Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
      {/* ------end------- */}

      {/* Floating Button */}

      <View style={styles.floatingButtonContainer}>
        <TouchableHighlight
          style={styles.floatingButton}
          underlayColor="lightgrey"
          onPress={() => {
            findCurrentLocation();
          }}>
          <Icon name="my-location" color={'#2a1c7a'} size={30} />
        </TouchableHighlight>
      </View>
      {/* ------end------- */}
      <SafeAreaView
        style={{ height: 100, width: '100%', position: 'absolute', top: 70 }}>
        <GooglePlacesAutocomplete
          fetchDetails={true}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en', // language of the results
          }}
          placeholder="Search"
          onPress={(data, details = null) => {
            setCurrentLocation({
              latitude: details?.geometry?.location.lat,
              longitude: details?.geometry?.location.lng,
            });
          }}
          textInputProps={{
            placeholderTextColor: 'grey',
            returnKeyType: 'search',
            backgroundColor: '#fcf7fc',
            color: 'black',
            fontSize: 16,
          }}
          styles={{
            description: {
              fontWeight: '400',
              color: 'grey',
            },
            textInputContainer: {
              paddingHorizontal: 20,
            },
            listView: {
              color: 'black', //To see where exactly the list is
              zIndex: 1000, //To popover the component outwards
              position: 'absolute',
              top: 55,
            },
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default LocationInfo;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerContainerWrap: { height: 125 },
  headerContainer: { height: 70, width: '100%', flexDirection: 'row' },
  iconContainer: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    height: '100%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: { fontSize: 16, fontWeight: '700', color: COLOR.dark },
  searchBarContainerWrap: {
    height: 50,
    width: width,
    paddingHorizontal: 15,
  },
  searchBarContainer: {
    backgroundColor: '#fcf7fc',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  searchBarInputField: { fontSize: 15, fontWeight: '500', color: '#000' },
  mapView: { height: height, width: width },
  addressContainerWrap: {
    width: width,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },
  addressConatiner: {
    backgroundColor: '#fff',
    height: '90%',
    width: '90%',
    borderRadius: 10,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  addressText: {
    marginHorizontal: 20,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#db407e',
    height: 50,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: { fontSize: 15, fontWeight: '500', color: '#fff' },
  floatingButtonContainer: {
    width: width,
    height: 50,
    position: 'absolute',
    bottom: 230,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  floatingButton: {
    height: '100%',
    width: 50,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
