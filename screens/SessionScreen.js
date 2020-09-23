import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
// import StartSessionButton from '../components/StartSessionButton';
import SessionConfigArea from '../components/SessionConfigArea';
import GoalsList from '../components/GoalsList';

const SessionScreen = ({ route, navigation }) => {

  const [sessionDetails, setSessionDetails] = useState({
    therapistName: route.params.username,
    patientName: route.params.patientName,
    timeOfSession: route.params.timeOfSession,
    sessionDuration: route.params.sessionDuration,
    isOngoing: route.params.isOngoing,
    sessionGoals: route.params.sessionGoals,
    sessionRecommendedActivities: route.params.sessionRecommendedActivities,
    restOfActivities: route.params.restOfActivities,
    selectedActivity: route.params.selectedActivity,
    selectedEnvironment: route.params.selectedEnvironment,
  });
  const [activityGoals, setActivityGoals] = useState([sessionDetails.sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(sessionDetails.selectedActivity.id))]);

const printSessionDetails = () => {
  console.log("----------------SessionScreen-- sessionDetails content:-------------------------")
  console.log("ssessionDetails.username = " + sessionDetails.username );
  console.log("ssessionDetails.patientName = " + sessionDetails.patientName );
  console.log("ssessionDetails.timeOfSession = date: " + sessionDetails.timeOfSession.date  + "  hour: " + sessionDetails.timeOfSession.hour);
  console.log("ssessionDetails.sessionDuration = " + sessionDetails.sessionDuration );
  console.log("ssessionDetails.isOngoing = " + sessionDetails.isOngoing );
  console.log("ssessionDetails.sessionGoals= " + sessionDetails.sessionGoals );
  console.log("ssessionDetails.sessionRecommendedActivities= " + sessionDetails.sessionRecommendedActivities );
  console.log("ssessionDetails.restOfActivities= " + sessionDetails.restOfActivities );
  console.log("ssessionDetails.selectedActivity= " + sessionDetails.selectedActivity.title );
  console.log("ssessionDetails.selectedEnvironment= " + sessionDetails.selectedEnvironment.title );
}

useEffect(() => {
  () => setActivityGoals([sessionDetails.sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(sessionDetails.selectedActivity.id))]);
})

printSessionDetails();

    return (
        <View style={styles.container}>
          {/* <Text> Hello there</Text>
          <Text> ssessionDetails.selectedActivity: {sessionDetails.selectedActivity.title}</Text>
          <Text> ssessionDetails.selectedEnvironment: {sessionDetails.selectedEnvironment.title}</Text>
          <Text> Goodbye there</Text> */}
          <SessionConfigArea sessionDetails={sessionDetails} sendActivityGoals={(goals) => setActivityGoals(goals)} />
          <GoalsList goals={activityGoals}/>
            {/* <StartSessionButton navigation={navigation} route={route} /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })

export default SessionScreen;