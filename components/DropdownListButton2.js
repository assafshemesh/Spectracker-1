import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert, Modal, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const DropdownListButton2 = ({style, arrayListItems, defaultValue, precedingText, onSelect}) => {

    console.log("----------------------------------------------------------------------------------")
    console.log("----------------------------------------------------------------------------------")
    console.log("--------------------------DropdownListButton2 rendered----------------------------")
    console.log("----------------------------------------------------------------------------------")
    console.log("----------------------------------------------------------------------------------")  

  const [dropdownValue, setDropdownValue] = useState(defaultValue);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={styles.buttonAreaContainer}>
        {/* <View style={styles.buttonTextWrapper}>
            <Text style={styles.dropdownButtonPrecedingText}>{precedingText}</Text>
        </View> */}
        <TouchableOpacity style={styles.dropdownButtonContainer} onPress={() => {
              setModalVisible(true);
            }}>
            {/* <View style={styles.dropdownButtonContainer}> */}
              <Text style={styles.dropdownButtonPrecedingText}>{precedingText}</Text>
              <FontAwesomeIcon style={styles.dropdownButtonIcon} icon={ faCaretDown } />
              <View style={styles.buttonTextWrapper}>
                <Text style={styles.dropdownButtonText}>{dropdownValue}</Text>
              </View>
            {/* </View> */}
        </TouchableOpacity>
        </View>

        <Modal
          transparent={true}
          visible={modalVisible}
        >
            <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.modalBackgroundView}>
                  <View style={styles.modalView}>
                      <View style={styles.listItemsContainer}>
                          <FlatList 
                              data={arrayListItems}
                              renderItem={({item, index}) =>
                              <View>
                                  <TouchableOpacity onPress={() => {
                                  setDropdownValue(item.title);
                                  console.log("------->--)))-->-))))--> Inside DropdownListButton2 item.id = " + item.id);
                                  onSelect(item);
                                  setModalVisible(!modalVisible);
                                  }}>
                                      <Text style={styles.menuOptionText}>{item.title}</Text>
                                  </TouchableOpacity>
                              </View>}
                      />
                      </View>

                  </View>
              </View>
            </TouchableWithoutFeedback>
        </Modal>

    </View>
  </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      // flex: 1,  // relation of 1:8 with the sibling goalList
      // alignItems: 'flex-end',
      // justifyContent: 'flex-end',
      // paddingRight: 11,
      // paddingLeft: 11,
      // borderColor: 'purple',
      // borderWidth: 1,
  },
    dropdownButtonContainer: {
      // flex: 1,
      flexDirection: 'row',
      // borderColor: 'green',
      // borderWidth: 1,
    },
    buttonAreaContainer: {
      // flex: 1,
      // flexDirection: 'row-reverse',
      flexDirection: 'row',
      margin: 6,
    //   borderColor: 'orange',
    //   borderWidth: 1,
    },
    buttonTextWrapper: {
      // flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      // borderColor: 'red',
      // borderWidth: 1,
    },
    
    dropdownButtonPrecedingText: {
        // textAlign: 'center',
        // fontSize: 16,
        fontSize: 14,
        // height: 20,
        // backgroundColor: 'lavender',
    },
    dropdownButtonText: {
      flexShrink: 1,
        // textAlign: 'center',
        // fontSize: 16,
        fontSize: 14,
        fontWeight: 'bold',
        // height: 20,
        // backgroundColor: 'lavender',
        color: '#47595e',
    },
    dropdownButtonIcon: {
      flex: 1,
      // marginLeft: 4,
      alignSelf: 'center',
      color: '#47595e',
    },
    menuOptionText: {
        flex: 1,
      fontSize: 16,
      marginBottom: 12,
      alignSelf: 'center',
    },
    modalBackgroundView: {
        flex: 1,
        alignSelf: 'stretch',
    },    
    modalView: {
      position: "absolute",
      top: 119,
      // right: -8,
      right: 120,
      margin: 20,
      backgroundColor: 'white',
      padding: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    cancelButton: {
      backgroundColor: "#bbb",
      padding: 10,
      borderWidth: 1,
      borderColor: 'pink',
    },
    cancelButtonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    // button: {

    // }
});

export default DropdownListButton2;