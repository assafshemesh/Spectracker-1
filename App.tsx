import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import TherapistScreen from './screens/TherapistScreen';
import ManagerScreen from './screens/ManagerScreen';
import TreatmentPlanScreen from './screens/TreatmentPlanScreen';
import CreateGoalScreen from './screens/CreateGoalScreen';
import WeeklyPlanScreen from './screens/WeeklyPlanScreen';
import ReportsScreen from './screens/ReportsScreen';
import StartSessionScreen from './screens/StartSessionScreen';
// import TherapistGoalsScreen from './screens/TherapistGoalsScreen';
import SessionScreen from './screens/SessionScreen';
// import { SessionProvider } from './contexts/SessionState';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import { createStore } from 'redux';
// import goalsReducer from './state_managment/GoalsReducer'


const Stack = createStackNavigator();

// const store = createStore(goalsReducer);

const App = () => {
  
  return (
    // <SessionProvider>
    <Provider store = {configureStore}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: '',
            headerStyle: {
              // backgroundColor: 'darkslateblue',
              // backgroundColor: '#fff',
            },
            // headerTintColor: '#fff',
            headerTintColor: 'darkslateblue',
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: 18,
              fontFamily: 'sans-serif-light',
            },
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Therapist Home" component={TherapistScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Manager Home" component={ManagerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TreatmentPlan" component={TreatmentPlanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CreateGoal" component={CreateGoalScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WeeklyPlan" component={WeeklyPlanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Reports" component={ReportsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="StartSession" component={StartSessionScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Therapist Goals" component={TherapistGoalsScreen} /> */}
          <Stack.Screen name="Session" component={SessionScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
    // </SessionProvider>
  );
};

export default App;