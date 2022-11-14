import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString()
      }
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(item) => {
            return <GoalItem text={item.item.text} />;
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
