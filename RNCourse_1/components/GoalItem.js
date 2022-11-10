import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.goalRemove.bind(this, props.id)}
      >
        <Text style={styles.goalItemText}>{props.itemData}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
});
