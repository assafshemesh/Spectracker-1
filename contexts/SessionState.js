import React, { createContext, useReducer } from 'react';
import SessionReducer from './SessionReducer';

// Initial state
const initialState = {
  therapistName: 'yeahello!',
  patientName: 'ירדן',
  sessionTime: {
      date: '',
      hour: ''
    },
  sessionGoals: [],
  recommendedActivities: [],
  restOfSessionActivities: [],
  selectedActivity: {
      id: '',
      title: '',
      description: '',
      environments: [],
    },
  isOngoing: 'false',
}

// Create context
export const SessionContext = createContext(initialState);

// Provider component
export const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SessionReducer, initialState);

  // Actions
  function updateSession(sessionProp) {
    dispatch({
      type: 'UPDATE_SESSION',
      payload: sessionProp
    });
  }

  return (<SessionContext.Provider value={{
    session: state.session,
    updateSession,
  }}>
    {children}
  </SessionContext.Provider>);
}