import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert, Modal, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import {uuid} from 'uuidv4';
import ActivityButton from './ActivityButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { startClock } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ActivityButtonCarousel = ({recommendedActivities, restOfActivities, updateGoals}) => {

  console.log("||       ------ ActivityButtonCarousel rendered ------");

  const allSessionActivities = [...recommendedActivities, ...restOfActivities];
//   const allSessionActivities = [...restOfActivities, ...recommendedActivities];
  const [buttonsState, setButtonsState] = useState(allSessionActivities.map((activity) => false));
  // const [dropdownValue, setDropdownValue] = useState("עוד פעילויות");
  // const [modalVisible, setModalVisible] = useState(false);
  const [isActivitySelected, setIsActivitySelected] =useState(false);

  const updateStyle = (id) => {
      setButtonsState(prevButtonsState => {
        return prevButtonsState.map((buttonState, index) => (allSessionActivities[index].id == id) );
      });
      setIsActivitySelected(true);
  };

  return (
    <View style={styles.container}>
      {/* Creating the buttons for the recommended activities: */}
        <FlatList 
          data={allSessionActivities}
          horizontal={true}
          // renderItem={({item, index}) =><ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : styles.buttonOff} updateStyle={updateStyle} updateGoals={updateGoals}/>}
          renderItem={({item, index}) =><ActivityButton activity={item} buttonStyle={buttonsState[index] ? styles.buttonOn : (isActivitySelected ? styles.buttonOffSmall : styles.buttonOff)} updateStyle={updateStyle} updateGoals={updateGoals}/>}
          // renderItem={({item, index}) =><ActivityButton activity={item} buttonOnStyle={styles.buttonOn} buttonOffStyle={isActivitySelected ? styles.buttonOffSmall : styles.buttonOff} isOn={buttonState[index]} updateStyle={updateStyle} updateGoals={updateGoals}/>}
          showsHorizontalScrollIndicator={false}
          style={styles.activitiesList}
        />
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        flex: 1,  // relations 1:8 with the sibling goalList
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        // flexDirection: 'row-reverse',
        // paddingRight: 11,
        // paddingLeft: 11,
        // paddingTop: 30,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // backgroundColor: 'tan',
        // backgroundColor: 'rgba(255,255,255,0.755)',
        borderColor: 'green',
        // borderWidth: 1,
        // marginBottom: 40,
    },
    buttonOffSmall: {
        // flex: 1,
        // backgroundColor: '#cdcbb1',
        // backgroundColor: 'darkslateblue',
        backgroundColor: '#ccccca',
        // marginRight: 12,
        marginLeft: 5,
        padding: 3,
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 6,
        borderRadius: Dimensions.get('window').width / 32,
        // borderWidth: 5,
        // borderColor: 'lime',
        borderColor: 'pink',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    buttonOff: {
        // flex: 1,
        // backgroundColor: '#cdcbb1',
        backgroundColor: '#ccccca',
        // backgroundColor: 'darkslateblue',
        // marginRight: 12,
        marginLeft: 12,
        padding: 5,
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        borderRadius: Dimensions.get('window').width / 32,
        // borderWidth: 5,
        borderColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOn: {
        // flex: 1,
        // backgroundColor: 'pink',
        // backgroundColor: '#cdcbb1',
        // backgroundColor: 'darkslateblue',
        backgroundColor: '#ccccca',
        // marginRight: 12,
        marginLeft: 5,
        padding: 3,
        // marginBottom: 3,
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 6,
        borderRadius: Dimensions.get('window').width / 32,
        borderWidth: 3,
        // borderColor: 'lime',
        borderColor: 'pink',
        alignItems: 'center',
    },
    activitiesList: {
    //   flex: 1,
      
    },
});

export default ActivityButtonCarousel;