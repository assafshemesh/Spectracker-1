import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions , TouchableOpacity} from 'react-native';
import { set } from 'react-native-reanimated';


const Timer = ({time}) => {
    const [seconds, setSeconds] = useState(time * 60);
    const [isRunning, setIsRunning] = useState('true');

    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = (seconds % 3600) % 60;

    useEffect (() => {
        let timerID = null;
        if (isRunning) {
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
    }, [isRunning, seconds]   );
    
    const stop = () => {
        setIsRunning((prev) => !prev);
    }

    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={stop}>
                <Text style={isRunning ? styles.clockOnText : styles.clockOffText}>
                    {`${h > 9 ? h : `0`+h}:${m > 9 ? m : `0`+m}:${s > 9 ? s : `0`+s}`}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    clockOnText: {
      color: 'green',
      fontSize: 60,
    },
    clockOffText: {
      color: 'red',
      fontSize: 60,
    },
  })

export default Timer;