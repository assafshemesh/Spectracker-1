import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import TherapistHeader from '../components/TherapistHeader';
import ImageHeader from '../components/ImageHeader';
import UpperMenu from '../components/UpperMenu';
import ManagerDashboard from '..//components/ManagerDashboard';
// import { SessionProvider } from '../contexts/SessionState';


const StartSessionScreen = ({ route, navigation }) => {

  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("--------------------------StartSessionScreen rendered----------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")

  
  return (
    // <SessionProvider>
        <View style={styles.container}>
            <UpperMenu />
            <TherapistHeader navigation={navigation} route={route} />
            <Text>StartSession</Text>
            
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
    
  })

export default StartSessionScreen;