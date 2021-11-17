import React, {useState, useRef, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert, Dimensions } from 'react-native';
import TherapistHeader from '../components/TherapistHeader';
import UpperMenu from '../components/UpperMenu';
import GoalsList from '../components/GoalsList';
import SkillsList from '../components/SkillsList';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { SessionProvider } from '../contexts/SessionState';
// import { connect } from 'react-redux';
import { useSelector, useDispatch  } from 'react-redux';
/* action creators */
import { updateGoal } from '../store/actions/goals/goals';

const TreatmentPlanScreen = ({ route, navigation }) => {

  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("--------------------------TreatmentPlanScreen rendered----------------------------")
  console.log("----------------------------------------------------------------------------------")
  console.log("----------------------------------------------------------------------------------")

  // const state = useSelector(state => state.goals);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [currentItem, setCurrentItem] = useState(0);
  
  const goals = state.goals.allGoals;
  const skills = state.skills.allSkills;
  const treatmentArray = [{ data: goals, name: "goals", id: 1}, { data: skills, name: "skills", id: 2}];
  
  const lastPatient = "ירדן";
  console.log("TreatmentPlanScreen: goals = " + goals);
  console.log("TreatmentPlanScreen: skills = " + skills); 

  const flatListRef = useRef(null);

  const goalsSection = () => {
    console.log("TreatmentPlanScreen:   goals = " + goals);

    if (goals?.length) {
      return (
        <View style={styles.goalsSectionContainer}>
          <Text style={styles.heading2Text}>מטרות הטיפול </Text>
          <View style={styles.goalsMenuContainer}>
            <View style={styles.toolCreateGoalContainer}>
              <Text style={styles.toolCreateGoalIcon}>+</Text>  
            </View>
            
          </View>
          {/* <Text style={styles.explainsText}> (כפי שנקבעו בהתאם ל<Text style={styles.linkText}>מיומנויות של ירדן </Text>)</Text> */}
          <GoalsList goals={goals} isSession={false}/>
        </View>
      );
    } else {
      return (
        <View style={styles.goalsSectionContainer}>
            <Text style={styles.explainsText}>לא קיימות מטרות טיפול עבור {lastPatient}</Text>
            <View style={styles.createGoalContainer}>
              <Text style={styles.createGoalIcon}>+</Text>  
            </View>
            <Text style={styles.linkText}>צרי מטרה חדשה</Text>
        </View>
      );
    }
  };

  const showSkills = () => {

  }

  // const myFunc = ({ viewableItems, changed }) => {
  //   setCurrentPage(viewableItems[0].index);
  //   console.log("Current page is:" + viewableItems[0].index);
  //   console.log("Visible items are", viewableItems);
  //   console.log("Changed in this iteration", changed);
  // }

  const onViewRef = useRef((viewableItems) => {
    // setCurrentPage(viewableItems[0].index);
    setCurrentItem(viewableItems.viewableItems[0]?.index);
    // setCurrentItem(prev => !prev);
    // console.log("Current page is:" + viewableItems[0].index);
    console.log("Visible items are", viewableItems);
    console.log("-*-*-*-*-*-*-*-*-----Current page is (viewableItems.viewableItems[0]?.index):" + viewableItems.viewableItems[0]?.index);
    console.log("-*-*-*-*-*-*-*-*-----Current page is:" + currentItem);
  });

  // setViewablePage[viewables[0].index];



  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
        <View style={styles.container}>
            <UpperMenu />
            <View style={styles.textContainer}>
              <Text style={styles.heading1Text}>תוכנית הטיפול של <Text style={styles.nameText}>{lastPatient}</Text></Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={(currentItem == 0) ? styles.pageOnHeading : styles.pageOffHeading} onPress={() => flatListRef?.current?.scrollToIndex({ index: 0 })}>
                <Text style={(currentItem == 0) ? styles.linkTextOn : styles.linkTextOff}>מטרות טיפול</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={(currentItem == 1) ? styles.pageOnHeading : styles.pageOffHeading} onPress={() => flatListRef?.current?.scrollToIndex({ index: 1 })}>
                <Text style={(currentItem == 1) ? styles.linkTextOn : styles.linkTextOff}>מיומנויות</Text>  
              </TouchableOpacity>
            </View>
            <View style={styles.flatlistContainer}>
            {/* <View style={[styles.flatlistContainer, , {transform: [{ translateX: 80 }]}]}> */}
              <FlatList
                ref={flatListRef}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={treatmentArray}
                renderItem={({item}) => (
                  item.name == "goals" ? 
                  <View style={styles.flatListItem}><GoalsList goals={item.data} isSession={false}/></View> :
                  <View style={styles.flatListItem}><SkillsList skills={item.data} /></View>
                )}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
              />
            </View>
            <View style={styles.newGoalContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.heading1Text}>מטרה חדשה</Text>
              </View>

            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 4,
      // flexDirection: "column-reverse",
      // justifyContent: 'flex-end',
      justifyContent: 'space-between',
      // alignItems: "center",
      // borderWidth: 3,
      borderColor: "purple",
    },
    textContainer: {
      marginBottom: 10,
    },
    heading1Text: {
      textAlign: "center",
      margin: 10,
      // marginLeft: 15,
      fontSize: 18,
      color: '#47595e',
    },
    pageOnHeading: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: '#47595e',
      marginLeft: 10, //"left" is actually "right"because of the RTL direction configured somewhere-- which is good but I need to check where I set it.
      marginRight: 15,
      borderBottomWidth: 4,
      borderBottomColor: '#47595e',
    },
    pageOffHeading: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      color: '#7e979e',
      marginLeft: 10, //"left" is actually "right"because of the RTL direction configured somewhere-- which is good but I need to check where I set it.
      marginRight: 15,
    },
    nameText: {
      fontSize: 18,
      fontWeight: "bold",
      color: '#47595e',
    },
    explainsText: {
      fontSize: 14,
      // fontWeight: "bold",
      textAlign: "center",
      color: '#47595e',
      marginLeft: 12,
    },
    linkTextOn: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
      color: '#47595e',
      textAlign: "center",
    },
    linkTextOff: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
      color: '#a9bec4',
      textAlign: "center",
    },
    goalsSectionContainer: {
      flex: 1,
      alignContent: "center",
      // borderWidth: 1,
      borderColor: "green",
    },
    createGoalContainer: {
      width: 80,
      height: 80,
      borderColor: '#47595e',
      borderWidth: 1,
      borderRadius: 40,
      // justifyContent: "center",
      // alignSelf: "center",
      marginTop: 60,
      margin: 10,

    },
    createGoalIcon: {
      fontSize: 40,
      color: '#47595e',
      // fontWeight: "bold",
      // textAlign: "center",
    },
    
    toolCreateGoalContainer: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderColor: '#47595e',
      borderWidth: 1,
      // justifyContent: "center",
      // alignSelf: "center",
      // marginTop: 60,
      margin: 5,
      marginLeft: 12,
    },
    toolCreateGoalIcon: {
      fontSize: 22,
      color: '#47595e',
      // fontWeight: "bold",
      textAlign: "center",
    },
    goalsMenuContainer: {
      // flex: 0.2,
      // flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-between",
      // borderWidth: 1,
      borderColor: "orange",
    },
    skillsButton: {
      // flex: 1,
      alignSelf: "flex-start",
      // fontSize: 22,
      color: '#47595e',
      // fontWeight: "bold",
      textAlign: "center",
      margin: 8,
      // borderWidth: 1,
      borderColor: "pink",
    },
    flatlistContainer: {
      flex: 1,
      // width: Dimensions.get('window').width * 2,
      // justifyContent: 'flex-start',
      // justifyContent: 'space-between',
      // padding: 13,
      // borderWidth: 3,
      borderColor: 'red',
      ackgroundColor: "green",
    },
    flatListItem: {
      // flex: 1,
      width: Dimensions.get('window').width,
      // alignItems: 'stretch',
    },
    buttonsContainer: {
      flexDirection: 'row',

    },
    newGoalContainer: {
      height: Dimensions.get('window').height * 0.55,
      width: Dimensions.get('window').width,
      borderWidth: 1,
      borderColor: "pink",
    },
  });

  const mapStateToProps = (state) => {
    const { rgoals } = state
    return { rgoals }
  };

export default TreatmentPlanScreen;
// export default connect(mapStateToProps)(TreatmentPlanScreen);