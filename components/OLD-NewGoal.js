import React, {useState, useRef, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert, Dimensions, TextInput, ScrollView, Button, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useSelector, useDispatch  } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import DropdownListButton2 from './DropdownListButton2';
import RadioButtons from './RadioButtons';
import ActivitiesTextInput from './ActivitiesTextInput';
/* action creators */
import { updateGoal } from '../store/actions/goals/goals';
import { withTheme } from 'react-native-elements';

const NewGoal = ({onClose, onSizing}) => {

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
  const [subgoalInput, setSubgoalInput] = useState("");
  const [activityNameInput, setActivityNameInput] = useState("");
  const [activitiesSelected, setActivitiesSelected] = useState([]);
  const [activitiesSuggested, setActivitiesSuggested] = useState(activities);
  // const [activitiesUnselected, setActivitiesUnselected] = useState(activities);
  // const [activityInput, setActivityInput] = useState("");
  const [isExpended, setIsExpended] = useState(true);
  
  // useEffect(() => {

  // }, [activitiesSelected]);

  const showDeleteButton = (id) => {
    if (newSubgoals.length != 1) {
      return (
        <TouchableOpacity style={styles.removeSubgoalButton} onPress={() => onDeleteSubgoal(id)}>
            <Text style={styles.removeSubgoalButtonText}>x</Text>
        </TouchableOpacity>
      )
    }
  }
  // const onSizing = () => {
    

  // }
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

  const onActivitySelected = (activity) => {
    setActivitiesSelected(prev => [...prev, activity]);
  }

  // const onActivityPressed = () => {

  // }

  const flatlistHeader = () => {
    return (
      <View>
        {/* TBD - why doesn't this dropdown list work properly here (but it does work fine when it's inserted in the main return function of NewGoal)? : */}
        {/* <DropdownListButton2 style={styles.domainDropdownButton} arrayListItems={domains} defaultValue={""} placeHolder={""} precedingText={"תחום התפתחות"} onSelect={(item) => setTypeSelected(item.id)}/> */}
        <View style={styles.subgoalsHeadingContainer}>
            <Text style={styles.heading2Text}>תתי מטרות</Text>
        </View>
      </View>
    )
  }

  const flatlistFooter = () => {
    return (
      <View  style={styles.secondaryContainer}>
          <TouchableOpacity style={styles.addSubgoalButton} onPress={onAddSubgoal}>
                  <Text style={styles.addSubgoalButtonText}>+</Text>
          </TouchableOpacity>
          <View style={styles.subgoalsHeadingContainer}>
              <Text style={styles.heading2Text}>פעילויות</Text>
          </View>
          <ScrollView style={styles.activitiesContainerScroll} horizontal={true}>
                <View style={styles.activitiesContainer}>
                    {
                    activitiesSelected.map((activity) => {
                      // console.log("----------From: NewGoal  -> activitiesSelected.map ---------------- activity.id = " + activity.id);
                        return (
                        <TouchableOpacity key={activity.id} style={{...styles.activity, backgroundColor: activity.color}} onPress={() => {console.log("selected activity pressed")}}>
                          <Text style={styles.activityText}>{activity.title}</Text>
                        </TouchableOpacity>
                        )})
                    } 
                </View>
          </ScrollView>
          <TextInput
                style={styles.subgoalInput}
                placeholder="      שם פעילות "
                // multiline={true}
                onChangeText={(text) => {
                    // setActivitiesSuggested(activities.filter(a => !activitiesSelected.includes(a)).filter(activity => activity.title.substring(0, text.length) == text || ((text.length >= 3) && activity.title.includes(text))));
                    setActivityNameInput(text);
                }}
                onSubmitEditing={() => {
                    console.log("-----------*+*_+*+*+>>>>> activityNameInput = " + activityNameInput);
                }}
          />
          <ScrollView style={styles.activitiesContainerScroll} horizontal={true}>
                <View style={styles.activitiesContainer}>
                    {
                    activitiesSuggested.map((activity) => {
                        return (
                          <TouchableOpacity key={activity.id} style={{...styles.activity, backgroundColor: activity.color}} onPress={() => {
                            console.log("----------From: NewGoal ----  activity.id = " + activity.id);
                            console.log("----------From: NewGoal ----  selectedActivities id's = " + activitiesSelected.map(a => a.id));
                            console.log("----------From: NewGoal ---- activities id's minus the selected= " + activities.map(a => a.id).filter(a => a != activity.id));
                            setActivitiesSuggested(prev => prev.filter(a => a.id != activity.id));
                            setActivitiesSelected(prev => [...prev, activity]);
                            }
                          }>
                            <Text style={styles.activityText}>{activity.title}</Text>
                          </TouchableOpacity>
                        )})
                    } 
                </View>
          </ScrollView>
          {/* <ActivitiesTextInput onSubmitActivityName={(input) => setActivityInput(input)} onActivitySelected={(activity) => setActivitiesSelected(prev => [...prev, activity])}/> */}
          {/* <ActivitiesTextInput onSubmitActivityName={(input) => setActivityInput(input)} onActivitySelected={(activity) => { */}
          {/* <ActivitiesTextInput onActivitySelected={(activity) => {
            setActivitiesSelected(prev => [...prev, activity]);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> activitiesSelected id's = " + activitiesSelected.map(a => a.id));
            // setActivitiesUnselected(prev => prev.filter(x => x.id != activity.id));
          }}/> */}
          {/* <ActivitiesTextInput onActivitySelected={(activity) => {
            setActivitiesSelected(prev => [...prev, activity]);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>> activitiesSelected id's = " + activitiesSelected.map(a => a.id));
            // setActivitiesUnselected(prev => prev.filter(x => x.id != activity.id));
          }} onActivitiesSuggested={(suggested) => setActivitiesSuggested(suggested)} selectedActivitiesP={activitiesSelected} suggestedActivitiesP={activitiesSuggested}/> */}
          {/* <ActivitiesTextInput onActivitySelected={onActivitySelected}/> */}
          {/* <ActivitiesTextInput onActivitySelected={(activities) => {
            // console.log(">>>>>>>>>>>>>>>>>> from NewGoal -> onActivitySelected : activities id's = " + activities?.map(a => a.id));
            setActivitiesSelected(activities);
            // console.log("--------- FROM: NewGoal --------- activitiesSelected id's = " + activitiesSelected.map(a => a.id));
            // setActivitiesUnselected(prev => prev.filter(x => x.id != activity.id));
          }}/> */}
          <TouchableOpacity style={styles.addSubgoalButton} onPress={()=> console.log("addActivity button was pressed")}>
              <Text style={styles.addSubgoalButtonText}>+</Text>
          </TouchableOpacity>
          {/* <View style={styles.activitiesContainer}> 
              {
              activitiesUnselected.map((activity) => {
                  return (
                  <TouchableOpacity key={activity.id} style={{...styles.activity, backgroundColor: activity.color}} onPress={(id) => onActivityPressed(id)}>
                      <Text style={styles.activityText}>{activity.title}</Text>
                  </TouchableOpacity>
                  )})
              } 
          </View> */}
          <View style={styles.subgoalsHeadingContainer}>
              <Text style={styles.heading2Text}>מיומנויות קשורות</Text>
          </View>
      </View>
  )}

  return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.sizingButton} onPress={() => {onSizing(); setIsExpended(!isExpended);}}>
                {/* <FontAwesomeIcon style={styles.sizingButtonText} icon={isExpended ? faAngleDown : faAngleUp } /> */}
                <FontAwesomeIcon style={styles.sizingButtonIcon} icon={isExpended ? faAngleDown : faAngleUp } />
                {/* <FontAwesomeIcon style={isExpended ? styles.sizingButtonText : {...styles.sizingButtonText, flex: 0.4}} icon={isExpended ? faAngleDown : faAngleUp } /> */}
            </TouchableOpacity>
            <Text style={styles.heading1Text}>מטרה חדשה: מטרה מס' {goalsNum + 1}</Text>
            <View  style={styles.secondaryContainer}>
                <DropdownListButton2 style={styles.domainDropdownButton} arrayListItems={domains} defaultValue={""} placeHolder={""} precedingText={"תחום התפתחות"} onSelect={(item) => setTypeSelected(item.id)}/>
                {/* <View  style={styles.secondaryContainer}> */}
                  <View style={styles.subgoalsHeadingContainer}>
                      <Text style={styles.heading2Text}>תתי מטרות</Text>
                  </View>
                {/* </View> */}
                <View style={styles.subgoalsContainer}>
                    <FlatList
                      data={newSubgoals}
                      extraData={dataFlicker}
                      keyExtractor={(item) => item.id}
                      // ListHeaderComponent={flatlistHeader}
                      renderItem={({item, index}) => { return (
                          <View style={styles.subgoalContainer}>
                              <Text style={styles.subgoalNumText}>.{index + 1}</Text>
                              <TextInput
                                  style={styles.subgoalInput}
                                  placeholder="      תת-מטרה "
                                  // multiline={true}  // TBD
                                  onChangeText={(text) => setSubgoalInput(text)}
                                  onSubmitEditing={() => {
                                    item.description = subgoalInput;
                                    {console.log("-----------*+*_+*+*+>>>>> item.description = " + item.description)}
                                    }}
                              />
                              {showDeleteButton(item.id)}
                          </View>
                      )}}
                      // ListFooterComponent={flatlistFooter}
                    />
                </View>
                <TouchableOpacity style={styles.addSubgoalButton} onPress={onAddSubgoal}>
                  <Text style={styles.addSubgoalButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View  style={styles.secondaryContainer}>
              <ActivitiesTextInput onActivitySelected={onActivitySelected} />
          
              {/* <View style={styles.subgoalsHeadingContainer}>
                  <Text style={styles.heading2Text}>פעילויות</Text>
              </View>
              <ScrollView style={styles.activitiesContainerScroll} horizontal={true}>
                    <View style={styles.activitiesContainer}>
                        {
                        activitiesSelected.map((activity) => {
                          // console.log("----------From: NewGoal  -> activitiesSelected.map ---------------- activity.id = " + activity.id);
                            return (
                            <TouchableOpacity key={activity.id} style={{...styles.activity, backgroundColor: activity.color}} onPress={() => {console.log("selected activity pressed")}}>
                              <Text style={styles.activityText}>{activity.title}</Text>
                            </TouchableOpacity>
                            )})
                        } 
                    </View>
              </ScrollView>
              <TextInput
                    style={styles.subgoalInput}
                    placeholder="      שם פעילות "
                    // multiline={true}
                    onChangeText={(text) => {
                        setActivitiesSuggested(activities.filter(a => !activitiesSelected.includes(a)).filter(activity => activity.title.substring(0, text.length) == text || ((text.length >= 3) && activity.title.includes(text))));
                        setActivityNameInput(text);
                    }}
                    onSubmitEditing={() => {
                        console.log("-----------*+*_+*+*+>>>>> activityNameInput = " + activityNameInput);
                    }}
              />
              <ScrollView style={styles.activitiesContainerScroll} horizontal={true}>
                    <View style={styles.activitiesContainer}>
                        {
                        activitiesSuggested.map((activity) => {
                            return (
                              <TouchableOpacity key={activity.id} style={{...styles.activity, backgroundColor: activity.color}} onPress={() => {
                                console.log("----------From: NewGoal ----  activity.id = " + activity.id);
                                console.log("----------From: NewGoal ----  selectedActivities id's = " + activitiesSelected.map(a => a.id));
                                console.log("----------From: NewGoal ---- activities id's minus the selected= " + activities.map(a => a.id).filter(a => a != activity.id));
                                setActivitiesSuggested(prev => prev.filter(a => a.id != activity.id));
                                setActivitiesSelected(prev => [...prev, activity]);
                                }
                              }>
                                <Text style={styles.activityText}>{activity.title}</Text>
                              </TouchableOpacity>
                            )})
                        } 
                    </View>
              </ScrollView>
              <TouchableOpacity style={styles.addSubgoalButton} onPress={()=> console.log("addActivity button was pressed")}>
                  <Text style={styles.addSubgoalButtonText}>+</Text>
              </TouchableOpacity>
              <View style={styles.subgoalsHeadingContainer}>
                  <Text style={styles.heading2Text}>מיומנויות קשורות</Text>
              </View> */}
            </View>
                
                
  

            <TouchableOpacity style={styles.closeButton} onPress={() => {
              onClose(false);
              setNewSubgoals([{ id: 1, description: ""}]); // -> this is for getting the subgoal list back to be empty with just one field for start, after closing the new goal.
            }}>
                <Text style={styles.saveGoalButtonText}>שמירה</Text>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1.2,
      flex: 1.2,
      // flex: 238,
      // height: Dimensions.get('window').height - 30,
      // flexDirection: "column-reverse",
      // justifyContent: 'flex-end',
      justifyContent: 'space-between',
      // alignItems: "center",
      borderTopWidth: 3,
      // borderColor: 'lightgray',
      borderColor: 'darkslateblue',
    //   backgroundColor: 'mediumpurple',
    },
    sizingButton: {
      // position: 'absolute',
      // top: 20,
      width: 30,
      marginTop: 5,
      marginLeft: 25,
      paddingRight: 70,
      // marginBottom: 0,
      // borderWidth: 1,
      borderColor: "brown",
    },
    sizingButtonIcon: {
      color: 'darkslateblue',
    },
    secondaryContainer: {
      flex: 8,
      // alignItems: 'center',
      borderWidth: 1,
      borderColor: "brown",
    },
    
    textContainer: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "green",
    },
    heading1Text: {
      textAlign: "center",
      // margin: 10,
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
    
    rangeButtonsContainer: {
      alignSelf: 'center',
      // alignItems: 'center',
      // alignContent: 'center',
      // borderWidth: 1,
      borderColor: "blue",
      height: 35,
    },
    subgoalsContainer: {
      flex: 1,
      borderWidth: 5,
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
      alignSelf: 'flex-end',
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: '#a9bec4',
      marginRight: 12,
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
      width: 150,
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
    activitiesContainerScroll: {
        // marginLeft: 10,
    },
    activitiesContainer: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    //   height: 70,
      width: 700,
      marginTop: 1,
    //   marginLeft: 10,
    //   borderWidth: 1,
      borderColor: "blue",
    },
    activity: {
      // flex: 1,
      flexWrap: 'wrap',
      borderRadius: 3,
      margin: 3,
      padding: 1,
      paddingLeft: 4,
      paddingRight: 4,
      fontSize: 12,
      // width: 100,
      // lineHeight: 15,
      height: 20,
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