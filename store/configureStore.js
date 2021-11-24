import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //for asynchronous actions
/* Import all reducers */
import goalsReducer from './reducers/goalsReducer';
import skillsReducer from './reducers/skillsReducer';
import activitiesReducer from './reducers/activitiesReducer';

const rootReducer = combineReducers({
    goals: goalsReducer,
    skills: skillsReducer,
    activities: activitiesReducer,
})

const configureStore = createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;