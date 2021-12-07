import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //for asynchronous actions
/* Import all reducers */
import goalsReducer from './reducers/goalsReducer';
import skillsReducer from './reducers/skillsReducer';
import activitiesReducer from './reducers/activitiesReducer';
import domainsReducer from './reducers/domainsReducer';

const rootReducer = combineReducers({
    goals: goalsReducer,
    skills: skillsReducer,
    activities: activitiesReducer,
    domains: domainsReducer,
})

const configureStore = createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;