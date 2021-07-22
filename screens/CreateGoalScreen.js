import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import TherapistHeader from '../components/TherapistHeader';
import UpperMenu from '../components/UpperMenu';
import GoalsList from '../components/GoalsList';
// import { SessionProvider } from '../contexts/SessionState';


const CreateGoalScreen = ({ route, navigation }) => {

  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("--------------------------CreateGoalScreen rendered-------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")

  const { goals } = route.params;
  const lastPatient = "ירדן";
  console.log("TreatmentPlanScreen: goals = " + goals);

  const goalsSection = () => {
    console.log("TreatmentPlanScreen:   goals = " + goals);

    if (goals?.length) {
      return (
        <View style={styles.goalsSectionContainer}>
          <Text style={styles.heading2Text}>מטרות הטיפול </Text>
          <View style={styles.toolsMenuContainer}>
            <View style={styles.toolCreateGoalContainer}>
              <Text style={styles.toolCreateGoalIcon}>+</Text>  
            </View>
          </View>
          {/* <Text style={styles.explainsText}> (כפי שנקבעו בהתאם ל<Text style={styles.linkText}>מיומנויות של ירדן </Text>)</Text> */}
          <GoalsList goals={goals} isSession={false}/>
        </View>
      );
    } else {
      return (
        <View style={styles.goalsSectionContainer}>
            <Text style={styles.explainsText}>לא קיימות מטרות טיפול עבור {lastPatient}</Text>
            <View style={styles.createGoalContainer}>
              <Text style={styles.createGoalIcon}>+</Text>  
            </View>
            <Text style={styles.linkText}>צור מטרה חדשה</Text>
        </View>
      );
    }
  };

  return (
    // <SessionProvider>
        <View style={styles.container}>
            <UpperMenu />
            {/* <TherapistHeader navigation={navigation} route={route} /> */}
            <View style={styles.textContainer}>
              <Text style={styles.heading1Text}>תוכנית הטיפול של <Text style={styles.nameText}>{lastPatient}</Text>♡</Text>
              {/* <Text style={styles.heading2Text}>מטרות הטיפול </Text> */}
              {/* <Text style={styles.skillsText}> (כפי שנקבעו בהתאם ל<Text style={styles.skillsLinkText}>מיומנויות של ירדן </Text>)</Text> */}
            </View>
            {goalsSection()}
            {/* <GoalsList goals={goals} isSession={false}/> */}
            
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
      textAlign: "center",
      margin: 10,
      // marginLeft: 15,
      fontSize: 18,
      color: '#47595e',
    },
    heading2Text: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: '#47595e',
      // margin: 5,
      // marginLeft: 15, //"left" is actually "right"because of the RTL direction configured somewhere-- which is good but I need to check where I set it.
    },
    nameText: {
      fontSize: 18,
      fontWeight: "bold",
      color: '#47595e',
    },
    explainsText: {
      fontSize: 14,
      // fontWeight: "bold",
      textAlign: "center",
      color: '#47595e',
      marginLeft: 12,
    },
    linkText: {
      fontWeight: "bold",
      marginBottom: 10,
      color: '#47595e',
      textAlign: "center",
    },
    goalsSectionContainer: {
      flex: 1,
      alignContent: "center",
    },
    createGoalContainer: {
      width: 80,
      height: 80,
      borderColor: '#47595e',
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 60,
      margin: 10,

    },
    createGoalIcon: {
      fontSize: 40,
      color: '#47595e',
      // fontWeight: "bold",
      textAlign: "center",
    },
    
    toolCreateGoalContainer: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderColor: '#47595e',
      borderWidth: 1,
      justifyContent: "center",
      // alignSelf: "center",
      // marginTop: 60,
      margin: 5,
      marginLeft: 12,

    },
    toolCreateGoalIcon: {
      fontSize: 22,
      color: '#47595e',
      // fontWeight: "bold",
      textAlign: "center",
    },
    
  })

export default CreateGoalScreen;