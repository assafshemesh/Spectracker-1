import React from 'react';
// import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { SessionContext } from '../contexts/SessionState';


const TherapistHeader = ({ route, navigation }) => {

  const { username }= route.params;
  const lastPatient = 'ירדן';
  //const patientImage = {require('../assets/Yardeni.jpg')};

  // const sessionContext = useContext(SessionContext);
  // console.log("in TerapistHeader--------BEFORE UPDATE: sessionContext.therapistName = " + sessionContext.therapistName);
  // sessionContext.updateSession({name: 'therapistName', value: username});
  // console.log("in TerapistHeader--------AFTER UPDATE: sessionContext.therapistName = " + sessionContext.therapistName);


  const getSessionTime = () => {
    return ({
      date: "7.3.2020",
      hour: "11:00",
    });
  };
  

  return (
    <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
            <ImageBackground style={styles.headerImage} source={require('../assets/Yardeni-cropped01.jpg')}> */}
                    {/* <Text style={styles.text}>Welcome */}
                    <View style={styles.helloTextWrapper}>
                      <Text style={styles.text}>שלום 
                          <Text style={styles.name}> { username }</Text>
                          , {"\n"}המטופלת שלך היא  <Text style={styles.name}>{lastPatient}</Text>
                      </Text>
                    </View>
                    <View style={styles.timeTextWrapper}>
                      {/* <Text style={styles.text}>טיפול זה נקבע ל: {"\n"} {getSessionTime().date} {"\n"} {getSessionTime().hour}</Text> */}
                      <Text style={styles.text}>הטיפול הקרוב נקבע ל: {"\n"} {getSessionTime().date} {"\n"} {getSessionTime().hour}</Text>
                    </View>
                    
            {/* </ImageBackground>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'honeydew',
    paddingBottom: 10,
    // backgroundColor: 'darkslateblue',
    // justifyContent: 'center',
  },
  // imageContainer: {
  //    flex: 1,
  //    flexDirection: 'column',
  //    backgroundColor: 'pink',
  // },
//   textContainer: {
//      flex: 1,
//   },
  // headerImage: {
  //    flex: 1,
  //    justifyContent: 'flex-end',
  //    resizeMode: 'cover',
  // },
  timeTextWrapper: {
    // flex: 1,
  },
  helloTextWrapper: {
    // flex: 2,
  },
  text: {
    //  backgroundColor: 'rgba(72, 61, 139, 0.7)',
    //  color: '#fff',
    //  color: 'darkslateblue',
    color: '#47595e',
    //  fontSize: 20,
     fontSize: 16,
     fontFamily: 'sans-serif-light',
    //  lineHeight: 32,
     paddingLeft: 10,
     paddingRight: 10,
    //  textAlign: 'center',
  },
  name: {
    //  color: '#fff',
    //  color: 'darkslateblue',
    color: '#47595e',
     fontWeight: 'bold',
    //  fontSize: 20,
     fontSize: 16,
  },
})

export default TherapistHeader;