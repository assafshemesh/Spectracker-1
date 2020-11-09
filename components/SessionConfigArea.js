import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import DropdownListButton from '../components/DropdownListButton';

const SessionConfigArea = ({sessionDetails, updateSessionDetails}) => {

    const printSessionDetails = (where) => {
    console.log("******  SESSION DETAILS (" + where +"): ******");
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

    printSessionDetails("SessionScreen: SessionConfigArea");

    const [selectedActivity, setSelectedActivity] = useState(sessionDetails.selectedActivity);
    const [selectedEnvironment, setSelectedEnvironment] = useState(sessionDetails.selectedEnvironment);
    const [activityGoals, setActivityGoals] = useState(sessionDetails.sessionGoals); 
    const [environments, setEnvironments] = useState(sessionDetails.selectedActivity.environments);

    useEffect(() => {
      
    // }, [sessionDetails]);
    }, [activityGoals]);   
    //  ----either the above line or the previous can be uncommented BUT not both

    const updateGoals = (activity) => {
        console.log("ActivityButtonGroup: inside updateGoals function--------------------- activity.id = " + activity.id);
        // setActivityGoals(sessionDetails.sessionGoals);
        // setActivityGoals(prevGoals => { 
        // return (prevGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(activity.id)));
        // });
        setActivityGoals(sessionDetails.sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(activity.id)));
        // setActivityGoals(prevGoals => { 
        // return (prevGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(activity.id)));
        // });
        setActivityGoals(prevGoals => {
          console.log(`A C T I V I T Y GOALS = ${prevGoals}`);
          updateSessionDetails(activity, selectedEnvironment, prevGoals);
        return (prevGoals);
        });
        console.log(` ------ SessionScreen: SessionConfigArea- updateGoals:  activityGoals = ${activityGoals}`);
        updateEnvironments(activity);
        console.log(` ------ SessionScreen: SessionConfigArea- updateGoals:  activityGoals = ${activityGoals}`);
        // updateActivityGoals(activity, activityGoals);
    };

    const updateEnvironments = (activity) => {
        console.log(` ------ SessionScreen: SessionConfigArea- updateGoals:  activityGoals = ${activityGoals}`);
        setEnvironments(activity.environments);
        var defEnv = activity.environments?.filter((environment) => environment.default == true)[0] || {title: 'no environments', id: 444};
        setSelectedEnvironment(defEnv);
        // updateSessionDetails(activity, defEnv, activityGoals);
    };
    
    return (
        <View style={styles.container}>
          <DropdownListButton arrayListItems={[...sessionDetails.sessionRecommendedActivities, ...sessionDetails.restOfActivities]} defaultValue={selectedActivity.title} precedingText={'פעילות:  '} onSelect={(activity) => {
                console.log(" ------ SessionScreen: SessionConfigArea- onSelect (of DropDownListButton of session activities) ------");
                setSelectedActivity(activity);
                updateGoals(activity);
              }} />
          <DropdownListButton arrayListItems={selectedActivity.environments} defaultValue={selectedEnvironment.title} precedingText={'סביבה:  '} onSelect={(environment) => {
                setSelectedEnvironment(environment);
                }} />
          
            {/* <StartSessionButton navigation={navigation} route={route} /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
  })

export default SessionConfigArea;
