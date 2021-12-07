import { FETCH_SKILLS, UPDATE_SKILL } from '../actions/skills/skillsActionTypes'

// const getSkills = () => {
//     const skills = [
//       {id: 0,
//        type: "ויזואלי",
//        wasAchieved: true,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 1,
//        type: "תחושתי",
//        wasAchieved: false,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 2,
//        type: "קוגנטיבי",
//        wasAchieved: true,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 3,
//        type: "ווקאלי",
//        wasAchieved: true,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 4,
//        type: "טקסטואלי",
//        wasAchieved: false,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 5,
//         type: "קוגנטיבי",
//        wasAchieved: false,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 6,
//         type: "תחושתי",
//        wasAchieved: true,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 7,
//         type: "ויזואלי",
//        wasAchieved: false,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//     ]
//     return (skills);
//   };
const getSkills = () => {
    const skills = [
      {id: 1,
        type: "שפה רצפטיבית",
        wasAchieved: true,
        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
       },
       {id: 2,
        type: "עצמאות במטלות הבית",
        wasAchieved: false,
        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
       },
       {id: 3,
        type: "קוגניציה",
        wasAchieved: true,
        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
       },
       {id: 4,
        type: "מוטוריקה גסה",
        wasAchieved: false,
        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
       },
       {id: 5,
        type: "חיקוי",
        wasAchieved: true,
        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
       },
       {id: 6,
        type: "מוטוריקה גסה",
        wasAchieved: false,
        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
       },
       {id: 7,
        type: "חיקוי",
        wasAchieved: true,
        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
       },
    ]
    return (skills);
  };

const initialState = {
    allSkills: getSkills(),
}

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SKILLS:
            const newSkills = action.payload;
            const newState = { newSkills };
            return newState;
            break
        case UPDATE_SKILL:
            const skill = action.payload;
            const updatedSkills = state.allSkills;
            updatedSkills[skill.id].wasAchieved = skill.wasAchieved;
            const updatedState = { allSkills: updatedSkills };
            return updatedState;
            break
        default:
            return state;
    }
};

export default skillsReducer;