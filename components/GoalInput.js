import { View, Button, TextInput, StyleSheet, Modal, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); // Limpiar el TextInput después de agregar la meta
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/Images/goal.png')} style={styles.image}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Objectiu pel curs'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={addGoalHandler}  style={styles.buttonOK} activeOpacity={0.5}>
                            <Text style={styles.buttonText}>AFEGIR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={props.onCancel} style={styles.buttonCancel} activeOpacity={0.5}>
                            <Text style={styles.buttonText}>CANCEL·LAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', // Centrat vertical
        alignItems: 'center', // Centrat vertical
        height: 60, // Altura contenidor per a centrar verticalment
        padding: 16,
        backgroundColor: '#060118'
    },
    textInput: {
        backgroundColor: '#f0f0f0',
        color: '#120438',
        width: '100%',
        padding: 16,
        borderRadius: 32,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    buttonCancel: {
        padding: 8,
        borderWidth: 2.5,
        borderColor: '#ec5151',
        borderRadius: 50,
        alignItems: 'center'
    },
    buttonOK: {
        padding: 8,
        borderWidth: 2.5,
        borderColor: '#5c6bf3',
        borderRadius: 50,
        alignItems: 'center'

    },
    button: {
        width: 150,
        marginHorizontal: 16,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
      }
});