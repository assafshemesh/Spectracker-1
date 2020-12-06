import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions , TouchableOpacity} from 'react-native';


const TimerB = ({time}) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(time % 60);
    const [hours, setHours] = useState(Math.floor(time / 60));
    const [isRunning, setIsRunning] = useState('true');

    // let zeroLead = '';

    useEffect (() => {
                let timerID = setInterval(
                    () => {
                        if (isRunning) {
                            // console.log("----- TTTTIMER BBBBBBBB --- I'M STILL STANDING. BETTER THAN I EVER WAS");
                            if (seconds == 0) {
                            console.log("----- TTTTIMER BBBBBBBB --- I'M STILL STANDING. BETTER THAN I EVER WAS");
                                if (minutes == 0) {
                                    if (hours == 0) {
                                        setIsRunning('false');
                                    }else{
                                        setHours((prevH) => prevH - 1);
                                        setMinutes(59);
                                        setSeconds(59);
                                    }
                                }else{
                                    setMinutes((prevM) => prevM - 1);
                                    setSeconds(59);
                                }
                            }else{
                                console.log("H O L A   MUCHACHOS");
                                setSeconds((prevS) => {
                                    // if (isRunning) {
                                    // if (prevS == 0) {
                                    //     if(minutes == 0) {
                                    //         if (hours == 0) {
                                    //             setIsRunning('false');
                                    //         }
                                    //     } else {
                                    //         setMinutes((prevM) => {
                                    //             if (prevM == 0) {
                                    //                 if (hours == 0){
                                    //                     setIsRunning('false');
                                    //                 } else {
                                    //                     setHours((prevH) => {
                                    //                         if (prevH == 0) {
                                    //                             setIsRunning('false');
                                    //                         }
                                    //                         console.log(`-#-#-#-#-#-#-#-#- prevH = ${prevH}`);
                                    //                         return(prevH - 1);
                                    //                     })
                                    //                 }
                                    //                 console.log(`-#-#-#-#-#-#-#-#- prevM = ${prevM}`);

                                    //                 setIsRunning('false');
                                    //             }
                                    //             return (prevM - 1);
                                    //         });
                                    //         console.log(`-#-#-#-#-#-#-#-#- OUTSIDE THE SET FUNC minutes = ${minutes}`);
                                    //         return (59);

                                    //     }
                                    // }
                                    // console.log(`-#-#-#-#-#-#-#-#- prevS = ${prevS}`);
                                    return(prevS - 1);
                                // }
                                });
                                console.log(`-#-#-#-#-#-#-#-#- OUTSIDE THE SET FUNC seconds = ${seconds}`);

                            }
                        }
                    }, 1000);
                return (() => clearInterval(timerID));
            }, []   )

    

    return (
        <View>
            <Text></Text>
            <Text>---- TimerB: ----</Text>
            <Text>{hours}:{minutes == 60 ? '00' : minutes}:{seconds == 60 ? '00' : seconds}</Text>
            <Text>isRunning = {isRunning}</Text>
        </View>
    )


}

export default TimerB;