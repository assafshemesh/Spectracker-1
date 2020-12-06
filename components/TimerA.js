import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions , TouchableOpacity} from 'react-native';


const TimerA = ({time}) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState((time % 60) > 0 ? time % 60 : 0 );
    // const [minutes, setMinutes] = useState(time % 60);
    const [hours, setHours] = useState(Math.floor(time / 60));
    const [isRunning, setIsRunning] = useState('true');

    // let zeroLead = '';

    useEffect (() => {
                let timerID = setInterval(
                    () => {
                        if (isRunning) {
                            console.log(`---------------- isRunning = ${isRunning}`);
                            if (seconds == 0) {
                                console.log(`------Timer: seconds = ${seconds}`);
                                if (minutes == 0) {
                                    if (hours == 0) {
                                        setIsRunning('false');
                                        console.log("---------------isRunning should be FALSE");
                                    }else{
                                        setHours((prevH) => prevH - 1);
                                        setMinutes(59);
                                        setSeconds(59);
                                    }
                                }else{
                                    setMinutes((prevM) => prevM - 1);
                                    // setSeconds(59);
                                    setSeconds((prevS) => {
                                        
                                        return (59);
                                    });
                                }
                            }else{
                                console.log("H O L A   MUCHACHOS");
                                setSeconds((prevS) => {
                                    //ADDITION-LINE BELOW:
                                    if (isRunning) {
                                    if (prevS == 0) {
                                        if(minutes == 0) {
                                            if (hours == 0) {
                                                console.log(`****************everything equals ZERO`)
                                                setIsRunning(
                                                    'false');
                                            }
                                        } else {
                                            setMinutes((prevM) => {
                                                console.log(`-#-#-#-#-#-#-#-#- prevM = ${prevM}`);
                                                if (prevM == 0) {
                                                    if (hours == 0){
                                                        setIsRunning('false');
                                                        console.log(`-#-#-#-#--- should be 0 ---#-#-#-#- prevM = ${prevM}`);
                                                        return(prevM);
                                                    } else {
                                                        setHours((prevH) => {
                                                            if (prevH == 0) {
                                                                setIsRunning('false');
                                                            }
                                                            // console.log(`-#-#-#-#-#-#-#-#- prevH = ${prevH}`);
                                                            return(prevH - 1);
                                                        })
                                                        return (59);
                                                    }
                                                    // setIsRunning('false');
                                                    
                                                }
                                                return (prevM - 1);
                                                
                                            });
                                            console.log(`-#-#-#-#-#-#-#-#- OUTSIDE THE SET FUNC minutes = ${minutes}`);
                                            return (59);

                                        }
                                    }
                                    console.log(`-#-#-#-#-#-#-#-#- prevS = ${prevS}`);
                                    return(prevS - 1);
                                //ADDITION-LINE BELOW:
                                }
                                });
                                console.log(`-#-#-#-#-#-#-#-#- OUTSIDE THE SET FUNC seconds = ${seconds}`);

                            }
                        }
                    }, 1000);
                return (() => clearInterval(timerID));
            }, []   )

    

    return (
        <View>
            <Text>{hours}:{minutes == 60 ? '00' : minutes}:{seconds == 60 ? '00' : seconds}</Text>
            <Text>isRunning = {isRunning}</Text>
        </View>
    )


}

export default TimerA;