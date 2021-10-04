import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Skill from '../components/Skill';

const GoalsList = ({skills}) => {

  useEffect(() => {
  }, [skills]);

    return (
        <View style={styles.container}>
              <FlatList 
                data={skills}
                // renderItem={({item}) => <SessionGoal goal={item} key={item.serialNum}/>}
                // renderItem={({item}) => <Goal goal={item} key={item.serialNum}/>}
                renderItem={({item}) => <Skill skill={item} key={item.serialNum}/>}
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

export default SkillsList;
