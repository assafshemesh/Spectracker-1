import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import TherapistHeader from '../components/TherapistHeader';
import UpperMenu from '../components/UpperMenu';
import GoalsList from '../components/GoalsList';
// import { SessionProvider } from '../contexts/SessionState';


const TreatmentPlanScreen = ({ route, navigation }) => {

  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("--------------------------TreatmentPlanScreen rendered----------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")

  const { goals } = route.params;
  const lastPatient = "ירדן";
  console.log("TreatmentPlanScreen: goals = " + goals);

  return (
    // <SessionProvider>
        <View style={styles.container}>
            <UpperMenu />
            {/* <TherapistHeader navigation={navigation} route={route} /> */}
            <View style={styles.textContainer}>
              <Text style={styles.heading1Text}>תוכנית הטיפול של <Text style={styles.nameText}>{lastPatient}</Text>♡</Text>
              <Text style={styles.heading2Text}>מטרות הטיפול </Text>
              <Text style={styles.skillsText}> (כפי שנקבעו בהתאם ל<Text style={styles.skillsLinkText}>מיומנויות של ירדן </Text>)</Text>
            </View>
            <GoalsList goals={goals} isSession={false}/>
            
        </View>
    // </SessionProvider>

  
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: "column-reverse",
      // justifyContent: 'flex-end',
      justifyContent: 'space-between',
      // alignItems: "center",
    },
    textContainer: {
      marginBottom: 10,
    },
    heading1Text: {
      // textAlign: "center",
      margin: 10,
      marginLeft: 15,
      fontSize: 16,
      color: '#47595e',
    },
    heading2Text: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: '#47595e',
      // margin: 5,
      marginLeft: 15, //"left" is actually "right"because of the RTL direction configured somewhere-- which is good but I need to check where I set it.
    },
    nameText: {
      fontSize: 16,
      fontWeight: "bold",
      color: '#47595e',
    },
    skillsText: {
      fontSize: 14,
      // fontWeight: "bold",
      textAlign: "center",
      color: '#47595e',
      marginLeft: 12,
    },
    skillsLinkText: {
      fontWeight: "bold",
      marginBottom: 10,
    },
    
  })

export default TreatmentPlanScreen;