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
// import { SessionProvider } from '../contexts/SessionState';


const TherapistScreen = ({ route, navigation }) => {

  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("-----------------------------TerapistScreen rendered------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")

  const [sessionDetails, setSessionDetails] = useState({});
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleSessionDetails = (details) => {
    console.log("----------inside TherapistScreen: handleSessionDetails--------------------");
    setIsButtonActive(true);
    setSessionDetails(details);
    // printSessionDetails();
  };

  const navigateToSession = () => {

    const printSessionDetails = () => {
      console.log("----------------TherpistScreen-- sessionDetails content:-------------------------")
      console.log("ssessionDetails.username = " + sessionDetails.username );
      console.log("ssessionDetails.patientName = " + sessionDetails.patientName );
      console.log("ssessionDetails.timeOfSession = date: " + sessionDetails.timeOfSession.date  + "  hour: " + sessionDetails.timeOfSession.hour);
      console.log("ssessionDetails.sessionDuration = " + sessionDetails.sessionDuration );
      console.log("ssessionDetails.isOngoing = " + sessionDetails.isOngoing );
      console.log("ssessionDetails.sessionGoals= " + sessionDetails.sessionGoals );
      console.log("ssessionDetails.sessionRecommendedActivities= " + sessionDetails.sessionRecommendedActivities );
      console.log("ssessionDetails.restOfActivities= " + sessionDetails.restOfActivities );
      console.log("ssessionDetails.selectedActivity= " + sessionDetails.selectedActivity );
      console.log("ssessionDetails.selectedEnvironment= " + sessionDetails.selectedEnvironment );
    }
    
    printSessionDetails();
    
    console.log("----------inside TherapistScreen: navigate--------------------");
    navigation.navigate('Session', sessionDetails);
  };


    return (
      // <SessionProvider>
          <View style={styles.container}>
              {/* <Text>Therapist Screen</Text> */}
              <UpperMenu />
              <TherapistHeader navigation={navigation} route={route} />
              {/* <ImageHeader navigation={navigation} route={route} /> */}
              {/* <SessionConfig  navigation={navigation} route={route} /> */}
              <ActivitySelection navigation={navigation} route={route} handleSessionDetails={handleSessionDetails} />
              {/* <StartSessionButton navigation={navigation} isActive={sessionDetails.selectedActivity ? true : false } onPress={navigateToSession}/>  */}
              <StartSessionButton navigation={navigation} isActive={isButtonActive} onPress={navigateToSession}/> 
              {/* <StartSessionButton navigation={navigation} disabled={sessionDetails.selectedActivity ? false : true }/>  */}
          </View>
      // </SessionProvider>

    
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  })

export default TherapistScreen;