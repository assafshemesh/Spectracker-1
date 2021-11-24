import React, {useState, useRef, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert, Dimensions, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  const skillsTypes = [{title: "טקסטואלי", id: 0}, {title: "ווקאלי", id: 1}, {title: "קוגנטיבי", id: 2}, {title: "תחושתי", id: 3}, {title: "ויזואלי", id: 4}];
  const [typeSelected, setTypeSelected] = useState(0);


  

  return (
        <View style={styles.container}>
            {/* <View style={styles.textContainer}>
                <Text style={styles.heading1Text}>מטרה חדשה</Text>
            </View> */}
            <View>
                <Text style={styles.heading1Text}>מטרה חדשה</Text>
                <DropdownListButton2 style={styles.rangeDropdownButton} arrayListItems={skillsTypes} defaultValue={""} placeHolder={""} precedingText={"תחום התפתחות"} onSelect={(item) => setTypeSelected(item.id)}/>
                {/* ({buttons, defaultOn, styleButtonOn, styleButtonOff, onPress}) */}
                <RadioButtons buttons={skillsTypes} styleButtonOn={styles.rangeButtonOn} styleButtonOff={styles.rangeButtonOff} onPress={(index) => console.log("The selected develpmental range is" + skillsTypes[index].title)} />
                <TextInput
                    style={styles.subgoalInput}
                    placeholder="    תת-מטרה "
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={() => onClose(false)}>
                <Text style={styles.saveGoalButtonText}>שמירה</Text>
            </TouchableOpacity>
                
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1.2,
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
      // marginLeft: 15,
      fontSize: 17,
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
    subgoalInput: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        // width: 250,
        // height: 30,
        margin: 16,
        padding: 0,
        // borderWidth: 1,
        borderColor: "yellow",
    },
    rangeDropdownButton: {
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