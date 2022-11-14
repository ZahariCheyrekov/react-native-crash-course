import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

export default function GoalInput({ addGoalHandler, visible }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHanlder(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalComponentHandler() {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHanlder}
                    value={enteredGoalText}
                >
                </TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalComponentHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});