import React, {useState}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/native';



const ManagerButton = ({ navigation, onPress, buttonsText }) => {

    console.log("|    ------ ManagerButton rendered ------");

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonsText}</Text>
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        // flex: 0.5,
        // width: Dimensions.get('window').width * 0.48,
        // width: 150,
        // height: 100,
        // minHeight: 30,
        // maxHeight: 60,
        justifyContent: 'center',
        // marginTop: 60,
        // backgroundColor: 'wheat',
        // borderWidth: 1,
        borderColor: 'brown',
    },
    button: {
        padding: 12,
        // marginLeft: 10,
        // marginRight: 10,
        margin: 5,
        height: 100,
        width: Dimensions.get('window').width * 0.45,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: '#c2bad8',
        backgroundColor: '#ccccca',
    },
    buttonText: {
        color: 'white',
        // color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },

})

export default ManagerButton;