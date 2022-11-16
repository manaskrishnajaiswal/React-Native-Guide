import React from "react";
import { Text } from "react-native";

const MealDetailScreen = ({ route }) => {
  const mealID = route.params.mealID;
  return <Text>MealDetailScreen - {mealID}</Text>;
};

export default MealDetailScreen;
