import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import { MEDIA_PATH } from '../../constants/MediaPath';
const {width} = Dimensions.get('window');
const viewConfigRef = {viewAreaCoveragePercentThreshold: 95};

const Banner = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let flatListRef = useRef();

  //only needed if want to know th index
  const onViewRef = useRef(({changed}) => {
    if (changed) {
      setCurrentIndex(changed[0].index);
    }
  });



  const scrollToIndex = index => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: index,
      viewPosition: 0,
    });
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItems}
        horizontal
        pagingEnabled
        initialScrollIndex={0}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.sliderNavContainer}>
        {data.map(({}, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.sliderNavCircle,
              {backgroundColor: index == currentIndex ? '#4c669f' : '#fff'},
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sliderNavContainer: {
    width: width - 40,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 140,
  },
  sliderNavCircle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginHorizontal: 5,
    borderWidth: 0.1,
  },
  sliderImageContainer: {
    width: width - 40,
    height: 140,
    backgroundColor: 'red',
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  sliderImage: {
    width: width - 50,
    height: 140,
    resizeMode: 'cover',
    marginHorizontal: 5,
    borderRadius: 15,
  },
});

//FlatList
const renderItems = ({item}) => (
  <TouchableOpacity style={styles.sliderImageContainer}>
    <Image
      source={{
        uri:MEDIA_PATH+item.imageUrl
      }}
    // source={{uri:item.imageUrl}}
      style={styles.sliderImage}
    />
  </TouchableOpacity>
);
