import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Skill from '../components/Skill';
import DropdownListButton2 from './DropdownListButton2';

const SkillsList = ({skills}) => {

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
            <TouchableOpacity style={styles.achievedFilterButton} onPress={() => setIsShowAll(true)}><Text>הכל</Text></TouchableOpacity>
            <TouchableOpacity style={styles.achievedFilterButton} onPress={() => setAchieved(true)}><Text>רק שהושגו</Text></TouchableOpacity>
            <TouchableOpacity style={styles.achievedFilterButton} onPress={() => setAchieved(false)}><Text>רק שלא הושגו</Text></TouchableOpacity>
            <DropdownListButton2 arrayListItems={skillsTypes} defaultValue={"כל תחום"} precedingText={""} onSelect={(item) => {
              setTypeSelected(item.id);
              console.log("------->----->---> Inside SkillsList: typeSelected = " + typeSelected);
            }}/>
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
    achievedFilterButton: {
      // flex: 0.1,
      width: 70,
      height: 40,
      backgroundColor: "green",
      borderWidth: 1,
      borderColor: "red",
      margin: 10,
    },
    buttonsContainer: {
      // flex: 1,
      flexDirection: 'row',
    },
  })

export default SkillsList;
