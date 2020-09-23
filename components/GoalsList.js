import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import SessionGoal from '../components/SessionGoal.js';

const GoalsList = ({goals}) => {

  // useEffect(() => {
  // }, [goals]);

    return (
        <View style={styles.container}>
              <FlatList 
                data={goals}
                renderItem={({item}) => <SessionGoal goal={item} key={item.serialNum}/>}
              />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 8,
    },
  })

export default GoalsList;
