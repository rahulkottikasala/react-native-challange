import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from '../constants/color';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const HomePage = () => {
  const [image, setImage] = useState({});
  const [upload, setUpload] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    'https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png',
  );

  const handleImage = async () => {
    await launchImageLibrary({}, res => {
      console.log(res.assets);
      const source = {
        uri: res?.assets?.[0].uri,
        file: res?.assets?.[0].fileName,
      };
      // console.log(source);
      setImage(source);
    });
  };

  const uploadImage = async () => {
    const reference = await storage().ref(image.file);
    const pathToFile = image.uri;
    const ref = reference.putFile(pathToFile).then(() => {
      console.log('Image uploaded to the bucket!');
      Alert.alert('Success!', 'Image uploaded successfully');
      setUpload(false);
    });
    try {
      await ref;
      const url = await storage().ref(image.file).getDownloadURL();
      // console.log('%%%%%%%%%%%%%', url);
      setProfilePicture(url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // const url = await storage().ref(image.file).getDownloadURL()
    console.log('call');
    // console.log('%%%%%%%%%%%%%', url);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyTitle}>Profile</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: profilePicture}} />
        </View>
        <TouchableHighlight
          style={styles.editButton}
          onPress={() => {
            let status = upload ? false : true;
            setUpload(status);
          }}>
          <Icon size={40} color="grey" name="drive-file-rename-outline" />
        </TouchableHighlight>
        <View style={{width:300, alignItems:'center'}}>
          <Text style={{color:'#000', fontSize:18, fontWeight:'bold', marginBottom:5}}>Name: Rahul</Text>
          <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
          <Text>Name: Rahul</Text>
        </View>
        {upload ? (
          <View style={styles.uploadContainer}>
            <View style={styles.pickImageContainer}>
              {image && (
                <Image
                  source={{uri: image.uri ? image.uri : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?b=1&s=170667a&w=0&k=20&c=LEhQ7Gji4-gllQqp80hLpQsLHlHLw61DoiVf7XJsSx0='}}
                  style={{width: 100, height: 100}}
                />
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={styles.button} onPress={handleImage}>
                <Text style={styles.buttonText}>Pick a file</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.uploadButton}
                onPress={uploadImage}>
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableHighlight>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bodyContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  bodyTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 130,
  },
  editButton: {
    position: 'absolute',
    top: 180,
    left: 230,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 43,
    backgroundColor: COLOR.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    borderRadius: 10,
  },
  uploadButton: {
    width: 100,
    height: 43,
    backgroundColor: '#f5820d',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  uploadContainer: {
    width: 300,
    height: 200,
    backgroundColor: 'white',
    marginTop: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.buttonColor,
  },
  pickImageContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'lightblue',
  },
});
