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
                <Button title='Add Goal' onPress={addGoalComponentHandler} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
});