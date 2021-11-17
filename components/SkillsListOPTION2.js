import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Skill from '../components/Skill';
import DropdownListButton2 from './DropdownListButton2';
import RadioButtons from './RadioButtons';

const SkillsListOPTION2 = ({skills}) => {

  const [isAchieved, setIsAchieved] = useState(false);
  const [isShowAll, setIsShowAll] = useState(true);
  const [typeSelected, setTypeSelected] = useState(0);

  useEffect(() => {
  }, [skills, isAchieved, typeSelected]);

  const setAchieved = (status) => {
    setIsAchieved(status);
    setIsShowAll(false);
    console.log(">.>.>.>.>.>.>.>.>>>> Inside SkillsList: isAchieved = " + isAchieved);
  };
  const skillsTypes = [{title: "כל תחום", id: 0}, {title: "טקסטואלי", id: 1}, {title: "ווקאלי", id: 2}, {title: "קוגנטיבי", id: 3}, {title: "תחושתי", id: 4}, {title: "ויזואלי", id: 5}];
  
    return (
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <View style={styles.achievedButtonsContainer}>
              <TouchableOpacity style={styles.achievedRadioButtonOn} onPress={() => setIsShowAll(true)}><Text style={styles.filterButtonText}>הכל</Text></TouchableOpacity>
              <TouchableOpacity style={styles.achievedRadioButtonOn} onPress={() => setAchieved(true)}><Text style={styles.filterButtonText}>שהושגו</Text></TouchableOpacity>
              <TouchableOpacity style={styles.achievedRadioButtonOn} onPress={() => setAchieved(false)}><Text style={styles.filterButtonText}>שלא הושגו</Text></TouchableOpacity>
            </View>
            <DropdownListButton2 arrayListItems={skillsTypes} defaultValue={"כל תחום"} precedingText={""} onSelect={(item) => setTypeSelected(item.id)}/>
          </View>
              <FlatList 
                data={isShowAll ? skills :  (isAchieved ? skills.filter(skill => skill.wasAchieved == true) : skills.filter(skill => skill.wasAchieved == false))}
                renderItem={({item}) => (typeSelected == 0 || skillsTypes[typeSelected].title == item.type) ? <Skill skill={item} key={item.serialNum}/> : null }
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
    achievedRadioButtonOn: {
      // flex: 0.1,
      width: 80,
      height: 30,
      // backgroundColor: '#a9bec4',
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      borderWidth: 1,
      borderColor: '#a9bec4',
      marginRight: 3,
      marginTop: 1,
      alignItems: 'center',
    },
    buttonsContainer: {
      // flex: 1,
      flexDirection: 'row',
      margin: 5,
    },
    achievedButtonsContainer: {
      flexDirection: 'row',
      // margin: 5,
      marginLeft: 5,
      marginRight: 15,
    },
    filterButtonText: {
      // color: '#a9bec4',
      color: '#47595e',
    },
  })

export default SkillsListOPTION2;
