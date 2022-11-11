import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  LogBox,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {addBook, deleteBook, getAllBooks} from './realm';

const App = () => {
  const [addStatus, setAddStatus] = useState(false);
  const [books, setBooks] = useState(getAllBooks());

  //details
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');

  cleatInputValue = () => {
    setId('');
    setTitle('');
    setAuthor('');
    setDetails('');
    setImage('');
  };

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View
        style={{
          marginTop: 10,
          height: 140,
          padding: 10,
          backgroundColor: 'pink',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
      
        {/* --------------------Image container---------------------- */}
        <View style={{width: '32%'}}>
          {item.image != '' ? (
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: item.image}}  
            />
          ) : (
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 10, color: 'grey'}}>Not Uploaded :(</Text>
            </View>
          )}
        </View>
        {/*----------------------- Info container----------------------*/}

        <View style={{width: '68%', paddingHorizontal: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'grey',
              marginBottom: 3,
            }}>
            {item.author}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              color: 'grey',
              height: 43,
            }}>
            {item.details}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <TouchableHighlight
              style={{
                width: 80,
                height: 30,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 10, fontWeight: 'bold'}}>Update</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{
                width: 80,
                height: 30,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                console.log('bfrr', item);
                deleteBook(item.recordID);
                setBooks(getAllBooks);
              }}>
              <Text style={{fontSize: 10, fontWeight: 'bold'}}>Delete</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, padding: 30, backgroundColor: 'black'}}>
      {addStatus ? (
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
          }}>
          <TextInput
            style={{
              backgroundColor: 'white',
              color: 'pink',
              fontSize: 16,
              paddingHorizontal: 10,
              marginBottom: 5,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
            placeholder="Book Id"
            placeholderTextColor={'grey'}
            maxLength={3}
            onChangeText={text => setId(text)}
            value={id}
            keyboardType={'phone-pad'}
          />
          <TextInput
            style={{
              backgroundColor: 'white',
              color: 'pink',
              fontSize: 16,
              paddingHorizontal: 10,
              marginBottom: 5,
            }}
            placeholder="Book"
            placeholderTextColor={'grey'}
            onChangeText={text => setTitle(text)}
            value={title}
          />
          <TextInput
            style={{
              backgroundColor: 'white',
              color: 'pink',
              fontSize: 16,
              paddingHorizontal: 10,
              marginBottom: 5,
            }}
            placeholder="Author"
            placeholderTextColor={'grey'}
            onChangeText={text => setAuthor(text)}
            value={author}
          />
          <TextInput
            style={{
              backgroundColor: 'white',
              color: 'pink',
              fontSize: 16,
              paddingHorizontal: 10,
              marginBottom: 5,
            }}
            placeholder="Details"
            placeholderTextColor={'grey'}
            onChangeText={text => setDetails(text)}
            value={details}
          />
          <TextInput
            style={{
              backgroundColor: 'white',
              color: 'pink',
              fontSize: 16,
              paddingHorizontal: 10,
              marginBottom: 10,
            }}
            placeholder="Image URL"
            placeholderTextColor={'grey'}
            onChangeText={text => setImage(text)}
            value={image}
          />
          <TouchableHighlight
            style={{
              width: '100%',
              backgroundColor: 'pink',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            onPress={() => {
              if (id != '' && title != '') {
                addBook(id, title, author, details, image);
                setBooks(getAllBooks);
                cleatInputValue();
              }
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              height: 30,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
            onPress={() => setAddStatus(false)}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Go Back</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <TouchableHighlight
          style={{
            height: 30,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setAddStatus(true)}>
          <Text style={{fontWeight: 'bold'}}>Add a Books</Text>
        </TouchableHighlight>
      )}

      <FlatList data={books} renderItem={renderItem} />
    </View>
  );
};

export default App;
