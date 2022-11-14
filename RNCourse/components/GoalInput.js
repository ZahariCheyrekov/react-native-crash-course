import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export default function GoalInput({ addGoalHandler }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHanlder(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalComponentHandler() {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
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