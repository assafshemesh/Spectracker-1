import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ActivityButton = ({activity, buttonStyle, updateStyle, updateGoals}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonStyle} onPress={() => {
          updateStyle(activity.id);
          updateGoals(activity);
        }}>
        {/* <View style={styles.buttonTextWrapper}> */}
          <Text style={styles.buttonText}>{activity.title}</Text>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderRadius: 20,
    borderWidth: 1,
    borderColor: 'blue',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: 'orange',
  }
});

export default ActivityButton;