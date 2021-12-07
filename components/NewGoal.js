import React, {useState, useRef, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useSelector, useDispatch  } from 'react-redux';
import DropdownListButton2 from './DropdownListButton2';
import RadioButtons from './RadioButtons';
/* action creators */
import { updateGoal } from '../store/actions/goals/goals';
import { withTheme } from 'react-native-elements';

const NewGoal = ({onClose}) => {

  console.log("----------------------------------------------------------------------------------")
  console.log("--------------------------NewGoal rendered----------------------------")
  console.log("----------------------------------------------------------------------------------")


  // const state = useSelector(state => state.goals);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const goals = state.goals.allGoals;
  const skills = state.skills.allSkills;
  const activities = state.activities.allActivities;
  const domains = state.domains.allDomains;
  const goalsNum = goals.length;
  const [typeSelected, setTypeSelected] = useState(0);
  const [newSubgoals, setNewSubgoals] = useState([{ id: 1, description: ""}]);
  const [dataFlicker, setDataFlicker] = useState(false);
  const [input, setInput] = useState("");
  
  const showDeleteButton = (id) => {
    if (newSubgoals.length != 1) {
      return (
        <TouchableOpacity style={styles.removeSubgoalButton} onPress={() => onDeleteSubgoal(id)}>
            <Text style={styles.removeSubgoalButtonText}>x</Text>
        </TouchableOpacity>
      )
    }
  }
  const onDeleteSubgoal = (id) => {
    if (newSubgoals.length > 1) {
      const filteredSubgoals = newSubgoals.filter(item => item.id !== id);
      setNewSubgoals(filteredSubgoals);
      setDataFlicker(!dataFlicker);
    }
  }
  const onAddSubgoal = () => {
    const longerSubgoals = [...newSubgoals, {id: newSubgoals[newSubgoals.length-1].id + 1, description: ""}];
    setNewSubgoals(longerSubgoals);
    setDataFlicker(!dataFlicker);
  }
  return (
        <View style={styles.container}>
            <View style={styles.secondaryContainer}>
                <Text style={styles.heading1Text}>מטרה חדשה: מטרה מס' {goalsNum + 1}</Text>
                <DropdownListButton2 style={styles.domainDropdownButton} arrayListItems={domains} defaultValue={""} placeHolder={""} precedingText={"תחום התפתחות"} onSelect={(item) => setTypeSelected(item.id)}/>
                {/* <View style={styles.rangeButtonsContainer}>
                  <RadioButtons buttons={skillsTypes} styleButtonOn={styles.rangeButtonOn} styleButtonOff={styles.rangeButtonOff} onPress={(index) => console.log("The selected develpmental range is" + skillsTypes[index].title)} />
                </View> */}
                <View style={styles.subgoalsContainer}>
                  <View style={styles.subgoalsHeadingContainer}>
                      <Text style={styles.heading2Text}>תתי מטרות</Text>
                      <TouchableOpacity style={styles.addSubgoalButton} onPress={onAddSubgoal}>
                          <Text style={styles.addSubgoalButtonText}>+</Text>
                      </TouchableOpacity>
                  </View>
                  <FlatList
                    data={newSubgoals}
                    extraData={dataFlicker}
                    // keyExtractor={(item, index) => index}
                    keyExtractor={(item) => item.id}
                    // data={[{ id: 1, description: ""}, { id: 2, description: ""}]}
                    renderItem={({item, index}) => { return (
                        <View style={styles.subgoalContainer}>
                            {console.log("-----------*+*_+*+*+>>>>> index = " + index)}
                            {console.log("-----------*+*_+*+*+>>>>> item = " + item)}
                            {console.log("-----------*+*_+*+*+>>>>> item.id = " + item.id)}
                            <Text style={styles.subgoalNumText}>.{index + 1}</Text>
                            <TextInput
                                style={styles.subgoalInput}
                                placeholder="      תת-מטרה "
                                // multiline={true}
                                onChangeText={(text) => setInput(text)}
                                // onSubmitEditing={(event) => {
                                onSubmitEditing={() => {
                                  // {console.log("-----------*+*_+*+*+>>>>> event = " + event)}
                                  // item.description = event.text;
                                  item.description = input;
                                  {console.log("-----------*+*_+*+*+>>>>> item.description = " + item.description)}
                                  }}
                            />
                            {showDeleteButton(item.id)}
                        </View>
                    )}}
                  />
                </View>
                
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => {
              onClose(false);
              setNewSubgoals([{ id: 1, description: ""}]);
            }}>
                <Text style={styles.saveGoalButtonText}>שמירה</Text>
            </TouchableOpacity>
                
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1.2,
      // flex: 3,
      // flexDirection: "column-reverse",
      // justifyContent: 'flex-end',
      justifyContent: 'space-between',
      // alignItems: "center",
      borderTopWidth: 3,
      borderColor: 'lightgray',
    //   backgroundColor: 'mediumpurple',
    },
    textContainer: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "green",
    },
    heading1Text: {
      textAlign: "center",
      margin: 10,
      marginBottom: 0,
      // marginLeft: 15,
      fontSize: 17,
      color: '#47595e',
    },
    heading2Text: {
      // textAlign: "center",
      marginLeft: 10,
      // marginLeft: 15,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#47595e',
    },
    closeButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width - 30,
      height: 40,
      borderRadius: 50,
      backgroundColor: 'darkslateblue',
      marginBottom: 20,
      marginLeft: 15,
      marginRight: 15,
    },
    secondaryContainer: {
      // alignItems: 'center',
      // borderWidth: 1,
      borderColor: "brown",
    },
    rangeButtonsContainer: {
      alignSelf: 'center',
      // alignItems: 'center',
      // alignContent: 'center',
      // borderWidth: 1,
      borderColor: "blue",
      height: 35,
    },
    subgoalsContainer: {
      // flex: 1,
      // borderWidth: 1,
      borderColor: "green",
      // height: 500,
    },
    subgoalsHeadingContainer: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginRight: 10,
      // borderWidth: 1,
      borderColor: 'skyblue',
    },
    addSubgoalButton: {
      // flex: 1,
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: '#a9bec4',
      marginLeft: 5,
      // borderWidth: 1,
      borderColor: "orange",
    },
    addSubgoalButtonText: {
      alignSelf: 'center',
      color: '#ffffff',
      fontSize: 16,
    },
    subgoalContainer: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1,
      borderColor: "purple",
    },
    subgoalNumText: {
      // flex: 8,
      alignSelf: 'center',
      color: '#47595e',
      marginLeft: 10,
      fontSize: 14,
      fontWeight: 'bold',
    },
    subgoalInput: {
      flex: 1,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      // width: 250,
      // height: 30,
      margin: 7,
      marginRight: 10,
      paddingLeft: 7,
      paddingRight: 5,
      // paddingTop: 18,
      padding: 2,
      // borderWidth: 1,
      borderColor: "yellow",
    },
    removeSubgoalButton: {
      // alignSelf: 'center',
      width: 20,
      // borderWidth: 1,
      borderColor: 'magenta',
    },
    removeSubgoalButtonText: {
      alignSelf: 'flex-start',
    },
    
    domainDropdownButton: {
      alignSelf: 'center',
      // borderWidth: 1,
      borderColor: "pink",
    },
    saveGoalButtonText: {
        // color: '#ffffff',
        // color: '#a9bec4',
        color: '#f8f8f8',
    },
    rangeButtonOn: {
        // flex: 0.1,
        width: 70,
        height: 30,
        backgroundColor: 'white',
        // borderTopLeftRadius: 50,
        // borderBottomLeftRadius: 50,
        // borderTopRightRadius: 50,
        // borderBottomRightRadius: 50,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginRight: 3,
        marginTop: 1,
        alignItems: 'center',
      },
      rangeButtonOff: {
        // flex: 0.1,
        width: 70,
        height: 30,
        // backgroundColor: '#a9bec4',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#a9bec4',
        // borderColor: 'lightgray',
        marginRight: 3,
        marginTop: 1,
        alignItems: 'center',
      },
});

export default NewGoal;