import React, {useState, useEffect}  from 'react';
// import React, {useState, useContext}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, FlatList } from 'react-native';
import Goal from '../components/Goal';
import ActivityButtonGroup from '../components/ActivityButtonGroup';
import DropdownListButton from '../components/DropdownListButton';
import Carousel from './Carousel';
import ActivityButtonCarousel from '../components/ActivityButtonCarousel';



const ActivitySelection = ({ route, navigation, handleSessionDetails}) => {

  console.log("|    ------ ActivitySelection rendered ------");

    const getSessionGoals = () => {
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
                    color: '#3333',
                },
                {   id: 2,
                    title: "צעצוע ישן",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                { id: 9,
                  title: "בנייה בקוביות",
                  description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט"
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
                    color: '#F5DBEC',
                },
                {   id: 4,
                    title: "צעצוע חדש",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                { id: 6,
                  title: "ציור",
                  description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
                },
                {   id: 8,
                    title: "השחלת חרוזים",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: '#F5DBEC',
                },
                {   id: 12,
                    title: "הכנת עוגיות",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                { id: 10,
                  title: "ריקוד",
                  description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
                },
                {   id: 13,
                    title: "קריאת סיפור",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: '#F5DBEC',
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
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                { id: 3,
                  title: "הרכבת פאזל",
                  // title: "אמא",
                  description: "מציאת החלק המתאים של פאזל מגנטי",
                },
                {   id: 5,
                    title: "משחק בבובות",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                {   id: 4,
                  title: "צעצוע חדש",
                  description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                { id: 9,
                  title: "בנייה בקוביות",
                  description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט"
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
          }
        ];
        // return recommendedActivities.reverse();
        return recommendedActivities;
    };
    // const getRecommendedActivities = () => {
    //     const recommendedActivities = [
    //       { id: 1,
    //         // title: "הפרחת בועות סבון",
    //         // title: "בועות סבון",
    //         title: "soap bubbles",
    //         // title: "אבא",
    //         description: "פוף!' ירדן תפוצץ בועה עם האצבע'",
    //         environments: [
    //           { id: 1,
    //             title: "treatment room",
    //             default: false,
    //           },
    //           { id: 2,
    //             title: "kids living room",
    //             default: false,
    //           },
    //           { id: 4,
    //             title: "bath",
    //             default: false,
    //           },
    //           { id: 3,
    //             title: "back yard",
    //             default: true,
    //           },
    //         ],
    //       },
    //       { id: 3,
    //         // title: "הרכבת פאזל",
    //         title: "puzzle",
    //         description: "מציאת החלק המתאים של פאזל מגנטי",
    //         environments: [
    //           { id: 1,
    //             title: "treatment room",
    //             default: true,
    //           },
    //           { id: 2,
    //             title: "kids living room",
    //             default: false,
    //           },
    //           { id: 3,
    //             title: "back yard",
    //             default: false,
    //           },
    //           { id: 5,
    //             title: "kitchen",
    //             default: false,
    //           },
    //         ],
    //       },
    //       { id: 4,
    //         title: "new toy",
    //         description: "משחק עם צעצוע חדש  פקפקפקפקפקפקפפקפקהההה",
    //         environments: [
    //           { id: 1,
    //             title: "treatment room",
    //             default: false,
    //           },
    //           { id: 2,
    //             title: "kids living room",
    //             default: true,
    //           },
    //           { id: 3,
    //             title: "back yard",
    //             default: false,
    //           },
    //           { id: 6,
    //             title: "bedroom",
    //             default: false,
    //           },
    //         ],
    //       },
    //       // { id: 4,
    //       //   // title: "הצגת צעצוע חדש",
    //       //   title: "new toy",
    //       //   description: "this is the description of new toy activity",
    //       //   environments: [
    //       //     { id: 1,
    //       //       title: "treatment room",
    //       //       default: false,
    //       //     },
    //       //     { id: 2,
    //       //       title: "kids livingroom",
    //       //       default: true,
    //       //     },
    //       //     { id: 3,
    //       //       title: "backyard",
    //       //       default: false,
    //       //     },
    //       //     { id: 6,
    //       //       title: "bedroom",
    //       //       default: false,
    //       //     },
    //       //   ],
    //       // },
    //       { id: 5,
    //         title: "dolls play",
    //         description: "עייפה בובה זהבה ועייף מאוד הדובבבבב",
    //         environments: [
    //           { id: 1,
    //             title: "treatment room",
    //             default: true,
    //           },
    //           { id: 2,
    //             title: "kids living room",
    //             default: false,
    //           },
    //           { id: 3,
    //             title: "back yard",
    //             default: false,
    //           },
    //         ],
    //       }
    //     ];
    //     return recommendedActivities.reverse();
    // };
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
          },
        ];
        return restOfSessionActivities;
    };


    const getSessionTime = () => {
      return ({
        date: "7.3.2020",
        hour: "11:00",
      });
    };

    const { username } = route.params;

    const [sessionDetails, setSessionDetails] = useState({
          therapistName: username,
          patientName: 'ירדן',
          timeOfSession: getSessionTime(),
          sessionDuration: '120',
          isOngoing: false,
          sessionGoals: getSessionGoals(),
          sessionRecommendedActivities: getRecommendedActivities(),
          restOfActivities: getRestOfSessionActivities(),
          selectedGoals: [],
          selectedActivity: '',
          selectedEnvironment: '',
        });

    const printSessionDetails = (where) => {
        console.log("******  SESSION DETAILS (" + where +"): ******")
        console.log("ssessionDetails.therapistName = " + sessionDetails.therapistName );
        console.log("ssessionDetails.patientName = " + sessionDetails.patientName );
        console.log("ssessionDetails.timeOfSession = date: " + sessionDetails.timeOfSession.date  + "  hour: " + sessionDetails.timeOfSession.hour);
        console.log("ssessionDetails.sessionDuration = " + sessionDetails.sessionDuration );
        console.log("ssessionDetails.isOngoing = " + sessionDetails.isOngoing );
        console.log("ssessionDetails.sessionGoals= " + sessionDetails.sessionGoals );
        console.log("ssessionDetails.sessionRecommendedActivities= " + sessionDetails.sessionRecommendedActivities );
        console.log("ssessionDetails.restOfActivities= " + sessionDetails.restOfActivities );
        console.log("ssessionDetails.selectedGoals= " + sessionDetails.selectedGoals );
        console.log("ssessionDetails.selectedActivity= " + sessionDetails.selectedActivity.title );
        console.log("ssessionDetails.selectedEnvironment= " + sessionDetails.selectedEnvironment.title );
    }

    printSessionDetails("TherapistScreen: ActivitySelection");

    var sessionGoals = getSessionGoals();
    var recommendedActivities = getRecommendedActivities();
    var restOfActivities = getRestOfSessionActivities();
    const [goals, setGoals] = useState(getSessionGoals());
    const [environments, setEnvironments] = useState([]);
    const [defaultEnvironment, setDefaultEnvironment] = useState('');
    const [isSelectionVisible, setIsSelectionVisible] = useState(false);

    useEffect(() => {
      if (sessionDetails.selectedEnvironment !== '') {
        // handleSessionDetails(sessionDetails);
        handleSessionDetails(sessionDetails, goals);
      };
      // console.log(`-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* sessionDetails.selectedGoals[0].title = ${sessionDetails.selectedGoals[0].title}`);
    }, [sessionDetails]);


    const updateGoals = (activity) => {
      setIsSelectionVisible(true);
      setGoals(sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(activity.id)));
      setSessionDetails((prevSessionDetails) =>{ return { ...prevSessionDetails, selectedActivity: activity, selectedGoals: goals }});
      // setSessionDetails((prevSessionDetails) =>{ 
      //   return { ...prevSessionDetails, selectedActivity: activity, selectedGoals: prevSessionDetails.sessionGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(activity.id)) }});
      printSessionDetails("ActivitySelction- updateGoals");
      // handleSessionDetails(sessionDetails);
      updateEnvironments(activity);
    };

    const updateEnvironments = (activity) => {
      setEnvironments(activity.environments);
      var defEnv = activity.environments?.filter((environment) => environment.default == true)[0] || {title: 'no environments', id: 444};
      setDefaultEnvironment(defEnv.title);
      // setSessionDetails((prevSessionDetails) =>{ return { ...prevSessionDetails, selectedEnvironment: defEnv.title }});
      setSessionDetails((prevSessionDetails) =>{ return { ...prevSessionDetails, selectedEnvironment: defEnv }});
      printSessionDetails("ActivitySelction- updateEnvironments");
      // handleSessionDetails(sessionDetails);
    };

    const showSelection = () => {
      if (isSelectionVisible) {
        return (
          <View style={styles.goalsList}>
            <View style={styles.envDropDownContainer}>
              <DropdownListButton arrayListItems={environments} defaultValue={defaultEnvironment} precedingText={'סביבת הפעילות:   '} onSelect={(environment) => {
                  console.log("inside onSelect (in ActivitySelection).  environment.id = " + environment.id);
                  setSessionDetails((prevSessionDetails) =>{ return { ...prevSessionDetails, selectedEnvironment: environment}});
                  console.log("---ActivitySelection: ShowSelection - onSelect of DropdownListButton: --- sessionDetails.selectedEnvironment = " + environment.title);
                  // setDefaultEnvironment(environment.title);
                  printSessionDetails("DropdownListButton's onSelect");
                  // handleSessionDetails(sessionDetails);
                }} />
             </View>
           {/* <View style={styles.goalsList}> */}
           <View>
             <FlatList 
             data={goals}
             // data={sessionDetails.selectedGoals}
             renderItem={({item}) => <Goal goal={item} />}
             />
           </View>
          </View>
        );
      };
   };

    return (
      // <View style={isSelectionVisible ?  {...styles.container, flex: 1,} : {...styles.container, paddingBottom: 20,}}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.instructText}>להתחלת הטיפול, בבקשה בחרי פעילות:</Text>
        </View>
        {/* <View style={styles.carouselContainer}>
          <Carousel/>
        </View> */}
        {/* <ActivityButtonGroup recommendedActivities={recommendedActivities} restOfActivities={restOfActivities} updateGoals={updateGoals} /> */}
        <ActivityButtonCarousel recommendedActivities={recommendedActivities} restOfActivities={restOfActivities} updateGoals={updateGoals} />
        {showSelection()}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'tan',
      // backgroundColor: 'rgba(255,255,255,0.755)',
      // backgroundColor: 'yellow',
      // marginTop: -170,
      // alignSelf: 'flex-end',
      // borderWidth: 5,
      // borderBottomWidth: 1,
      borderColor: 'purple',
      margin: 0,
      padding: 0,
    },
    // activityButtons: {
      // borderColor: 'green',
    
      // borderWidth: 3,
    //   alignItems: "flex-end",
    //   justifyContent: "flex-end",
    //   backgroundColor: 'blue',
    // },
    goalsList: {
        flex: 9,
        // backgroundColor: 'wheat',
        paddingTop: 2,
        // borderWidth: 3,
        borderColor: 'green',
        alignItems: 'flex-start',
    },
    envDropDownContainer: {
      // flex: 9,
      // borderWidth: 2,
      borderColor: 'magenta',
    },
    textContainer: {
      color: '#fff',
      // marginBottom: 15,
      paddingRight: 11,
      fontSize: 24,
      paddingTop: 5,
      paddingBottom: 10,
      // borderTopLeftRadius: 30,
      // borderTopRightRadius: 30,
      // backgroundColor: 'tan',
    },
    instructText: {
      // color: 'rgba(255,255,255,0)',
      // color: '#697c82',
      color: '#47595e',
    },

})

export default ActivitySelection;