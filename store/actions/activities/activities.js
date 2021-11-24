import { FETCH_ACTIVITIES, UPDATE_ACTIVITY} from './goalsActionTypes'


const getActivities = () => {
    const activities = [
      {   id: 1,
          title: "בועות סבון",
          description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
          color: colors.c1,
      },
      {   id: 2,
          title: "צעצוע ישן",
          description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
          color: colors.c7,
      },
      { id: 3,
        title: "הרכבת פאזל",
        // title: "אמא",
        description: "מציאת החלק המתאים של פאזל מגנטי",
        color: colors.c2,
      },
      {   id: 4,
        title: "צעצוע חדש",
        description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
        color: colors.c3,
      },
      {   id: 5,
        title: "משחק בבובות",
        description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
        color: colors.c4,
      },
      { id: 6,
        title: "ציור",
        description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
        color: colors.c6,
      },
      { id: 7,
        title: "משחק בבצק צבעוני",
        description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
        color: colors.c6,
      },
      {   id: 8,
        title: "השחלת חרוזים",
        description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
        color: colors.c8,
      },
      { id: 9,
        title: "בנייה בקוביות",
        description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט",
        color: colors.c5,
      },
      
      { id: 10,
        title: "ריקוד",
        description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
        color: colors.c10,
      },
      { id: 11,
        title: "נסיעה באופניים",
        description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
        color: colors.c10,
      },
      {   id: 12,
          title: "הכנת עוגיות",
          description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
          color: colors.c9,
      },
      {   id: 13,
          title: "קריאת סיפור",
          description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
          color: colors.c11,
      },
    ];
    return (activities);
};

export const updateActivity = (activity) => {
    return {
        type: UPDATE_ACTIVITY,
        payload: activity
    }
};

export const fetchActivities = () => {
    // return (dispatch) => {
    //     fetch('${URL}/activities')
    //         .then(response => response.json())
    //         .then(data => {
    //             dispatch({
    //                 type: FETCH_ACTIVITIES,
    //                 payload: data
    //             })
    //         }).catch(function(err) {
    //             console.log( err);
    //         })
    // }

    const activities = getActivities();
    return (dispatch) => {
        dispatch({
            type: FETCH_ACTIVITIES,
            payload: activities
        })
    }
};