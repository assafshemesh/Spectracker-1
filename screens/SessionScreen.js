import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
// import StartSessionButton from '../components/StartSessionButton';
import SessionConfigArea from '../components/SessionConfigArea';
import GoalsList from '../components/GoalsList';
import Timer from '../components/Timer';
import StartSessionButton from '../components/StartSessionButton';

const SessionScreen = ({ route, navigation }) => {

  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("-----------------------------SessionScreen rendered-------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")

  const [sessionDetails, setSessionDetails] = useState({
    therapistName: route.params.therapistName,
    patientName: route.params.patientName,
    timeOfSession: route.params.timeOfSession,
    sessionDuration: route.params.sessionDuration,
    isOngoing: route.params.isOngoing,
    sessionGoals: route.params.sessionGoals,
    sessionRecommendedActivities: route.params.sessionRecommendedActivities,
    restOfActivities: route.params.restOfActivities,
    selectedGoals: route.params.selectedGoals,
    selectedActivity: route.params.selectedActivity,
    selectedEnvironment: route.params.selectedEnvironment,
  });
  const [isSessionStopped, setIsSessionStopped] =useState(false);
  
  // const [activityGoals, setActivityGoals] = useState([sessionDetails.sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(sessionDetails.selectedActivity.id))]);
  // const [activityGoals, setActivityGoals] = useState(sessionDetails.selectedGoals);
  // const [activityGoals, setActivityGoals] = useState(sessionDetails.sessionGoals);
  // const [activityGoals, setActivityGoals] = useState(["a", "b", "c"]);
  // setActivityGoals([sessionDetails.sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(sessionDetails.selectedActivity.id))]);

  useEffect(() => {
    // if (sessionDetails.selectedEnvironment !== '') {
    //   handleSessionDetails(sessionDetails);
    // };
  }, [sessionDetails]);

  console.log(` ------ SessionScreen: sessionDetails.selectedActivity.id = ${sessionDetails.selectedActivity.id}`);
  // console.log(` ------ SessionScreen: activityGoals = ${activityGoals}`);
  // console.log(` ------ SessionScreen: activityGoals[0].serialNum = ${activityGoals[0].serialNum}`);
  // console.log(` ------ SessionScreen: activityGoals[0].id = ${activityGoals[0].id}`);
  // console.log(` ------ SessionScreen: activityGoals[0] = ${activityGoals[0]}`);
  console.log(` ------ SessionScreen: sessionDetails.sessionGoals = ${sessionDetails.sessionGoals}`);
  console.log(` ------ SessionScreen: sessionDetails.sessionGoals[0].id = ${sessionDetails.sessionGoals[0].id}`);

  const printSessionDetails = (where) => {
    console.log("******  SESSION DETAILS (" + where +"): ******")
    console.log("ssessionDetails.therapistName = " + sessionDetails.therapistName );
    console.log("ssessionDetails.patientName = " + sessionDetails.patientName );
    console.log("ssessionDetails.timeOfSession = date: " + sessionDetails.timeOfSession.date  + "  hour: " + sessionDetails.timeOfSession.hour);
    console.log("ssessionDetails.sessionDuration = " + sessionDetails.sessionDuration );
    console.log("ssessionDetails.isOngoing = " + sessionDetails.isOngoing );
    console.log("ssessionDetails.sessionGoals= " + sessionDetails.sessionGoals );
    console.log("ssessionDetails.sessionRecommendedActivities= " + sessionDetails.sessionRecommendedActivities );
    console.log("ssessionDetails.restOfActivities= " + sessionDetails.restOfActivities );
    console.log("ssessionDetails.selectedGoals= " + sessionDetails.selectedGoals );
    console.log("ssessionDetails.selectedActivity= " + sessionDetails.selectedActivity.title );
    console.log("ssessionDetails.selectedEnvironment= " + sessionDetails.selectedEnvironment.title );
  }

// useEffect(() => {
//   () => setActivityGoals([sessionDetails.sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(sessionDetails.selectedActivity.id))]);
// })

printSessionDetails("SessionScreen");
// const updateSessionDetails = ()

    return (
        <View style={styles.container}>
          {/* <Text> Hello there</Text>
          <Text> ssessionDetails.selectedActivity: {sessionDetails.selectedActivity.title}</Text>
          <Text> ssessionDetails.selectedEnvironment: {sessionDetails.selectedEnvironment.title}</Text>
          <Text> Goodbye there</Text> */}
          <Timer time={120} isStopped={isSessionStopped}/>
          {/* <Timer time={120} /> */}
          <SessionConfigArea sessionDetails={sessionDetails} updateSessionDetails={(activity, environment, goals) => {
            // setActivityGoals(goals);
            setSessionDetails((prevDetails) => ({ ...prevDetails, selectedActivity: activity, selectedEnvironment: environment, selectedGoals: goals }));
            }} />
          {/* <SessionConfigArea sessionDetails={sessionDetails} updateSessionDetails={(selectedActivity, selectedEnvironment) => setSessionDetails(...sessionDetails, selectedActivity)} /> */}
          {/* <GoalsList goals={activityGoals} flag={flag}/> */}
          <GoalsList goals={sessionDetails.selectedGoals} isSession={true}/>
          {/* <GoalsList goals={sessionDetails.sessionGoals}/> */}
            {/* <StartSessionButton navigation={navigation} route={route} /> */}
            <StartSessionButton navigation={navigation} isActive={true} onPress={() => {
              console.log("Session stopped");
              setIsSessionStopped(true);}}
               buttonsText={'סיום מפגש'} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })

export default SessionScreen;