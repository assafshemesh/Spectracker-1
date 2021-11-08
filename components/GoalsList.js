import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import SessionGoal from '../components/SessionGoal.js';
import Goal from '../components/Goal';

const GoalsList = ({goals, isSession}) => {

  useEffect(() => {
  }, [goals]);

  if (goals?.length) {
    return (
        <View style={styles.container}>
              <FlatList 
                data={goals}
                // renderItem={({item}) => <SessionGoal goal={item} key={item.serialNum}/>}
                // renderItem={({item}) => <Goal goal={item} key={item.serialNum}/>}
                renderItem={({item}) => isSession? <SessionGoal goal={item} key={item.serialNum}/> : <Goal goal={item} key={item.serialNum}/>}
              />
        </View>
    );
  } else {
    return (
      <View style={styles.container}>
          <Text style={styles.explainsText}>לא קיימות מטרות טיפול</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'aliceblue',
      // borderWidth: 3,
      borderColor: 'orange',
    },
    explainsText: {
      fontSize: 14,
      // fontWeight: "bold",
      textAlign: "center",
      color: '#47595e',
      marginLeft: 12,
    },
  })

export default GoalsList;
