import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch  } from 'react-redux';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Subgoal from '../components/Subgoal';

// const ActivitiesTextInput = ({activities, onSubmitActivityName, onActivitySelected}) => {
// const ActivitiesTextInput = ({activities, onActivitySelected}) => {
// const ActivitiesTextInput = ({activities, selectedActivitiesP, onActivitySelected}) => {
// const ActivitiesTextInput = ({selectedActivitiesP, suggestedActivitiesP, onActivitySelected, onActivitiesSuggested}) => {
// const ActivitiesTextInput = ({activities, onActivitySelected}) => React.memo((props) => {
// const ActivitiesTextInput = () => React.memo(({activities, onActivitySelected}) => {
const ActivitiesTextInput = ({onActivitySelected}) => {

    console.log("----------------------------------------------------------------------------------")
    console.log("--------------------------ActivitiesTextInput rendered----------------------------")
    console.log("----------------------------------------------------------------------------------")


    const state = useSelector(state => state);
    const allActivities = state.activities.allActivities;
    // activities = activities || allActivities;
    // activities = allActivities;
    const activities = allActivities;
    console.log("----FROM: ActivitiesTextInput-------------*--------* ------- allActivities id's = " + allActivities.map(a => a.id));
    console.log("----FROM: ActivitiesTextInput-------------*--------* ------- activities id's = " + activities.map(a => a.id));
    console.log("----FROM: ActivitiesTextInput-------------*--------* ------- allActivities[0] = " + allActivities[0]);
    // console.log("-----------------*--------* ------- activities[0] = " + activities[0]);
    const [input, setInput] = useState("");
    // const [suggestedActivities, setSuggestedActivities] = useState(allActivities);
    // const [unselectedActivities, setUnselectedActivities] = useState(activities);
    // const [suggestedActivities, setSuggestedActivities] = useState(unselectedActivities);
    const [suggestedActivities, setSuggestedActivities] = useState(activities);
    const [selectedActivities, setSelectedActivities] = useState([]);
    // const [selectedActivities, setSelectedActivities] = useState(activities);
    // const [selectedActivity, setSelectedActivity] = useState("");

    // useEffect(() => {
    //   console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIII-Inside useEffect: unselectedActivities id's = " + unselectedActivities.map(a => a.id));
    //   console.log("IIIIIII - Inside useEffect: selectedActivity = " + selectedActivity);
    //   // setUnselectedActivities(prev => {prev.pop(); return(prev)});
    //   // setUnselectedActivities(prev => prev.filter(a => a.id != selectedActivity));
    //   console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIII-Inside useEffect- AFTER POPPING: unselectedActivities id's = " + unselectedActivities.map(a => a.id));

    // }, [unselectedActivities]);
    // // }, [selectedActivity]);

    // useEffect(() => {
    //   return () => {
    //   // onActivitySelected(selectedActivities[selectedActivities.length]);
    //   onActivitySelected(selectedActivities);
    //   }
    // // }, [selectedActivities]);
    // }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.activitiesContainerScroll} horizontal={true}>
                <View style={styles.activitiesContainer}>
                    {
                    selectedActivities.map((activity) => {
                    // selectedActivitiesP.map((activity) => {
                      console.log("----------From: ActivitiesTextInput  -> selectedActivities.map ---------------- activity.id = " + activity.id);
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
                    // setSuggestedActivities(unselectedActivities.filter(activity => activity.title.substring(0, text.length) == text || ((text.length >= 3) && activity.title.includes(text))));
                    setSuggestedActivities(activities.filter(a => !selectedActivities.includes(a)).filter(activity => activity.title.substring(0, text.length) == text || ((text.length >= 3) && activity.title.includes(text))));
                    // onActivitiesSuggested(activities.filter(a => !selectedActivitiesP.includes(a)).filter(activity => activity.title.substring(0, text.length) == text || ((text.length >= 3) && activity.title.includes(text))));
                    setInput(text);
                }}
                onSubmitEditing={() => {
                    console.log("-----------*+*_+*+*+>>>>> input = " + input);
                    // onSubmitActivityName(input);
                    }}
            />
            <ScrollView style={styles.activitiesContainerScroll} horizontal={true}>
                <View style={styles.activitiesContainer}>
                    {
                    suggestedActivities.map((activity) => {
                    // suggestedActivitiesP.map((activity) => {
                    // activities.filter(a => !selectedActivitiesP.includes(a)).map((activity) => {
                    // unselectedActivities.map((activity) => {
                    // suggestedActivities.filter(a => unselectedActivities.includes(a)).map((activity) => {
                        return (
                        // <View key={activity.id} style={{...styles.goalActivity, backgroundColor: activity.color}}>
                        // <TouchableOpacity key={activity.id} style={{...styles.activity, backgroundColor: activity.color}} onPress={() => onActivitySelected(activity)}>
                        <TouchableOpacity key={activity.id} style={{...styles.activity, backgroundColor: activity.color}} onPress={() => {
                          // setSelectedActivity(activity.id);
                          console.log("SICKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK  activity.id = " + activity.id);
                          // console.log("SICKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK unselectedActivities id's = " + unselectedActivities.map(a => a.id).filter(x => x != activity.id));
                          // console.log("SICKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK unselectedActivities id's = " + unselectedActivities.map(a => a.id));
                          console.log("SICKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK selectedActivities id's = " + selectedActivities.map(a => a.id));
                          // console.log("SICKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK activities id's = " + activities.map(a => a.id)).filter((x) => x > 3);
                          console.log("SICKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK activities id's minus the selected= " + activities.map(a => a.id).filter(a => a != activity.id));

                          setSuggestedActivities(prev => prev.filter(a => a.id != activity.id));
                          // setUnselectedActivities(prev => prev.filter(a => a.id != activity.id));

                          // setUnselectedActivities(activities.filter(a => a.id != activity.id));

                          // setUnselectedActivities(prev => {
                          //   console.log("IIIIIIIIIIIIIIIIIII - Inside setUnselectedActivities: prev's ids = " + prev.map(p => p.id));
                          //   console.log("IIIIIIIIIIIIIIIIIII - Inside setUnselectedActivities: prev's ids using filter = " + prev.map(p => p.id).filter(p => p != activity.id));
                          //   console.log("IIIIIIIIIIIIIIIIIII - Inside setUnselectedActivities: howdy.  activity.id = " + activity.id);
                          //   return(prev.filter(a => a.id != activity.id));});
                          // setUnselectedActivities(activities.filter(unselectedActivity => unselectedActivity.id != activity.id));
                          // onActivitySelected(activity);
                          setSelectedActivities(prev => [...prev, activity]);
                          // onActivitySelected(activity);
                          }
                        }>
                          <Text style={styles.activityText}>{activity.title}</Text>
                        {/* </View>)  //is a key really needed here? */}
                        </TouchableOpacity>
                        )})
                    } 
                </View>
            </ScrollView>
        </View>

    );
};
// });

const styles = StyleSheet.create({
    container: {
      marginBottom: 5,
      // borderWidth: 2,
      borderColor: 'powderblue',
    },
    subgoalInput: {
        // flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: 150,
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
    activityText: {
      // fontSize: 12,
    },
})

export default ActivitiesTextInput;