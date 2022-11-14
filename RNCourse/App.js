import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString()
      }
    ]);
  }

  function deleteGoalHanlder(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color={'#5e0acc'}
        onPress={startAddGoalHandler}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(item) => {
            return (
              <GoalItem
                text={item.item.text}
                id={item.item.id}
                onDeleteItem={deleteGoalHanlder}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
});
