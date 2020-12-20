import React, {useState, useEffect}  from 'react';
// import React, {useState, useContext}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, FlatList, Dimensions, Image } from 'react-native';
import Goal from '../components/Goal';
import ActivityButtonGroup from '../components/ActivityButtonGroup';
import DropdownListButton from '../components/DropdownListButton';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

// const Carousel = ({ route, navigation, handleSessionDetails}) => {
const Carousel = () => {

    // const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
        title: `This is the title! ${i + 1}`,
        subtitle: `This is the subtitle ${i + 1}!`,
    };
    });

    function Slide({ data }) {
        return (
        <View style={styles.carouselImageContainer}>
            <Image
            source={{ uri: data.image }}
            style={styles.carouselImage}
            ></Image>
            {/* <Text style={{ fontSize: 24 }}>{data.title}</Text>
            <Text style={{ fontSize: 18 }}>{data.subtitle}</Text> */}
        </View>
        );
    };

    return (
        <FlatList
          style={styles.carouselContainer}
          data={slideList}
        //   style={{ flex: 1 }}
          renderItem={({ item }) => {
            return <Slide data={item} />;
          }}
        //   pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      );

}

const styles = StyleSheet.create({
    carouselImage: {
        width: windowWidth / 4,
        height: windowWidth / 4,
        borderRadius: windowWidth / 32,
        // borderWidth: 5,
        borderColor: 'lime',
    },
    carouselImageContainer: {
        // height: windowHeight,
        // width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    carouselContainer: {
        // marginRight: 8,
        // borderWidth: 1,
        borderColor: 'blue',
    },
});

export default Carousel;