import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';
import {uuid} from 'uuidv4';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActivityButton from './ActivityButton';
// import {Picker} from '@react-native-community/picker';
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
import DropDownList from './fromLiora/DropDownList';

const ActivityButtonGroup = ({recommendedActivities, restOfActivities, selectGoals}) => {

  const [buttonsState, setButtonsState] = useState(recommendedActivities.map((activity) => false));
  // const [buttonsState, setButtonsState] = useState([...recommendedActivities.map((activity) => false), false]);

  const [otherActivities, setOtherActivities] = useState(restOfActivities);

  const updateStyle = (id) => {
      setButtonsState(prevButtonsState => {
        return prevButtonsState.map((buttonState, index) => (recommendedActivities[index].id == id) );
        // return prevButtonsState.map((buttonState, index) => ((index == (buttonsState.length - 1)) || (recommendedActivities[index].id == id)) );
      });
      console.log(buttonsState);
  };

  const updateGoals = (id) => {
      console.log('inside ActivityButtonGroup: updateGoals function');
      selectGoals(id);
  };

  const [selectedActivity, setSelectedActivity] = useState('עוד פעילויות...');
  // const [selectedActivity, setSelectedActivity] = useState({
  //   id: null,
  //   title: 'עוד פעילויות...',
  //   description: '',
  // });
  return (
    <View style={styles.container}>
      <FlatList style={styles.recommendedActivities}
        data={recommendedActivities}
        horizontal={true}
        renderItem={({item, index}) => <ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/>}
      />
      {/* <DropDownList title={'עוד פעילויות...'} pickList={restOfActivities} handleItem={(activity) => updateGoals(activity.id)} /> */}
      {/* <Menu onSelect={value => setSelectedActivity(prevSelectedActivity => value)}>
        <MenuTrigger>
          <TouchableOpacity>
            <Text>{selectedActivity}</Text>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions>
          <FlatList
            data={restOfActivities}
            renderItem={({ item }) => (
              <MenuOption value={item.title}><TouchableOpacity style={styles.optionMenuTouchable}><Text style={styles.menuOptionText}>{item.title}</Text></TouchableOpacity></MenuOption>
            )}
            style={{ height: 100 }}
          />
        </MenuOptions>
      </Menu> */}

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
    menuOptionText: {
      fontSize: 18,
    },
    optionMenuTouchable: {
      // backgroundColor: 'pink',
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
    recommendedActivities: {
      // flex: 4,
    },
    otherActivities: {
      flex: 1,
    },
});

export default ActivityButtonGroup;