import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch  } from 'react-redux';
import Skill from '../components/Skill';
import DropdownListButton2 from './DropdownListButton2';
import RadioButtons from './RadioButtons';

const SkillsList = ({skills}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [typeSelected, setTypeSelected] = useState(0);

  useEffect(() => {
  }, [skills, typeSelected]);
  

  const domains = state.domains.allDomains;
  const skillsTypes = [{title: "כל תחום", id: 0},...domains];
  // const skillsTypes = [{title: "כל תחום", id: 0}, {title: "טקסטואלי", id: 1}, {title: "ווקאלי", id: 2}, {title: "קוגנטיבי", id: 3}, {title: "תחושתי", id: 4}, {title: "ויזואלי", id: 5}];
  const achievedButtons = [{title: "הכל", id: 0},{title: "שהושגו", id: 1},{title: "שלא הושגו", id: 2}];
  const [achievedStatus, setAchievedStatus] = useState(0);
  const onAchievedButtonsPress = (id) => setAchievedStatus(id);

    return (
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <View style={styles.achievedButtonsContainer}>
              <RadioButtons buttons={achievedButtons} defaultOn={0} styleButtonOn={styles.achievedRadioButtonOn} styleButtonOff={styles.achievedRadioButtonOff} onPress={onAchievedButtonsPress}/>
            </View>
            <DropdownListButton2 style={styles.domainsDropdownList} arrayListItems={skillsTypes} defaultValue={"כל תחום"} precedingText={""} onSelect={(item) => setTypeSelected(item.id)}/>
            {/* <DropdownListButton2 arrayListItems={domains} defaultValue={"כל תחום"} precedingText={""} onSelect={(item) => setTypeSelected(item.id)}/> */}
          </View>
              <FlatList 
                data={achievedStatus == 0 ? skills :  (achievedStatus == 1 ? skills.filter(skill => skill.wasAchieved == true) : skills.filter(skill => skill.wasAchieved == false))}
                renderItem={({item}) => (typeSelected == 0 || skillsTypes[typeSelected].title == item.type) ? <Skill skill={item} key={item.serialNum}/> : null }
                // renderItem={({item}) => (typeSelected == 0 || domains[typeSelected].title == item.type) ? <Skill skill={item} key={item.serialNum}/> : null }
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
    achievedButtonsContainer: {
      // flexDirection: 'row',
      // margin: 5,
      marginLeft: 5,
      // marginRight: 15,
      // justifyItems: 'center',
      // borderWidth: 1,
      borderColor: "pink",
      // width: 300,
    },
    achievedRadioButtonOff: {
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
      // borderColor: 'lightgray',
      marginRight: 3,
      marginTop: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    achievedRadioButtonOn: {
      // flex: 0.1,
      width: 80,
      height: 30,
      backgroundColor: 'white',
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      borderWidth: 1,
      borderColor: 'lightgray',
      marginRight: 3,
      marginTop: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    domainsDropdownList: {
      width: 100,
      // padding: 10,
      // borderWidth: 1,
      borderColor: 'yellow',
    },
    buttonsContainer: {
      // flex: 1,
      flexDirection: 'row',
      margin: 5,
      // justifyContent: 'center',
      // borderWidth: 1,
      borderColor: 'magenta',
    },
    
    filterButtonText: {
      // color: '#a9bec4',
      color: '#47595e',
    },
  })

export default SkillsList;
