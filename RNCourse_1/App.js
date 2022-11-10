import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goaltext, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: goaltext, id: Math.random().toString() },
    ]);
    setGoalText("");
    // console.log(goaltext);
  }

  function goalRemoveHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && (
        <GoalInput
          onAddGoal={addGoalHandler}
          goalInput={goalInputHandler}
          goaltext={goaltext}
          visible={modalIsVisible}
        />
      )}
      <Text>List of Goals...</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData.item.text}
                id={itemData.item.id}
                goalRemove={goalRemoveHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
  },
});
