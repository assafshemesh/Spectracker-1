import React, {useState}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/native';



const StartSessionButton = ({ navigation, isActive, onPress, buttonsText }) => {

    console.log("|    ------ StartSessionButton rendered ------");

    return (
        <View style={styles.buttonContainer}>
            {/* <TouchableOpacity style={styles.button} disabled={!isActive} onPress={() => navigation.navigate('Session')}> */}
            <TouchableOpacity style={styles.button} disabled={!isActive} onPress={onPress}>
                {/* <Text style={styles.buttonText}>Start Session</Text> */}
                <Text style={styles.buttonText}>{buttonsText}</Text>
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        // flex: 1,
        // minHeight: 30,
        // maxHeight: 60,
        justifyContent: 'center',
        // marginTop: 60,
        // backgroundColor: 'wheat',
        // borderWidth: 5,
        borderColor: 'brown',
    },
    button: {
        padding: 12,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#c2bad8',
    },
    buttonText: {
        // color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },

})

export default StartSessionButton;