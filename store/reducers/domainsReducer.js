import { FETCH_DOMAINS, UPDATE_DOMAIN } from '../actions/domains/domainsActionTypes'


const getDomains = () => {
    const domains = [
        {title: "שפה רצפטיבית", id: 1},
        {title: "שפה אקספרסיבית", id: 2},
        {title: "כישורים חברתיים", id: 3},
        {title: "חיקוי", id: 4},
        {title: "קוגניציה", id: 5},
        {title: "משחק", id: 6},
        {title: "התנהגות", id: 7},
        {title: "עצמאות באכילה", id: 8},
        {title: "עצמאות בלבוש", id: 9},
        {title: "עצמאות בהיגיינה", id: 10},
        {title: "עצמאות במטלות הבית", id: 11},
        {title: "מוטוריקה עדינה", id: 12},
        {title: "מוטוריקה גסה", id: 13},
        {title: "קשב משותף", id: 14},
        {title: "עצמאות בכלליות", id: 15},
        {title: "עצמאות בזהירות בכביש", id: 16},
    ];
    return (domains);
};

const initialState = {
    allDomains: getDomains(),
}

const domainsReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOMAINS:
            const newState = action.payload;
            return newState;
            break
        case UPDATE_DOMAIN:
            const updatedDomains = state.allDomains;
            updatedDomains[payload.id] = payload;
            newState = { updatedDomains }; //should it be const newState?
            return newState;
            break
        default:
            return state;
    }
};

export default domainsReducer;