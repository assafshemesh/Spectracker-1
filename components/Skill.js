import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { updateSkill } from '../store/actions/skills/skills';


const Skill = ({skill}) => {
  const [isSelected, setSelection] = useState(skill.wasAchieved);
  console.log("Inside skill: skill.wasAchieved = " + skill.wasAchieved);

  const state = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const updateSkillStatus = (skill) => {
    console.log("--------------------->>>>>> Inside Skill: skill before = " + skill.wasAchieved)
    skill.wasAchieved = !skill.wasAchieved;
    dispatch(updateSkill(skill));
    console.log("--------------------->>>>>> Inside Skill: skill after = " + skill.wasAchieved)
  }

  // useEffect(() => {
  //   // setSelection(!isSelected);
  // }, [skill.wasAchieved])

  return (
    // <TouchableOpacity style={!skill.wasAchieved ? styles.container : {...styles.container, backgroundColor: "#ebf2eb"}}>
    // <TouchableOpacity style={!skill.wasAchieved ? styles.container : {...styles.container, backgroundColor: "#a9bec4"}}>
    <TouchableOpacity style={!skill.wasAchieved ? styles.container : {...styles.container, backgroundColor: "#f8f8f8"}}>
      {/* <View style={styles.skillView}> */}
          <Text style={styles.skillTitle}>{skill.type}{skill.serialNum}</Text>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={25}
              // fillColor="green"
              // fillColor="darkslateblue"
              fillColor="#47595e"
              unfillColor="#FFFFFF"
              text="הושגה:"
              disableText={true}
              // iconStyle={{ borderColor: "green" }}
              // iconStyle={{ borderColor: "darkslateblue" }}
              iconStyle={{ borderColor: "#47595e" }}
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              isChecked={skill.wasAchieved}
              onPress={() => {
                setSelection(!isSelected);
                updateSkillStatus(skill);
              }}
            />
            {/* <Text style={styles.skillTitle}> הושגה: </Text> */}
          </View>
          <Text style={styles.skillDescription}>{skill.description}</Text>
          
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 8,
        paddingBottom: 10,
        // backgroundColor: '#f8f8f8',
        backgroundColor: '#ffffff',
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
      // flexWrap: 'wrap',
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
        fontSize: 12,
        height: 20,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    }
})

export default Skill;