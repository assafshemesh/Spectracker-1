import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const SessionSubgoal = ({subgoal}) => {

    const [attempts, setAttempts] = useState(0);
    const [successes, setSuccesses] = useState(0);
    return (
        // <TouchableOpacity style={styles.subgoal}>
          <View style={styles.subgoalView}>
              <Text style={styles.subgoalTitle}>
                  {subgoal.serialNum}
                  <Text style={styles.subgoalDescription}>   {subgoal.description}</Text>
              </Text>
              <View style={styles.attemptButtonsWrapper}>
                    <TouchableOpacity style={styles.attemptButton}>
                        {/* <FontAwesomeIcon style={styles.dropdownButtonIcon} icon={ faCheck } /> */}
                        <FontAwesomeIcon style={styles.attemptButtonIcon} icon={ faTimes } />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.attemptButton}>
                        <FontAwesomeIcon style={styles.dropdownButtonIcon} icon={ faCheck } />
                        {/* <FontAwesomeIcon style={styles.dropdownButtonIcon} icon={ faTimes } /> */}
                    </TouchableOpacity>
              </View>
              
              
          </View>
        // </TouchableOpacity>
      );
    };
    
    const styles = StyleSheet.create({
        subgoalView: {
            padding: 5,
            backgroundColor: '#f8f8f8',
            justifyContent: 'space-between',

            // borderBottomWidth: 1,
            // borderColor: '#eee',
        },
        // subgoalView: {
        //     // flexDirection: 'row',
        //     justifyContent: 'space-between',
        //     // alignItems: 'center',
        // },
        subgoalTitle: {
          fontSize: 14,
          fontWeight: 'bold',
          textAlign: 'right',
        },
        subgoalDescription: {
          fontSize: 14,
          fontWeight: 'normal',
        },
        attemptButtonsWrapper: {
            flex: 1,
            flexDirection: 'row',
            // alignItems: 'stretch',
            alignItems: 'center',
            alignContent: 'stretch',
        },
        attemptButton: {
            flex: 1,
            borderColor: 'black',
            borderWidth: 1,
            fontSize: 30,
            backgroundColor: 'red',
            height: 70,
        },
        attemptButtonIcon: {
            fontSize: 40,
        },
      
    })

export default SessionSubgoal;