import { combineReducers } from "redux";

const INITIAL_STATE = {
    current: [],
    skills: [
        'skillA',
        'skillB',
        'skillC',
    ],
};

const goalsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_GOAL':
            const {
                current,
                skills,
            } = state;
            const newGoal = {
                goalsSkills: action.payload
            };
            current.push(newGoal);
            const newState = {current, skills};
            return newState;
        default:
            return state
    }
};

export default combineReducers({
    goals: goalsReducer
});