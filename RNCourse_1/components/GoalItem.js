import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.goalRemove.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.itemData}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
