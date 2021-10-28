import { FETCH_SKILLS, UPDATE_SKILL } from '../actions/skills/skillsActionTypes'

const getSkills = () => {
    const skills = [
      {id: 1,
       type: "ויזואלי",
       wasAchieved: true,
       description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
      },
      {id: 2,
       type: "תחושתי",
       wasAchieved: false,
       description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
      },
      {id: 3,
       type: "קוגנטיבי",
       wasAchieved: true,
       description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
      },
      {id: 4,
       type: "ווקלי",
       wasAchieved: false,
       description: "זיהויי דמויות וחפצים באמצעות המראה שלהם",
      },
      {id: 5,
       type: "טקסטואלי",
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
            const { updatedSkills } = state;
            updatedSkills[skill.id] = skill;
            newState = { updatedSkills }; //should it be const newState(...)?
            return newState;
            break
        default:
            return state;
    }
};

export default skillsReducer;