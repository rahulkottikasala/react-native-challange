import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = () => {
    
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.xentice.com/api/postadSelect')
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContainerTitle}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
          Commercial Office
        </Text>
        <View style={{height: 30, justifyContent: 'flex-end'}}>
          <Text style={{fontSize: 12, color: 'grey'}}>see all</Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.cardContainerBody}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {data.map(item => (
            <View key={item.id} style={styles.cardBody}>
              <View style={styles.cardImageContainer}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  source={{
                    uri: JSON.parse(item.images)[0],
                  }}
                />
              </View>
              <View style={styles.cardTitleContainer}>
                <View style={{width: 100}}>
                  <Text style={{fontSize: 12, color: '#000'}}>
                    {JSON.parse(item.propertyType).name}
                  </Text>
                </View>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: 'red'}}>
                  Rs:1000/Hr
                </Text>
              </View>
              <View style={styles.cardLocationContainer}>
                <Icon name="location-on" color={'green'} size={16} />
                <Text style={{fontSize: 11, color: '#000', marginLeft: 5}}>
                  Trissur
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 230,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainerBody: {
    height: 200,
    paddingVertical: 10,
  },

  cardBody: {
    width: 160,
    height: 160,
    borderRadius: 5,
    marginRight: 5,
    borderWidth: 0.4,
    borderColor: 'grey',
  },
  cardImageContainer: {
    height: 110,
    backgroundColor: 'green',
    overflow: 'hidden',
    borderRadius: 5,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  cardLocationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
});
