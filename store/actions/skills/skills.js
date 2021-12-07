import  { UPDATE_SKILL, FETCH_SKILLS } from './skillsActionTypes'

// const getSkills = () => {
//     const skills = [
//       {id: 1,
//        type: "ויזואלי",
//        wasAchieved: true,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 2,
//        type: "תחושתי",
//        wasAchieved: false,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 3,
//        type: "קוגנטיבי",
//        wasAchieved: true,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 4,
//        type: "ווקלי",
//        wasAchieved: false,
//        description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
//       },
//       {id: 5,
//        type: "טקסטואלי",
//        wasAchieved: true,
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
    ]
    return (skills);
  };

export const updateSkill = (skill) => {
    return {
        type: UPDATE_SKILL,
        payload: skill
    }
};

export const fetchSkills = () => {
    // return (dispatch) => {
    //     fetch(`${URL}/skills`)
    //           .then(response => response.json())
    //           .then(data => {
    //             dispatch({ 
    //                 type: FETCH_SKILLS,
    //                 payload: skills
    //             })
    //           }).catch(function(err) {
    //             console.log( err);
    //           })
    // }

    const skills = getSkills();
    return (dispatch) => {
        dispatch({
            type: FETCH_SKILLS,
            payload: skills
        })
    }
};