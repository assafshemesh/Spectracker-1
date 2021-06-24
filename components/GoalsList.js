import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import SessionGoal from '../components/SessionGoal.js';
import Goal from '../components/Goal';

const GoalsList = ({goals, isSession}) => {

  useEffect(() => {
  }, [goals]);

    return (
        <View style={styles.container}>
              <FlatList 
                data={goals}
                // renderItem={({item}) => <SessionGoal goal={item} key={item.serialNum}/>}
                // renderItem={({item}) => <Goal goal={item} key={item.serialNum}/>}
                renderItem={({item}) => isSession? <SessionGoal goal={item} key={item.serialNum}/> : <Goal goal={item} key={item.serialNum}/>}
              />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'aliceblue',
      // borderWidth: 3,
      borderColor: 'orange',
    },
  })

export default GoalsList;
