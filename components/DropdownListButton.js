import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const DropdownListButton = ({arrayListItems, defaultValue, onSelect}) => {

  const [dropdownValue, setDropdownValue] = useState(defaultValue);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
            setModalVisible(true);
          }}>
          <View style={styles.dropdownButtonTextContainer}>
            <FontAwesomeIcon style={styles.dropdownButtonIcon} icon={ faCaretDown } />
            <View style={styles.buttonTextWrapper}>
              <Text style={styles.dropdownButtonText}>{defaultValue}</Text>
            </View>
          </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
      >
          <View style={styles.modalView}>
            <View style={styles.listItemsContainer}>
              <FlatList 
                data={arrayListItems}
                renderItem={({item, index}) =>
                  <View>
                    <TouchableOpacity onPress={() => {
                      setDropdownValue(item.title);
                      onSelect(item);
                      setModalVisible(!modalVisible);
                      }}>
                        <Text style={styles.menuOptionText}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>}
              />
            </View>

            <TouchableHighlight
              style={styles.cancelButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.cancelButtonText}>בטל</Text>
            </TouchableHighlight>
          </View>
      </Modal>

  </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      flexDirection: 'row',
        flex: 1,  // relations 1:8 with the sibling goalList
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
        paddingRight: 11,
        paddingLeft: 11,
    },
    // buttonOff: {
    //     flex: 1,
    //     backgroundColor: 'lightblue',
    //     margin: 1,
    //     width: 70,
    //     height: 50,
    //     padding: 5,
    // },
    // dropdownButtonOn: {
    //     backgroundColor: 'pink',
    //     margin: 1,
    //     width: 99,
    //     height: 54,
    //     padding: 10,
    //     paddingTop: 5,
    // },
    dropdownButtonTextContainer: {
      flex: 1,
      flexDirection: 'row-reverse',
      alignContent: 'center',
      justifyContent: 'center',
    },
    buttonTextWrapper: {
      flex: 4,
      alignSelf: 'center',
    },
    dropdownButtonIcon: {
      flex: 1,
      marginLeft: 4,
      alignSelf: 'center',
    },
    // buttonOn: {
    //     flex: 1,
    //     backgroundColor: 'pink',
    //     margin: 1,
    //     width: 70,
    //     height: 50,
    //     padding: 5,
    // },
    menuOptionText: {
      fontSize: 16,
      marginBottom: 12,
      alignSelf: 'center',
    },
    // recommendedActivities: {
    //   flex: 1,
    // },
    modalView: {
      position: "absolute",
      top: 120,
      left: -8,
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
});

export default DropdownListButton;