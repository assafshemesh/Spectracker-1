import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Carousel from './Carousel';
// import { NavigationContainer } from '@react-navigation/native';

const ImageHeader = ({ route, navigation }) => {
  const { username }= route.params;
  const lastPatient = 'ירדן';
//   const patientImage = {require('../assets/Yardeni.jpg')};
  return (
    <View style={styles.container}>
        {/* <View style={styles.imageContainer}> */}
        {/* <TouchableHighlight style={styles.imageContainer}> */}
            {/* <ImageBackground style={styles.headerImage} source={require('../assets/Yardeni-cropped01.jpg')}> */}
            {/* <View style={styles.colorsBehindImage}></View> */}
            <Image style={styles.image} source={require('../assets/Yardeni-cropped01.jpg')}>
                {/* <Text style={styles.text}>שלום  */}
                    {/* <Text style={styles.name}> { username }</Text>
                    , {"\n"}המטופלת שלך היא  <Text style={styles.name}>{lastPatient}</Text> */}
                    {/* . המטופלת שלך היא <Text style={styles.name}>{lastPatient}</Text> */}
                {/* </Text> */}
                    {/* <Text style={styles.text}>Welcome
                        <Text style={styles.name}> { username }</Text>
                        , {"\n"}Your patient is <Text style={styles.name}>{lastPatient}</Text>
                    </Text> */}
            {/* </ImageBackground> */}
            </Image>
        {/* </TouchableHighlight> */}
        {/* </View> */}
        {/* </View> */}
        <View style={styles.patientContent}>
          {/* <Carousel/> */}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.23,
    position: 'relative',
    // backgroundColor: 'darkslateblue',
    // justifyContent: 'center',

    // borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    // width: Dimensions.get('window').width * 0.4,
    // height: Dimensions.get('window').width * 0.4,
    // justifyContent: 'center',
    alignSelf: 'center',
    // borderWidth: 2,
     borderColor: 'magenta',
     marginTop: 17,
     marginBottom: 30,
     padding: 0,
  },
  image: {
    //  flex: 1,
    //  flexDirection: 'column',
    //  backgroundColor: 'pink',
     borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    //  borderWidth: 2,
     borderColor: 'cyan',
  },
  patientContent: {
    // flex: 2,
    // height: Dimensions.get('window').width * 0.5,
    backgroundColor: 'lightcyan',
  },
//   textContainer: {
//      flex: 1,
//   },
  headerImage: {
     flex: 1,
    //  justifyContent: 'flex-end',
     resizeMode: 'cover',


    },
  text: {
    //  backgroundColor: 'rgba(72, 61, 139, 0.7)',
    //  color: '#fff',
     color: 'darkslateblue',
     fontSize: 18,
     fontFamily: 'sans-serif-light',
     lineHeight: 32,
     paddingLeft: 10,
    //  textAlign: 'center',
    marginRight: 30,
    marginTop: 50,
  },
  name: {
    //  color: '#fff',
     color: 'darkslateblue',
     fontWeight: 'bold',
     fontSize: 18,
  },
  colorsBehindImage: {
    backgroundColor: 'green',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    borderBottomRightRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 4,
    borderTopRightRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 1.5,
    width: Dimensions.get('window').width * 0.35,
    // width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.35, 
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    // right: 2,
    // bottom: 2,
    zIndex: -1,
  },
})

export default ImageHeader;