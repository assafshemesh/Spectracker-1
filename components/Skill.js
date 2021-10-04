import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const Skill = ({skill}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.skillView}>
          <Text style={styles.skillTitle}>{skill.type}- מיומנות {skill.serialNum}</Text>
          <Text style={styles.skillTitle}>{skill.wasAchieved} הושגה: </Text>
          <Text style={styles.skillDescription}>{skill.description}</Text>
          
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 8,
        paddingBottom: 10,
        backgroundColor: '#f8f8f8',
        // borderBottomWidth: 1,
        borderWidth: 1,
        // borderColor: '#eee',
        borderColor: '#ddd',
        margin: 2,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'flex-start',
    },
    skillView: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        alignItems: 'flex-start',

    },
    skillTitle: {
      flex: 1,
      flexWrap: 'wrap',
      fontSize: 12,
      // fontWeight: 'bold',
      // backgroundColor: 'darksalmon',
      // width: 300,
      marginLeft: 10,
      height: 20,
      // lineHeight: 20,
      alignSelf: 'flex-end',
      // borderWidth: 2,
      // borderColor: 'lightgray',
    },
    skillDescription: {
        flex: 1,
        fontSize: 10,
        height: 20,
    },
})

export default Skill;