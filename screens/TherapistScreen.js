import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import TherapistHeader from '../components/TherapistHeader';
import ImageHeader from '../components/ImageHeader';
import SessionConfig from '../components/SessionConfig';
import UpperMenu from '../components/UpperMenu';
import ActivitySelection from '../components/ActivitySelection';
import StartSessionButton from '../components/StartSessionButton';

const TherapistScreen = ({ route, navigation }) => {

  // const [sessionDetails, setSessionDetails] = useState({});

  // const handleSessionDetails = (details) => {
  //   setSessionDetails((prevSessionDetails) => {
  //     [...prevSessionDetails, ...details]
  //   });
  // };


    return (
        <View style={styles.container}>
            {/* <Text>Therapist Screen</Text> */}
            <UpperMenu />
            <TherapistHeader navigation={navigation} route={route} />
            {/* <TherapistHeader navigation={navigation} route={route} handleSessionDetails={handleSessionDetails} /> */}
            {/* <ImageHeader navigation={navigation} route={route} /> */}
            {/* <SessionConfig  navigation={navigation} route={route} /> */}
            <ActivitySelection navigation={navigation} route={route} />
            <StartSessionButton navigation={navigation} route={route} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  })

export default TherapistScreen;