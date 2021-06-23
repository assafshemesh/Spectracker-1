import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions , TouchableOpacity} from 'react-native';
import { set } from 'react-native-reanimated';


const Timer = ({time, isStopped}) => {
// const Timer = ({time}) => {
    const [seconds, setSeconds] = useState(time * 60);
    const [isRunning, setIsRunning] = useState('true');
    
    console.log(`isRunning = ${isRunning}`);
    console.log(`isStopped = ${isStopped}`);

    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = (seconds % 3600) % 60;

    useEffect (() => {
        let timerID = null;

        if (isRunning && !isStopped) {
            timerID = setInterval(
                    () => {
                            if (seconds > 0) {
                                setSeconds((prevM) => prevM - 1);
                            } else {
                                setIsRunning(false);
                            }
                    
                    }, 1000);
        }
        return (() => clearInterval(timerID));
    }, [isRunning, isStopped, seconds]   );
    
    const pause = () => {
        setIsRunning((prev) => !prev);
    }

    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pause}>
                <Text style={isRunning ? styles.clockOnText : styles.clockOffText}>
                    {`${h > 9 ? h : `0`+h}:${m > 9 ? m : `0`+m}:${s > 9 ? s : `0`+s}`}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 10,
        backgroundColor: 'black',
        // backgroundColor: 'darkslateblue',
        backgroundColor: '#babab8',
        // borderWidth: 3,
        borderColor: 'purple',
    },
    clockOnText: {
    //   color: 'green',
      color: 'white',
    //   fontSize: 60,
      fontSize: 20,
    },
    clockOffText: {
      color: 'red',
    //   fontSize: 60,
      fontSize: 20,
    },
  })

export default Timer;