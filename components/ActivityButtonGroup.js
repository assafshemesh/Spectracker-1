import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {uuid} from 'uuidv4';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActivityButton from './ActivityButton';
import {Picker} from '@react-native-community/picker';

const ActivityButtonGroup = ({recommendedActivities, restOfActivities, selectGoals}) => {

  const [buttonsState, setButtonsState] = useState(recommendedActivities.map((activity) => false));

  const [otherActivities, setOtherActivities] = useState(restOfActivities);

  const updateStyle = (id) => {
      setButtonsState(prevButtonsState => {
        return prevButtonsState.map((buttonState, index) => (recommendedActivities[index].id == id) );
      });
      console.log(buttonsState);
  };

  const updateGoals = (id) => {
      console.log('inside ActivityButtonGroup: updateGoals function');
      selectGoals(id);
  };

  // const testArray = ["one", "two", "three", "four", "five"];

  return (
    <View style={styles.container}>
    <FlatList 
      data={recommendedActivities}
      horizontal={true}
      renderItem={({item, index}) => <ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/>}
    />
    {/* <View stye={styles.testContainer}>
      <Text>{testArray[0]}</Text>
    </View> */}
    {/* <View stye={styles.testContainer}> */}
      {/* <FlatList stye={styles.testContainer}
        data={testArray}
        renderItem={({Item, index}) => <Text style={styles.textTest}>{Item}</Text>}
      /> */}
    {/* </View> */}
    {/* <Picker style={styles.otherActivitiesPicker}
      selectedValue={otherActivities}
      style={{height: 50, width: 200}}
      onValueChange={(itemValue, itemIndex) =>
        setOtherActivities({otherActivities: itemValue})
      }>
      {otherActivities.map((activity) => <Picker.Item label={activity.title} value={activity.title} />)  }
    </Picker> */}
  </View>
  );
};



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'palegreen',
        alignItems: 'flex-end',
        // alignContent: 'flex-end',
        // flexDirection: 'row-reverse'
        paddingRight: 11,
        paddingLeft: 11,
        // margin: 10,
        // height: 80,
    },
    otherActivitiesPicker: {
      flex: 1,
    },
    buttonOff: {
        // flex: 1,
        backgroundColor: 'lightblue',
        // borderWidth: 1,
        // borderColor: 'green',
        // textAlign: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // textAlignVertical: 'center',
        margin: 1,
        width: 70,
        height: 50,
        padding: 5,
    },
    buttonOn: {
        // flex: 1,
        backgroundColor: 'pink',
        // borderWidth: 1,
        // borderColor: 'green',
        // textAlign: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // textAlignVertical: 'center',
        margin: 1,
        width: 70,
        height: 50,
        padding: 5,
    },
    testContainer: {
      backgroundColor: "rosybrown",
      // backgroundColor: 'rgba(0, 255, 0, 0.3)',
      // zIndex: 5,
      borderWidth: 2,
      width: 100,
      height: 100,

    },
    textTest: {
      backgroundColor: "red",
      borderWidth: 1,
    },
});

export default ActivityButtonGroup;