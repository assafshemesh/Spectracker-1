import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from '../components/Header';
import Login from '../components/Login';
import { SessionProvider } from '../contexts/SessionState';


const LoginScreen = ({ navigation }) => {
    return (
      // <SessionProvider>
        <View style ={styles.container}>
            <Header title='Spectracker' />
            <Login navigation={navigation}/>
        </View>
      // </SessionProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default LoginScreen;