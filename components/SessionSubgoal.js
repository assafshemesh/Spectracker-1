import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const SessionSubgoal = ({subgoal}) => {

    const [attempts, setAttempts] = useState(0);
    const [successes, setSuccesses] = useState(0);
    const [failures, setFailures] = useState(0);

    return (
        // <TouchableOpacity style={styles.subgoal}>
          <View style={styles.subgoalView}>
              <Text style={styles.subgoalText}>
                  {subgoal.serialNum}
                  <Text style={styles.subgoalDescription}>   {subgoal.description}</Text>
              </Text>
              <View style={styles.attemptButtonsWrapper}>
                    <TouchableOpacity onPress={() => setFailures((prev) => prev + 1)} style={[styles.attemptButton, {backgroundColor: 'mistyrose'}]}>
                        <FontAwesomeIcon style={styles.attemptButtonIcon} icon={ faTimes } />
                        <Text style={styles.attemptButtonText}>פיספוסים: {failures}</Text>
                        {/* <Text>out of {failures + successes} attempts</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSuccesses((prev) => prev + 1)} style={[styles.attemptButton, {backgroundColor: 'honeydew'}]}>
                        <FontAwesomeIcon style={styles.attemptButtonIcon} icon={ faCheck } />
                        {/* <Text style={styles.attemptIconWrap}><FontAwesomeIcon style={styles.attemptButtonIcon} icon={ faCheck } /></Text> */}
                        <Text style={styles.attemptButtonText}>הצלחות: {successes}</Text>

                    </TouchableOpacity>
              </View>
              <Text>סך הכל: {failures + successes} ניסיונות</Text>


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
        subgoalText: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'right',
          marginBottom: 10,
        },
        subgoalDescription: {
          fontSize: 18,
          fontWeight: 'normal',
        //   backgroundColor: 'lavender',
        },
        attemptButtonsWrapper: {
            flex: 1,
            flexDirection: 'row',
            // alignItems: 'stretch',
            alignItems: 'center',
            // alignContent: 'stretch',
        },
        attemptButton: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center',
            // borderColor: 'black',
            borderWidth: 0.5,
            fontSize:90,
            backgroundColor: 'red',
            height: 130,
            margin: 2,
        },
        attemptButtonIcon: {
            // flex: 8,
            color: 'grey',
            padding: 25,
            fontSize: 20,
            height: 20,
            // backgroundColor: 'magenta',
        },
        attemptButtonText: {
            // flex: 1,
            padding: 4,
            marginTop: 10,
            // backgroundColor: 'green',
        },
        attemptIconWrap: {
            flex: 3,
            padding: 20,
        },
      
    })

export default SessionSubgoal;