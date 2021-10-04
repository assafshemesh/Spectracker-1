import React, {useState, useEffect}  from 'react';
// import React, {useState, useContext}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, FlatList } from 'react-native';
import Goal from '../components/Goal';
import ActivityButtonGroup from '../components/ActivityButtonGroup';
import DropdownListButton from '../components/DropdownListButton';
import Carousel from './Carousel';
import ActivityButtonCarousel from '../components/ActivityButtonCarousel';
import ManagerButton from './ManagerButton';



const ManagerDashboard = ({ route, navigation, handleSessionDetails}) => {

  console.log("|    ------ ManagerDashboard rendered ------");

    const colors = {c1: '#ffb3b3', c2: '#00cccc', c3: '#99ffbb', c4: '#99ccff', c5: '#ecb3ff', c6: '#ffb3ec', c7: '#cc9966', c8: '#ff0080', c9: '#ace600', c10: '#75a3a3', c11: '#d279a6',};
    const getGoals = () => {
        const sessionGoals = [ 
            { id: 1,
              serialNum: 1,
              title:  "1.תני לי x",
              description: "במהלך משחק משותף בחפצים או בפעילות אכילה \ הלבשה, כשירדן תקבל הוראה מילולית של 'תני לי X' עבור 8-10 אובייקטים ספציפיים, ירדן תיתן את האובייקט בליווי מבט. ירדן תיתן את האובייקטים בפעילויות עם שני מבוגרים שונים, לאורך 3 ימים עוקבים",
              skillType: "שפה רצפטיבית",
              subgoals: [
                {   id: 1.1,
                    serialNum: 1.1,
                    title: "1.1",
                    description: "ירדן נותנת 3-4 אובייקטים ללא מבט, עם סיוע של הושטת יד",
                    doneAt: "",
                  },
                {   id: 1.2,
                    serialNum: 1.2,
                    title: "1.2",
                    description: "ירדן נותנת 3-4 אובייקטים בליווי מבט, עם סיוע של הושטת יד + כניסה לטווח הראייה של המטפל",
                    doneAt: "",
                  }
              ],
              activities: [
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
                { id: 9,
                  title: "בנייה בקוביות",
                  description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט",
                  color: colors.c5,
                },
              ]
            },
            { id: 2,
              serialNum: 2,
              title:  "2. חפשי ותני לי את X",
              description: "במהלך משחק משותף בחפצים או בפעילות אכילה \ הלבשה, כשירדן תקבל הוראה מילולית של 'תני לי X' עבור 8-10 אובייקטים ספציפיים, ירדן תיתן את האובייקט בליווי מבט. ירדן תיתן את האובייקטים בפעילויות עם שני מבוגרים שונים, לאורך 3 ימים עוקבים",
              skillType: "שפה רצפטיבית",
              subgoals: [
                  {   id: 2.1,
                      serialNum: 2.1,
                      title: "2.1",
                      description: "ירדן נותנת 3-4 אובייקטים ללא מבט, עם סיוע של הושטת יד",
                      doneAt: "",
                  },
              ],
              activities: [
                {   id: 1,
                    title: "בועות סבון",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: colors.c1,
                },
                {   id: 4,
                    title: "צעצוע חדש",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: colors.c3,
                },
                { id: 6,
                  title: "ציור",
                  description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
                  color: colors.c6,
                },
                {   id: 8,
                    title: "השחלת חרוזים",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: colors.c8,
                },
                {   id: 12,
                    title: "הכנת עוגיות",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: colors.c9,
                },
                { id: 10,
                  title: "ריקוד",
                  description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
                  color: colors.c10,
                },
                {   id: 13,
                    title: "קריאת סיפור",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: colors.c11,
                },
              ]
            },
            { id: 3,
              serialNum: 3,
              title:  "3. שיתוף בפעילות",
              description: "במהלך משחק משותף בחפצים או בפעילות אכילה \ הלבשה, כשירדן תקבל הוראה מילולית של 'תני לי X' עבור 8-10 אובייקטים ספציפיים, ירדן תיתן את האובייקט בליווי מבט. ירדן תיתן את האובייקטים בפעילויות עם שני מבוגרים שונים, לאורך 3 ימים עוקבים",
              skillType: "שפה רצפטיבית",
              subgoals: [
                  {   id: 3.1,
                      serialNum: 3.1,
                      title: "2.1",
                      description: "ירדן נותנת 3-4 אובייקטים ללא מבט, עם סיוע של הושטת יד",
                      doneAt: "",
                  },
                //   {   id: 3.2,
                //       serialNum: 3.2,
                //       title: "2.2",
                //       description: "ירדן נותנת 3-4 אובייקטים בליווי מבט, עם סיוע של הושטת יד + כניסה לטווח הראייה של המטפל",
                //       doneAt: "",
                //   }
              ],
              activities: [
                {   id: 1,
                    title: "בועות סבון",
                    // title: "אמא",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: colors.c1,
                },
                { id: 3,
                  title: "הרכבת פאזל",
                  // title: "אמא",
                  description: "מציאת החלק המתאים של פאזל מגנטי",
                  color: colors.c2,
                },
                {   id: 5,
                    title: "משחק בבובות",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: colors.c4,
                },
                {   id: 4,
                  title: "צעצוע חדש",
                  description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                  color: colors.c3,
                },
                { id: 9,
                  title: "בנייה בקוביות",
                  description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט",
                  color: colors.c5,
                },
              ],
            },
        ];
        return (sessionGoals);
    };
    const getRecommendedActivities = () => {
      const recommendedActivities = [
        { id: 1,
          // title: "הפרחת בועות סבון",
          title: "בועות סבון",
          // title: "soap bubbles",
          // title: "אבא",
          description: "פוף!' ירדן תפוצץ בועה עם האצבע'",
          environments: [
            { id: 1,
              title: "חדר טיפול",
              default: false,
            },
            { id: 2,
              title: "סלון ילדים",
              default: false,
            },
            { id: 4,
              title: "חדר אמבטיה",
              default: false,
            },
            { id: 3,
              title: "חצר",
              default: true,
            },
          ],
          color: colors.c1,
        },
        { id: 3,
          title: "הרכבת פאזל",
          // title: "puzzle",
          description: "מציאת החלק המתאים של פאזל מגנטי",
          environments: [
            { id: 1,
              title: "חדר טיפול",
              default: true,
            },
            { id: 2,
              title: "סלון ילדים",
              default: false,
            },
            { id: 3,
              title: "חצר",
              default: false,
            },
            { id: 5,
              title: "מטבח",
              default: false,
            },
          ],
          color: colors.c2,
        },
        { id: 4,
          title: "צעצוע חדש",
          description: "משחק עם צעצוע חדש  פקפקפקפקפקפקפפקפקהההה",
          environments: [
            { id: 1,
              title: "חדר טיפול",
              default: false,
            },
            { id: 2,
              title: "סלון ילדים",
              default: true,
            },
            { id: 3,
              title: "חצר",
              default: false,
            },
            { id: 6,
              title: "חדר שינה",
              default: false,
            },
          ],
          color: colors.c3,
        },
        // { id: 4,
        //   // title: "הצגת צעצוע חדש",
        //   title: "new toy",
        //   description: "this is the description of new toy activity",
        //   environments: [
        //     { id: 1,
        //       title: "treatment room",
        //       default: false,
        //     },
        //     { id: 2,
        //       title: "kids livingroom",
        //       default: true,
        //     },
        //     { id: 3,
        //       title: "backyard",
        //       default: false,
        //     },
        //     { id: 6,
        //       title: "bedroom",
        //       default: false,
        //     },
        //   ],
        // },
        { id: 5,
          title: "משחק בבובות",
          description: "עייפה בובה זהבה ועייף מאוד הדובבבבב",
          environments: [
            { id: 1,
              title: "חדר טיפול",
              default: true,
            },
            { id: 2,
              title: "סלון ילדים",
              default: false,
            },
            { id: 3,
              title: "חצר",
              default: false,
            },
          ],
          color: colors.c4,
        }
      ];
      // return recommendedActivities.reverse();
      return recommendedActivities;
  };
    const getRestOfSessionActivities = () => {
        const restOfSessionActivities = [
          // { id: 11,
          //   title: "building blocks",
          //   description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט"
          // },
          { id: 9,
            title: "בנייה בקוביות",
            description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט",
            environments: [
              { id: 1,
                title: "חדר טיפול",
                default: true,
              },
              { id: 2,
                title: "סלון ילדים",
                default: false,
              },
              { id: 3,
                title: "חצר",
                default: false,
              },
            ],
            color: colors.c5,
          },
          { id: 6,
            title: "ציור",
            description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
            environments: [
              { id: 1,
                title: "חדר טיפול",
                default: false,
              },
              { id: 2,
                title: "סלון ילדים",
                default: true,
              },
              { id: 3,
                title: "חצר",
                default: false,
              },
              { id: 7,
                title: "פינת אוכל",
                default: false,
              },
            ],
            color: colors.c6,
          },
        ];
        return restOfSessionActivities;
    };
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


    const getGoalsEmpty = () => {const goals = []};

    const { username } = route.params;
    var goals = getGoals();
    // var goals = getGoalsEmpty();
    var skills = getSkills();
    console.log("ManagerDashboard: skills = " + skills);

    console.log("ManagerDashboard: goals = " + goals);

    return (
        <View style={styles.container}>
          <ManagerButton buttonsText={"תוכנית טיפול"} onPress={() => navigation.navigate('TreatmentPlan', { username, goals, skills })} />
          <ManagerButton buttonsText={"תכנון שבועי"} onPress={() => navigation.navigate('WeeklyPlan', { username })} />
          <ManagerButton buttonsText={"דוחות"} onPress={() => navigation.navigate('Reports', { username })} />
          <ManagerButton buttonsText={"התחל מפגש"} onPress={() => navigation.navigate('StartSession', { username })} />
        </View>
      );
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 0.5,
        flexWrap: 'wrap',
        // height: 200,
        // padding: 1,
        marginTop: 80,
        alignContent: "center",
        // borderWidth: 1,
        borderColor: 'blue',
      }
  })

export default ManagerDashboard;