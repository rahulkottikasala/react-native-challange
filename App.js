import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const GOOGLE_PLACES_API_KEY = 'AIzaSyDRKyUzBNnGeLdKXfL0xZmkHmQueJs5z5A';
const screenWidth = Dimensions.get('window').width;

const App = () => {
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  getPermission = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  };

  useEffect(() => {
    getPermission().then(() => {
      Geolocation.getCurrentPosition(
        position => {
          // console.log(position);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
      <GooglePlacesAutocomplete

        styles={{
          description: {
            fontWeight: 'bold',
          },
          
          textInputContainer: {
            backgroundColor: 'grey',
          },
          textInput: {
            height: 38,
            marginHorizontal: 0,
            color: '#5d5d5d',
            fontSize: 16,
            borderWidth: 0,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          textInputContainer: {
            backgroundColor:'rgba(0,0,0,0)',
            top:20,
            width:screenWidth-10 ,
            borderWidth:0,
          },
          listView: {
            color: 'black', //To see where exactly the list is
            zIndex: 1000, //To popover the component outwards
            position: 'absolute',
            top: 45
          },
        }}
        placeholder="Search bar"
        query={{
          key: {GOOGLE_PLACES_API_KEY},
          language: 'en',
        }}
        GooglePlacesDetailsQuery={{
          fields: 'geometry',
        }}
      />  
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 5,
  },
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
