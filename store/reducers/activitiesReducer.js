import { FETCH_ACTIVITIES, UPDATE_ACTIVITY } from '../actions/activities/activitiesActionTypes'

const colors = {c1: '#ffb3b3', c2: '#00cccc', c3: '#99ffbb', c4: '#99ccff', c5: '#ecb3ff', c6: '#ffb3ec', c7: '#cc9966', c8: '#ff0080', c9: '#ace600', c10: '#75a3a3', c11: '#d279a6',};


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

const initialState = {
    allActivities: getActivities(),
}

const activitiesReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            const newState = action.payload;
            return newState;
            break
        case UPDATE_ACTIVITY:
            const updatedActivities = state.allGoals;
            updatedActivities[payload.id] = payload;
            newState = { updatedActivities }; //should it be const newState?
            return newState;
            break
        default:
            return state;
    }
};

export default activitiesReducer;