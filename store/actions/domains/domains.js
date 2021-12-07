import { FETCH_DOMAINS, UPDATE_DOMAIN } from './domainsActionTypes'


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
    // const domains = [
    //     {title: "שפה רצפטיבית", id: 0},
    //     {title: "ווקאלי", id: 1},
    //     {title: "קוגנטיבי", id: 2},
    //     {title: "תחושתי", id: 3},
    //     {title: "ויזואלי", id: 4}
    // ];
    return (domains);
};

export const updateDomain = (domain) => {
    return {
        type: UPDATE_DOMAIN,
        payload: domain
    }
};

export const fetchDomains = () => {
    // return (dispatch) => {
    //     fetch('${URL}/domains')
    //         .then(response => response.json())
    //         .then(data => {
    //             dispatch({
    //                 type: FETCH_DOMAINS,
    //                 payload: data
    //             })
    //         }).catch(function(err) {
    //             console.log( err);
    //         })
    // }

    const goals = getDomains();
    return (dispatch) => {
        dispatch({
            type: FETCH_DOMAINS,
            payload: domains
        })
    }
};