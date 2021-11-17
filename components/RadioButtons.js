import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RadioButtons = ({buttons, defaultOn, styleButtonOn, styleButtonOff, onPress}) => {
    const [buttonsState, setButtonsState] = useState(buttons.map((element, index) => index == defaultOn ? true : false));

    useEffect(() => {
    }, [buttonsState]);
    
    return (
        <FlatList
            contentContainerStyle = {styles.container}
            keyExtractor={(item) => item.id}
            legacyImplementation={false}
            showsHorizontalScrollIndicator={false}
            data={buttons}
            renderItem={({item, index}) => <TouchableOpacity
                style={buttonsState[index] ? styleButtonOn : styleButtonOff}
                onPress={() => {
                    onPress(index);
                    setButtonsState(buttonsState.map((element, stateIndex) => stateIndex == index));
                }}><Text>{item.title}</Text></TouchableOpacity>}
        />
    );
  };
  
  const styles = StyleSheet.create({
      buttonText: {
          color: '#47595e',
      },
      container: {
          flexDirection: 'row',
    },
    })
  
  export default RadioButtons;
  