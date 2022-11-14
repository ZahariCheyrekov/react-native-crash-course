import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Image } from "react-native";

export default function GoalInput({ addGoalHandler, endAddGoalHandler, visible }) {
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
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
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
                        <Button title='Cancel' onPress={endAddGoalHandler} />
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
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
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